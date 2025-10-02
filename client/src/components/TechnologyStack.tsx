import { Badge } from "@/components/ui/badge";

export default function TechnologyStack() {
  const technologies = {
    "Web Development": [
      "React", "Next.js", "Vue.js", "Node.js", "TypeScript", "Tailwind CSS"
    ],
    "Mobile Development": [
      "React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"
    ],
    "Backend & Cloud": [
      "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Google Cloud"
    ],
    "AI & Blockchain": [
      "OpenAI", "TensorFlow", "Ethereum", "Smart Contracts", "Web3"
    ],
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Technology Expertise
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cutting-edge tech stack for every type of MVP
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(technologies).map(([category, techs], index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-card to-card/30 backdrop-blur-xl border-2 border-card-border rounded-2xl p-10 hover-elevate transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl"
              data-testid={`tech-category-${index}`}
            >
              <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {techs.map((tech, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary" 
                    className="px-5 py-2.5 text-sm font-semibold hover-elevate"
                    data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
