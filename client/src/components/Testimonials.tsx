import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Persystance turned our idea into a working product in just 2 weeks. The quality exceeded our expectations and we launched on time.",
      author: "Sarah Chen",
      role: "Founder, HealthTrack",
      company: "USA",
    },
    {
      quote: "Best investment we made. They saved us 6 months and $100K compared to hiring a full team. The MVP helped us secure seed funding.",
      author: "Michael Roberts",
      role: "CEO, SupremeX",
      company: "Singapore",
    },
    {
      quote: "Professional, fast, and transparent. They guided us through every step and delivered exactly what we needed to validate our market.",
      author: "Priya Sharma",
      role: "Co-founder, Evender",
      company: "India",
    },
  ];

  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by founders and innovators worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 hover-elevate transition-all duration-300"
              data-testid={`card-testimonial-${index}`}
            >
              <Quote className="w-10 h-10 text-primary mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
