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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-foreground">
            Technology Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge tech stack for every type of MVP
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(technologies).map(([category, techs], index) => (
            <div 
              key={index} 
              className="bg-muted/30 border border-border rounded-xl p-8 hover-elevate transition-all duration-300"
              data-testid={`tech-category-${index}`}
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary" 
                    className="px-3 py-1 text-sm transition-all duration-200 hover:scale-105"
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
