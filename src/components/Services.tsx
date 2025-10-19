import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Palette, Lightbulb, Sofa, ChefHat } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Complete home makeovers that blend functionality with stunning aesthetics for every room in your house.",
      features: ["Living Rooms", "Bedrooms", "Bathrooms", "Home Offices"]
    },
    {
      icon: Building2,
      title: "Commercial Spaces",
      description: "Professional interior design for offices, restaurants, and retail spaces that enhance business success.",
      features: ["Office Design", "Retail Spaces", "Restaurants", "Hotels"]
    },
    {
      icon: ChefHat,
      title: "Kitchen & Bath",
      description: "Specialized design for kitchens and bathrooms combining luxury finishes with practical layouts.",
      features: ["Custom Kitchens", "Luxury Bathrooms", "Storage Solutions", "Premium Fixtures"]
    },
    {
      icon: Palette,
      title: "Color Consultation",
      description: "Expert color schemes and material selection to create harmonious and sophisticated environments.",
      features: ["Color Palettes", "Material Selection", "Texture Coordination", "Lighting Design"]
    },
    {
      icon: Sofa,
      title: "Furniture & Decor",
      description: "Curated selection and custom furniture design to complement your interior design vision perfectly.",
      features: ["Custom Furniture", "Art Selection", "Accessories", "Window Treatments"]
    },
    {
      icon: Lightbulb,
      title: "Lighting Design",
      description: "Comprehensive lighting solutions that enhance ambiance and functionality throughout your space.",
      features: ["Ambient Lighting", "Task Lighting", "Accent Lighting", "Smart Controls"]
    }
  ];

  return (
    <section id="services" className="py-8 md:py-12 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From concept to completion, we offer comprehensive interior design services
            tailored to transform your vision into reality with unparalleled attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-luxury transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-luxury-navy" />
                </div>
                <CardTitle className="text-xl font-bold text-luxury-navy">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-luxury-navy font-medium">
                      • {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="luxury-outline" size="sm" className="mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="luxury" size="lg">
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;