import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageCircle } from "lucide-react";

export default function ContactForm() {
  // WhatsApp Business number - Update with your actual WhatsApp Business number
  // Format: Country code + number (no spaces, no special characters)
  // Example: 919876543210 for India, 15551234567 for US
  const whatsappNumber = "919876543210"; // REPLACE WITH YOUR WHATSAPP BUSINESS NUMBER
  
  // Pre-filled message that appears when chat opens
  const message = "Hi! I'm interested in building an MVP with Persystance Networks. I'd like to discuss my project.";
  
  // Create WhatsApp click-to-chat URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 scroll-mt-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-semibold mb-6 text-foreground leading-tight">
              Ready to Launch Your Idea?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Start a conversation on WhatsApp. Get instant responses and a custom quote in 24 hours.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-0.5">Instant Response</h3>
                  <p className="text-sm text-muted-foreground">Chat with us directly on WhatsApp</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-0.5">24-Hour Quote</h3>
                  <p className="text-sm text-muted-foreground">Get your custom quote delivered fast</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-0.5">Free Consultation</h3>
                  <p className="text-sm text-muted-foreground">30-min strategy session included</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-background border border-border rounded-xl p-12 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#25D366]/10 rounded-full mb-6">
                <MessageCircle className="w-10 h-10 text-[#25D366]" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Let's Talk on WhatsApp</h3>
              <p className="text-muted-foreground mb-8">
                Skip the form. Start an instant conversation and get your questions answered in real-time.
              </p>
            </div>
            
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white border-[#20bd5a]" 
              size="lg"
              data-testid="button-whatsapp"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Start WhatsApp Chat
            </Button>
            
            <p className="text-xs text-muted-foreground mt-4">
              Available Monday - Friday, 9 AM - 6 PM IST
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
