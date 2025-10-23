import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Link, useLocation } from "wouter";
import logoImg from "@assets/persystance_1759398114872.webp";

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const scrollToSection = (id: string) => {
    if (location !== "/") {
      setLocation("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: "About", id: "about", type: "scroll" as const },
    { label: "Process", id: "process", type: "scroll" as const },
    { label: "Portfolio", id: "portfolio", type: "scroll" as const },
    { label: "Telegram Games", id: "/telegram-games", type: "link" as const },
    { label: "Institute", id: "/institute", type: "link" as const },
    { label: "Contact", id: "contact", type: "scroll" as const },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <span 
              className="hover-elevate px-2 py-2 rounded-md transition-all inline-block cursor-pointer"
              data-testid="button-logo"
            >
              <img 
                src={logoImg} 
                alt="Persystance" 
                className="h-12"
              />
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => 
              item.type === "link" ? (
                <Link key={item.id} href={item.id}>
                  <span
                    className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                    data-testid={`link-${item.id.replace('/', '')}`}
                  >
                    {item.label}
                  </span>
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium hover:text-primary transition-colors"
                  data-testid={`link-${item.id}`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
            
            <Button
              className="hidden md:flex"
              onClick={() => scrollToSection("contact")}
              data-testid="button-nav-cta"
            >
              Get Started
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => 
                item.type === "link" ? (
                  <Link key={item.id} href={item.id}>
                    <span
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-left px-4 py-2 hover-elevate rounded-md transition-all cursor-pointer"
                      data-testid={`link-mobile-${item.id.replace('/', '')}`}
                    >
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left px-4 py-2 hover-elevate rounded-md transition-all"
                    data-testid={`link-mobile-${item.id}`}
                  >
                    {item.label}
                  </button>
                )
              )}
              <Button
                className="w-full"
                onClick={() => scrollToSection("contact")}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
