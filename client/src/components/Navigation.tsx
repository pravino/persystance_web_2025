import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Link, useLocation } from "wouter";
import logoImg from "@assets/persystance_1759398114872.webp";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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

  const servicesItems = [
    { label: "MVP Development", description: "Build and launch in 2 weeks", id: "about", type: "scroll" as const },
    { label: "Managed Services", description: "Cloud infrastructure & ERP systems", id: "/managed-services", type: "link" as const },
    { label: "Trading & Portfolio Management", description: "White-label exchanges and risk management", id: "/trading-portfolio", type: "link" as const },
    { label: "Telegram & Web3 Games", description: "Viral gaming platforms", id: "/telegram-games", type: "link" as const },
    { label: "Enterprise Consulting", description: "Strategic technology partnerships", id: "/institute", type: "link" as const },
  ];

  const companyItems = [
    { label: "About Us", description: "Our story and expertise", id: "about", type: "scroll" as const },
    { label: "Portfolio", description: "Our work and case studies", id: "portfolio", type: "scroll" as const },
    { label: "Compliance & Security", description: "ISO, GDPR, and enterprise standards", id: "/compliance", type: "link" as const },
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
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="/ready-made-products">
              <button className="text-sm font-medium hover:text-primary transition-colors">
                Production-Ready Platforms
              </button>
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {servicesItems.map((item) => (
                        <li key={item.id}>
                          {item.type === "link" ? (
                            <NavigationMenuLink asChild>
                              <Link href={item.id} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">{item.label}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          ) : (
                            <button
                              onClick={() => scrollToSection(item.id)}
                              className="w-full text-left block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.label}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {companyItems.map((item) => (
                        <li key={item.id}>
                          {item.type === "link" ? (
                            <NavigationMenuLink asChild>
                              <Link href={item.id} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">{item.label}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          ) : (
                            <button
                              onClick={() => scrollToSection(item.id)}
                              className="w-full text-left block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.label}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </button>
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
              <div className="px-4 pt-2">
                <Link href="/ready-made-products">
                  <div
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-left py-2 hover:text-primary transition-colors cursor-pointer font-medium"
                  >
                    Production-Ready Platforms
                  </div>
                </Link>
              </div>

              <div className="px-4 border-t border-border pt-4">
                <div className="text-sm font-semibold text-muted-foreground mb-2">Services</div>
                <div className="flex flex-col gap-2 pl-2">
                  {servicesItems.map((item) =>
                    item.type === "link" ? (
                      <Link key={item.id} href={item.id}>
                        <div
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-left py-2 hover:text-primary transition-colors cursor-pointer"
                        >
                          {item.label}
                        </div>
                      </Link>
                    ) : (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-left py-2 hover:text-primary transition-colors"
                      >
                        {item.label}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="px-4">
                <div className="text-sm font-semibold text-muted-foreground mb-2">Company</div>
                <div className="flex flex-col gap-2 pl-2">
                  {companyItems.map((item) =>
                    item.type === "link" ? (
                      <Link key={item.id} href={item.id}>
                        <div
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-left py-2 hover:text-primary transition-colors cursor-pointer"
                        >
                          {item.label}
                        </div>
                      </Link>
                    ) : (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-left py-2 hover:text-primary transition-colors"
                      >
                        {item.label}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="px-4 pt-2 border-t border-border">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left py-2 hover:text-primary transition-colors font-medium"
                >
                  Contact
                </button>
              </div>

              <div className="px-4">
                <Button
                  className="w-full"
                  onClick={() => scrollToSection("contact")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
