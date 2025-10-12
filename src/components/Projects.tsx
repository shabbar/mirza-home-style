import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

// Telenor
import telenor1 from "@/assets/projects/telenor-1.jpg";
import telenor2 from "@/assets/projects/telenor-2.jpg";
import telenor3 from "@/assets/projects/telenor-3.jpg";

// 10 Pearls
import pearls1 from "@/assets/projects/10pearls-1.jpg";
import pearls2 from "@/assets/projects/10pearls-2.jpg";

// Marriott
import marriott1 from "@/assets/projects/marriott-1.jpg";
import marriott2 from "@/assets/projects/marriott-2.jpg";
import marriott3 from "@/assets/projects/marriott-3.jpg";
import marriott4 from "@/assets/projects/marriott-4.jpg";
import marriott5 from "@/assets/projects/marriott-5.jpg";
import marriott6 from "@/assets/projects/marriott-6.jpg";
import marriott7 from "@/assets/projects/marriott-7.jpg";

// PC Legacy
import pcLegacy1 from "@/assets/projects/pc-legacy-1.jpg";
import pcLegacy2 from "@/assets/projects/pc-legacy-2.jpg";
import pcLegacy3 from "@/assets/projects/pc-legacy-3.jpg";
import pcLegacy4 from "@/assets/projects/pc-legacy-4.jpg";
import pcLegacy5 from "@/assets/projects/pc-legacy-5.jpg";
import pcLegacy6 from "@/assets/projects/pc-legacy-6.jpg";

// PAF
import paf1 from "@/assets/projects/paf-1.jpg";
import paf2 from "@/assets/projects/paf-2.jpg";
import paf3 from "@/assets/projects/paf-3.jpg";
import paf4 from "@/assets/projects/paf-4.jpg";

// Mindstir
import mindstir1 from "@/assets/projects/mindstir-1.jpg";
import mindstir2 from "@/assets/projects/mindstir-2.jpg";
import mindstir3 from "@/assets/projects/mindstir-3.jpg";
import mindstir4 from "@/assets/projects/mindstir-4.jpg";
import mindstir5 from "@/assets/projects/mindstir-5.jpg";
import mindstir6 from "@/assets/projects/mindstir-6.jpg";
import mindstir7 from "@/assets/projects/mindstir-7.jpg";
import mindstir8 from "@/assets/projects/mindstir-8.jpg";
import mindstir9 from "@/assets/projects/mindstir-9.jpg";
import mindstir10 from "@/assets/projects/mindstir-10.jpg";
import mindstir11 from "@/assets/projects/mindstir-11.jpg";
import mindstir12 from "@/assets/projects/mindstir-12.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Telenor Shared Services",
      location: "AJ Tower, Gulberg Greens, Islamabad",
      category: "Corporate Office",
      description: "Development of TSS new office - A modern corporate workspace featuring state-of-the-art facilities and contemporary design elements.",
      images: [telenor1, telenor2, telenor3],
    },
    {
      title: "10 Pearls Office",
      location: "NASTP, Karachi",
      category: "Corporate Office",
      description: "Complete development and interior design of 10 Pearls office space, creating an innovative and collaborative work environment.",
      images: [pearls1, pearls2],
    },
    {
      title: "Islamabad Marriott Hotel",
      location: "Islamabad",
      category: "Hospitality",
      description: "Luxury hotel interior design and renovation project, delivering world-class hospitality spaces with elegant finishes and sophisticated ambiance.",
      images: [marriott1, marriott2, marriott3, marriott4, marriott5, marriott6, marriott7],
    },
    {
      title: "PC Legacy Hotel",
      location: "Nasirabad, Hunza",
      category: "Hospitality",
      description: "Complete turnkey project for PC Legacy Hotel, inaugurated by Mr. Murtaza Hashwani, Deputy Chairman & CEO, Hashoo Group. A premium hospitality destination in the stunning Hunza valley.",
      images: [pcLegacy1, pcLegacy2, pcLegacy3, pcLegacy4, pcLegacy5, pcLegacy6],
    },
    {
      title: "PAF ACE Management School",
      location: "PAF Sargodha",
      category: "Institutional",
      description: "Renovation of Auditorium and Arbor Lobby at PAF ACE Management School, combining functional design with institutional excellence.",
      images: [paf1, paf2, paf3, paf4],
    },
    {
      title: "Mindstir Office",
      location: "Blue Area, Islamabad",
      category: "Corporate Office",
      description: "Premium serviced offices, coworking and event spaces featuring modern design, meeting rooms, and board rooms. A vibrant workspace designed to inspire innovation and collaboration.",
      images: [mindstir1, mindstir2, mindstir3, mindstir4, mindstir5, mindstir6, mindstir7, mindstir8, mindstir9, mindstir10, mindstir11, mindstir12],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-luxury-gold">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of exceptional spaces across hospitality, corporate, and institutional sectors
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className="space-y-6">
              {/* Project Header */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="outline" className="text-luxury-gold border-luxury-gold">
                    {project.category}
                  </Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground max-w-3xl">{project.description}</p>
              </div>

              {/* Project Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.images.map((image, imgIndex) => (
                  <Card
                    key={imgIndex}
                    className="overflow-hidden group hover:shadow-xl transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={image}
                          alt={`${project.title} - Image ${imgIndex + 1}`}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;