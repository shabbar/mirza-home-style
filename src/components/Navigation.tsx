import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Our Expertise", href: "#expertise" },
    { label: "Projects", href: "#projects" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-lg border-b border-luxury-gold/20 shadow-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-center md:justify-between h-16 md:h-20">
          {/* Logo - Centered on mobile */}
          <div className="flex-shrink-0 text-center md:text-left">
            <h1 className="text-lg md:text-2xl font-bold text-luxury-gold hover:scale-105 transition-transform duration-300 cursor-pointer">
              S.A. Mirza Enterprises
            </h1>
          </div>

          {/* Desktop Menu - Hidden on mobile */}
          <div className="hidden md:flex flex-1 justify-end">
            <div className="flex items-center space-x-6 lg:space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative text-foreground hover:text-luxury-gold transition-all duration-300 font-medium text-sm lg:text-base group whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button - Centered */}
          <div className="md:hidden absolute right-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-luxury-gold transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;