import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Our Expertise", href: "#expertise" },
    { label: "Projects", href: "#projects" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Residential Design",
    "Commercial Spaces",
    "Kitchen & Bath",
    "Color Consultation",
    "Furniture & Decor",
    "Lighting Design"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-luxury-navy text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-luxury-gold mb-4">
                SAM Enterprises
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Excellence in Architecture, Interior Design, and Construction. Specializing in spaces that blend aesthetic beauty with exceptional functionality.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-luxury-gold" />
                <span className="text-sm">+92 3215 700 004</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-luxury-gold" />
                <span className="text-sm">projects@samenterprizes.biz</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-luxury-gold" />
                <span className="text-sm">Islamabad, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-luxury-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-luxury-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-luxury-gold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-luxury-gold mb-4">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe to our newsletter for design tips and project updates.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-luxury-gold"
                />
                <Button variant="gold" size="sm" className="w-full">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-bold text-luxury-gold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-navy transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 S.A. Mirza Enterprises (Pvt.) Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;