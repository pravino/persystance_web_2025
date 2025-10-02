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
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technology Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge tech stack for every type of MVP
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(technologies).map(([category, techs], index) => (
            <div 
              key={index} 
              className="bg-card border border-card-border rounded-lg p-8"
              data-testid={`tech-category-${index}`}
            >
              <h3 className="text-xl font-semibold mb-6">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {techs.map((tech, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm"
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
