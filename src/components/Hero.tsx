import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-luxury-cream via-background to-accent py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-luxury-navy leading-tight">
            <span className="bg-gradient-to-r from-luxury-gold to-luxury-navy bg-clip-text text-transparent">SA Mirza</span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground mt-2 block">
              Excellence in Architecture, Interior Design & Construction
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8 leading-relaxed">
            Based in Islamabad, we specialize in designing and constructing spaces that blend aesthetic beauty with exceptional functionality. Delivering outstanding results across Hospitality, Telecommunications, and Corporate sectors.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-8">
            <div className="text-center p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-card border border-luxury-gold/10 hover:shadow-gold transition-all">
              <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-1">30+</div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium">Years Experience</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-card border border-luxury-gold/10 hover:shadow-gold transition-all">
              <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-1">100+</div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium">Projects Completed</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-card border border-luxury-gold/10 hover:shadow-gold transition-all">
              <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-1">30+</div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium">Trusted Partners</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center text-luxury-navy bg-white/60 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-luxury-gold/20 shadow-card">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-luxury-gold">Phone:</span>
              <a href="tel:+923215700004" className="text-sm hover:text-luxury-gold transition-colors">+92 3215 700 004</a>
            </div>
            <div className="hidden sm:block w-px h-4 bg-luxury-gray"></div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-luxury-gold">Email:</span>
              <a href="mailto:projects@samenterprizes.biz" className="text-sm hover:text-luxury-gold transition-colors">projects@samenterprizes.biz</a>
            </div>
            <div className="hidden sm:block w-px h-4 bg-luxury-gray"></div>
            <div className="flex items-center gap-2">
              <a href="mailto:info@samenterprises.biz" className="text-sm hover:text-luxury-gold transition-colors">info@samenterprises.biz</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;