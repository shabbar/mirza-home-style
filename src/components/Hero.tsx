import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury interior design by S.A. Mirza Enterprises"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-luxury-gold-light/20 backdrop-blur-sm rounded-full px-4 py-2 border border-luxury-gold/30">
            <Star className="w-4 h-4 text-luxury-gold" />
            <span className="text-sm font-medium text-luxury-gold">Premium Interior Design</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Transform Your Space Into
            <span className="block text-luxury-gold">Luxury Living</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            S.A. Mirza Enterprises brings over two decades of expertise in creating
            sophisticated, functional, and breathtaking interior spaces that reflect your unique style.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gold" size="lg" className="min-w-[200px]">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="luxury-outline" size="lg" className="min-w-[200px]">
              View Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto pt-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-luxury-gold">20+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-luxury-gold">500+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-luxury-gold">98%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;