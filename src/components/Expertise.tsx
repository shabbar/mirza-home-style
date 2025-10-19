import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Clock } from "lucide-react";

const Expertise = () => {
  const achievements = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      description: "Satisfied customers across residential and commercial projects"
    },
    {
      icon: Award,
      number: "20+",
      label: "Years Experience",
      description: "Two decades of excellence in interior design industry"
    },
    {
      icon: CheckCircle,
      number: "98%",
      label: "Success Rate",
      description: "Projects completed on time and within budget"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support",
      description: "Dedicated customer service throughout your project"
    }
  ];

  const expertise = [
    "Civil Works & Interior Design",
    "Furniture Manufacturing",
    "Flooring & Wall Finishes",
    "Glass Works",
    "Specialized Joinery",
    "Electrical & HVAC Systems",
    "Plumbing & Allied Services",
    "General Order & Suppliers"
  ];

  return (
    <section id="expertise" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6">
                Our Expertise & Experience
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For more than three decades, S.A. Mirza Enterprises has been redefining interiors with a perfect balance of creativity, craftsmanship, and technical excellence. We are trusted for delivering exceptional spaces that not only meet but consistently exceed client expectations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our strength lies in combining innovative design vision with practical expertise, ensuring every project is both beautiful and functional. From concept to completion, we manage every detail with precision, passion, and professionalism.
              </p>
              <h3 className="text-2xl font-bold text-luxury-navy mb-4">
                One-Stop Turnkey Solutions
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Why deal with five different vendors when you can rely on S.A. Mirza Enterprises (Pvt.) Ltd. for a complete one-window solution? With decades of proven expertise, we specialize in delivering end-to-end turnkey projects, managing every detail with responsibility and precision.
              </p>
            </div>

            {/* Expertise List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button variant="luxury" size="lg">
                Learn About Our Process
              </Button>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card transition-shadow duration-300">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-luxury-navy">
                      {achievement.number}
                    </div>
                    <div className="font-semibold text-luxury-gold text-sm mb-2">
                      {achievement.label}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-6">
            ✨ We don't just design spaces—we create experiences that inspire.
          </p>
          <blockquote className="text-xl md:text-2xl font-medium text-luxury-navy italic leading-relaxed">
            "Our mission is simple yet profound: to transform spaces into extraordinary environments that reflect the individuality of our clients while enriching their everyday lives through thoughtful, timeless design."
          </blockquote>
          <cite className="block mt-6 text-luxury-gold font-semibold">
            — Sikander Ali Mirza, Founder
          </cite>
        </div>
      </div>
    </section>
  );
};

export default Expertise;