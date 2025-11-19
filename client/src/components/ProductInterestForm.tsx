import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, CheckCircle2 } from "lucide-react";
import type { Product } from "@/data/products";
import * as analytics from "@/lib/analytics";

interface ProductInterestFormProps {
  product: Product;
  onClose: () => void;
}

export default function ProductInterestForm({ product, onClose }: ProductInterestFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    tier: "MVP",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedTier = product.tiers.find(t => t.name === formData.tier);
    const price = selectedTier?.price || 0;
    
    const hubspotPortalId = "244409941";
    const hubspotFormId = "623fefde-c514-4c69-a7e8-efe8958ed2e0";
    
    const fullMessage = `Product: ${product.name} | Tier: ${formData.tier} Edition ($${price.toLocaleString()})${formData.message ? ` | Message: ${formData.message}` : ''}`;
    
    const hubspotData = {
      fields: [
        { name: "firstname", value: formData.name.split(' ')[0] },
        { name: "lastname", value: formData.name.split(' ').slice(1).join(' ') || formData.name.split(' ')[0] },
        { name: "email", value: formData.email },
        { name: "phone", value: formData.phone },
        { name: "0-2/name", value: formData.company },
        { name: "message", value: fullMessage }
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    };
    
    console.log("Submitting to HubSpot:", hubspotData);
    
    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(hubspotData),
        }
      );

      console.log("HubSpot response status:", response.status);
      const responseData = await response.json();
      console.log("HubSpot response data:", responseData);

      if (response.ok) {
        analytics.trackProductInterest(product.name, formData.tier, price);
        setSubmitted(true);
        
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        console.error("Failed to submit to HubSpot", responseData);
        alert("There was an error submitting your interest. Please try WhatsApp instead.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your interest. Please try WhatsApp instead.");
    }
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {!submitted ? (
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Express Interest</h2>
                <p className="text-muted-foreground">
                  {product.name} - Get detailed information and pricing
                </p>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company/Business (Optional)</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Inc"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="tier">Which Edition? *</Label>
                <Select value={formData.tier} onValueChange={(value) => setFormData({ ...formData, tier: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {product.tiers.map((tier) => (
                      <SelectItem key={tier.name} value={tier.name}>
                        {tier.name} Edition - ${tier.price.toLocaleString()} ({tier.deploymentDays} days)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message (Optional)</Label>
                <textarea
                  id="message"
                  className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project timeline, specific requirements, or any questions..."
                />
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="flex-1">
                  Submit Interest
                </Button>
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                We'll respond within 24 hours with detailed documentation and next steps.
              </p>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
            <p className="text-muted-foreground mb-4">
              We've received your interest in <strong>{product.name}</strong> ({formData.tier} Edition).
            </p>
            <p className="text-sm text-muted-foreground">
              Our team will reach out within 24 hours with detailed documentation, 
              demo access, and answers to your questions.
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}
