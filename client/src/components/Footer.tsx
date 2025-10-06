import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import logoImg from "@assets/ChatGPT Image Oct 6, 2025, 08_02_17 PM_1759761182294.png";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src={logoImg} 
              alt="Persystance" 
              className="h-16 mb-3"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Rapid MVP development for startups. Build in 2 weeks, launch in 30 days.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>About Us</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm mb-3">Connect</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover-elevate"
                data-testid="link-twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover-elevate"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover-elevate"
                data-testid="link-github"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="mailto:contact@persystance.com" 
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover-elevate"
                data-testid="link-email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>© 2025 Persystance Networks. All rights reserved. | 13+ Years of Software Excellence</p>
        </div>
      </div>
    </footer>
  );
}
