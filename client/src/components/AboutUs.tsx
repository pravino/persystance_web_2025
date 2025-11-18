import { Card } from "@/components/ui/card";
import { Users, Target, Award, Zap } from "lucide-react";
import teamImage from "@assets/stock_images/professional_office__b5e9cf53.jpg";

export default function AboutUs() {
  const stats = [
    { value: "23 Years", label: "Personal Experience" },
    { value: "13 Years", label: "In Business" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "30 Days", label: "Average Launch" },
  ];

  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Speed & Precision",
      description: "We deliver production-ready MVPs in 2 weeks with rigorous quality standards.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Market-First Approach",
      description: "Every MVP is built for immediate market validation and user adoption.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partnership Mindset",
      description: "We work as an extension of your team, aligned with your business goals.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Expertise",
      description: "23 years of personal experience, 13 years in business - direct access to senior developer, no juniors.",
    },
  ];

  return (
    <section className="py-24 bg-background" id="about">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl lg:text-5xl font-semibold mb-6 text-foreground">
              About Persystance Networks
            </h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Founded in 2012, backed by 23 years of personal software development experience 
              since 2002. What sets us apart is our unique ability to deliver production-grade MVPs 
              in just 2 weeks and launch them within 30 days.
            </p>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              We've partnered with leading enterprises across telecommunications, fintech, 
              healthcare, and transportation sectors, building scalable solutions that 
              handle millions of users with direct access to senior-level expertise.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our proven methodology combines rapid development with enterprise-grade 
              architecture, delivering transparent pricing and honest timelines - no "contact us" 
              games, just real estimates you can trust.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src={teamImage} 
                alt="Persystance Networks team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 text-center bg-background border-border"
              data-testid={`card-stat-${index}`}
            >
              <div className="text-4xl font-semibold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-4xl lg:text-5xl font-semibold text-center mb-12 text-foreground">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-8 bg-background border-border hover-elevate"
                data-testid={`card-value-${index}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <div className="text-primary">{value.icon}</div>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
