import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import testimonial1Img from "@assets/stock_images/professional_busines_62a43220.jpg";
import testimonial2Img from "@assets/stock_images/professional_busines_df137c6c.jpg";
import testimonial3Img from "@assets/stock_images/professional_busines_fa387071.jpg";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Persystance turned our idea into a working product in just 2 weeks. The quality exceeded our expectations and we launched on time.",
      author: "Sarah Chen",
      role: "Founder, HealthTrack",
      company: "USA",
      image: testimonial1Img,
    },
    {
      quote: "Best investment we made. They saved us 6 months and $100K compared to hiring a full team. The MVP helped us secure seed funding.",
      author: "Michael Roberts",
      role: "CEO, SupremeX",
      company: "Singapore",
      image: testimonial2Img,
    },
    {
      quote: "Professional, fast, and transparent. They guided us through every step and delivered exactly what we needed to validate our market.",
      author: "Priya Sharma",
      role: "Co-founder, Evender",
      company: "India",
      image: testimonial3Img,
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trusted by founders and innovators worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-10 hover-elevate transition-all duration-500 hover:scale-105 bg-gradient-to-br from-card to-card/50 backdrop-blur-xl border-2 shadow-xl hover:shadow-2xl"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-chart-2/10 flex items-center justify-center mb-6">
                <Quote className="w-7 h-7 text-primary" />
              </div>
              <p className="text-lg text-foreground/90 mb-8 leading-relaxed italic font-medium">
                "{testimonial.quote}"
              </p>
              <div className="border-t-2 border-border pt-6 flex items-center gap-4">
                <Avatar className="w-16 h-16 border-2 border-primary/20">
                  <AvatarImage src={testimonial.image} alt={testimonial.author} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-chart-1 text-primary-foreground font-bold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-lg">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground font-medium">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-primary font-medium">
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
