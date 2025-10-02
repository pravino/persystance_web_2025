import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Persystance turned our idea into a working product in just 2 weeks. The quality exceeded our expectations and we launched on time.",
      author: "Keith Buck",
      role: "Founder",
      company: "Prime Group",
    },
    {
      quote: "Best investment we made. They saved us 6 months and $100K compared to hiring a full team. The MVP helped us secure seed funding.",
      author: "R. Mannivaran",
      role: "CEO, SupremeX",
      company: "Singapore",
    },
    {
      quote: "Professional, fast, and transparent. They guided us through every step and delivered exactly what we needed to validate our market.",
      author: "Kusal Fonseka",
      role: "Director",
      company: "Kangaroo Cabs",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by founders and innovators worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 bg-muted/30 border-border"
              data-testid={`card-testimonial-${index}`}
            >
              <Quote className="w-8 h-8 text-primary mb-6" />
              <p className="text-base text-foreground mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-6 flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
