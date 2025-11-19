import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { createContactInHubSpot, type ProductLead } from "./hubspot";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/product-interest", async (req, res) => {
    try {
      const lead: ProductLead = req.body;
      
      if (!lead.name || !lead.email || !lead.phone || !lead.productName || !lead.tier) {
        return res.status(400).json({ 
          success: false, 
          error: "Missing required fields" 
        });
      }

      const result = await createContactInHubSpot(lead);
      
      if (result.success) {
        return res.json({ 
          success: true, 
          message: "Lead submitted successfully",
          contactId: result.contactId
        });
      } else {
        return res.status(500).json({ 
          success: false, 
          error: "Failed to create contact in HubSpot" 
        });
      }
    } catch (error: any) {
      console.error("Error processing product interest:", error);
      return res.status(500).json({ 
        success: false, 
        error: error.message || "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
