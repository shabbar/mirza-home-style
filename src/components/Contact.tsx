import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+92 3215 700 004"],
      description: "Call us during business hours"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["projects@samenterprizes.biz"],
      description: "Send us your project details"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Islamabad, Pakistan"],
      description: "Visit our design studio"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      description: "We're here to help"
    }
  ];

  return (
    <section id="contact" className="py-8 md:py-12 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to transform your space? Contact us today for a consultation.
            We'd love to discuss your project and bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-luxury-navy">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Smith" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="+92 300 1234 567" />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                    Project Type
                  </label>
                  <select className="w-full p-3 border border-input rounded-md bg-background">
                    <option>Select project type</option>
                    <option>Residential Design</option>
                    <option>Commercial Design</option>
                    <option>Kitchen & Bath</option>
                    <option>Consultation Only</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    rows={4}
                  />
                </div>
                <Button variant="luxury" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-luxury-navy mb-6">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-card transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="mx-auto w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mb-4">
                        <info.icon className="w-6 h-6 text-luxury-navy" />
                      </div>
                      <h4 className="font-bold text-luxury-navy mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-foreground font-medium">
                          {detail}
                        </p>
                      ))}
                      <p className="text-xs text-muted-foreground mt-2">
                        {info.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-gradient-luxury flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <h4 className="font-bold text-lg">Visit Our Studio</h4>
                  <p className="text-sm opacity-90">Schedule an appointment to see our work</p>
                </div>
              </div>
            </Card>

            <div className="text-center">
              <Button variant="gold" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;