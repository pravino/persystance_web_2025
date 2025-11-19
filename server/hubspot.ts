import { Client } from '@hubspot/api-client';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=hubspot',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('HubSpot not connected');
  }
  return accessToken;
}

export async function getUncachableHubSpotClient() {
  const accessToken = await getAccessToken();
  return new Client({ accessToken });
}

export interface ProductLead {
  name: string;
  email: string;
  phone: string;
  company?: string;
  productName: string;
  tier: string;
  price: number;
  message?: string;
}

export async function createContactInHubSpot(lead: ProductLead) {
  try {
    const client = await getUncachableHubSpotClient();
    
    const messageSummary = `Product: ${lead.productName} | Tier: ${lead.tier} Edition ($${lead.price.toLocaleString()})${lead.message ? ` | Message: ${lead.message}` : ''}`;
    
    const contactProperties = {
      email: lead.email,
      firstname: lead.name.split(' ')[0],
      lastname: lead.name.split(' ').slice(1).join(' ') || lead.name.split(' ')[0],
      phone: lead.phone,
      company: lead.company || '',
      hs_lead_status: 'NEW',
      lifecyclestage: 'lead',
      message: messageSummary
    };

    const response = await client.crm.contacts.basicApi.create({
      properties: contactProperties,
      associations: []
    });

    console.log('Contact created in HubSpot:', response.id);
    return { success: true, contactId: response.id };
  } catch (error: any) {
    console.error('Error creating HubSpot contact:', error);
    
    if (error.body?.category === 'CONFLICT') {
      console.log('Contact already exists, updating instead');
      try {
        const client = await getUncachableHubSpotClient();
        const searchResponse = await client.crm.contacts.searchApi.doSearch({
          filterGroups: [{
            filters: [{
              propertyName: 'email',
              operator: 'EQ' as any,
              value: lead.email
            }]
          }],
          properties: ['email'],
          limit: 1
        });

        if (searchResponse.results.length > 0) {
          const contactId = searchResponse.results[0].id;
          const updateMessage = `Updated: ${lead.productName} | ${lead.tier} Edition ($${lead.price.toLocaleString()})${lead.message ? ` | ${lead.message}` : ''}`;
          await client.crm.contacts.basicApi.update(contactId, {
            properties: {
              message: updateMessage,
              hs_lead_status: 'NEW'
            }
          });
          console.log('Updated existing contact:', contactId);
          return { success: true, contactId, updated: true };
        }
      } catch (updateError) {
        console.error('Error updating contact:', updateError);
      }
    }
    
    return { success: false, error: error.message };
  }
}
