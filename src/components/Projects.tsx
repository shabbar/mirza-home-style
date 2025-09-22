import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin } from "lucide-react";
import kitchenImage from "@/assets/kitchen-design.jpg";
import bedroomImage from "@/assets/bedroom-design.jpg";
import officeImage from "@/assets/office-design.jpg";

const Projects = () => {
  const projects = [
    {
      image: kitchenImage,
      title: "Modern Luxury Kitchen",
      location: "Karachi, Pakistan",
      category: "Residential",
      description: "A sophisticated kitchen design featuring navy blue cabinetry with gold accents, marble countertops, and state-of-the-art appliances for a growing family."
    },
    {
      image: bedroomImage,
      title: "Master Bedroom Suite",
      location: "Lahore, Pakistan",
      category: "Residential",
      description: "An elegant master bedroom combining comfort and luxury with custom furniture, ambient lighting, and premium textiles in calming color palette."
    },
    {
      image: officeImage,
      title: "Executive Office Space",
      location: "Islamabad, Pakistan",
      category: "Commercial",
      description: "A professional office design that enhances productivity while maintaining sophistication through strategic space planning and premium finishes."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-luxury-cream">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore our portfolio of completed projects that showcase our commitment to
            excellence and attention to detail in every space we transform.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-luxury transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-luxury opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="gold" size="sm">
                    <ExternalLink className="w-4 h-4" />
                    View Details
                  </Button>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-luxury-gold text-luxury-navy px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-luxury-navy mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-luxury-gold text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 space-y-4">
          <h3 className="text-2xl font-bold text-luxury-navy">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can transform your space into something extraordinary.
            Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
            <Button variant="luxury" size="lg">
              View Full Portfolio
            </Button>
            <Button variant="gold-outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;