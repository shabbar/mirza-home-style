import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/sam-enterprises-logo.jpg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href === '#portfolio') {
      e.preventDefault();
      // Trigger showing completed projects
      window.dispatchEvent(new CustomEvent('showPortfolio'));
      // Then scroll to portfolio
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Our Expertise", href: "#expertise" },
    { label: "Projects", href: "#projects" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-luxury-cream via-background to-luxury-cream backdrop-blur-xl border-b border-luxury-gold/30 shadow-medium">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-center md:justify-between h-16 md:h-20">
          {/* Logo with Company Name - Centered on mobile */}
          <div className="flex-shrink-0 text-center md:text-left">
            <a href="#home" className="flex items-center gap-4 hover:scale-105 transition-all duration-500 group">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="SAM Enterprises Logo" 
                  className="h-14 md:h-16 w-auto object-contain drop-shadow-lg transition-all duration-500 group-hover:drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-luxury-gold/0 group-hover:bg-luxury-gold/10 rounded-full blur-xl transition-all duration-500"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-playfair font-bold bg-gradient-gold bg-clip-text text-transparent tracking-wide leading-tight">
                  SAM
                </span>
                <span className="text-xs md:text-sm font-montserrat font-semibold text-luxury-bronze tracking-[0.25em] uppercase">
                  Enterprises
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu - Hidden on mobile */}
          <div className="hidden md:flex flex-1 justify-end">
            <div className="flex items-center space-x-8 lg:space-x-10">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="relative text-foreground hover:text-luxury-gold transition-all duration-500 font-montserrat font-medium text-sm lg:text-base group whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold transition-all duration-500 group-hover:w-full shadow-gold-glow"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button - Centered */}
          <div className="md:hidden absolute right-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-luxury-gold/10 hover:text-luxury-gold transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-gradient-to-b from-luxury-cream to-background border-t border-luxury-gold/20 rounded-b-lg shadow-medium">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="block px-4 py-3 text-foreground hover:text-luxury-gold hover:bg-luxury-gold/5 transition-all duration-300 rounded-md font-montserrat font-medium"
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