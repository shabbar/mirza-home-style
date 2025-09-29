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
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="block text-luxury-gold mb-2">SAM Enterprises</span>
            Excellence in Architecture, Interior Design, and Construction
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            At S. A. Mirza Enterprises Private Limited (SAM Enterprises), we specialize in designing and constructing spaces that blend aesthetic beauty with exceptional functionality. Based in Islamabad, we are proud to be a leader in architecture, interior design, and construction, delivering outstanding results across diverse sectors, including Hospitality and Telecommunications.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-luxury-gold mt-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Phone:</span>
              <span className="text-sm">+92 3215 700 004</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Email:</span>
              <span className="text-sm">projects@samenterprizes.biz</span>
            </div>
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