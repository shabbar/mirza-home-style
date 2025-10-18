import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Project {
  name: string;
  scope: string;
  year: string;
  location?: string;
}

const CompletedProjects = () => {
  const recentProjects: Project[] = [
    { name: "Hashupi Resort", scope: "(Turnkey Project) Construction / Interior Renovation", year: "2024-25" },
    { name: "Complete Interior Finishing of Lexus Hotel", location: "Mirpur", scope: "(Turnkey Project) Construction / Interior Renovation", year: "2025" },
    { name: "TSS PK New Office Development", location: "AJ Tower Gulberg Green Islamabad", scope: "(Turnkey Project) Construction / Interior Renovation", year: "2025" },
    { name: "Development of 10 Pearls", location: "NASTP Karachi", scope: "Construction / Interior Renovation", year: "2025" },
    { name: "IGNITE CEGA", location: "NASTP Lahore", scope: "Complete Renovation", year: "2025" },
    { name: "Construction of 5 Story Building", location: "I-9/3, Islamabad", scope: "Complete Construction/ Renovation", year: "In-Process" },
    { name: "Renovation of Guard Rooms", location: "Embassy of France in Islamabad", scope: "Design & Renovation", year: "2024" },
    { name: "Development of Keenu Office", location: "NASTP, Karachi", scope: "Complete Interior Renovation", year: "2023" },
    { name: "Renovation of Engro Enfashare Office", location: "Islamabad", scope: "Interior Renovation", year: "2021" },
    { name: "MAGM Holdings Office", location: "Blue Area Islamabad", scope: "Interior Renovation", year: "2022" },
    { name: "Renovation of Children Education Office", location: "Islamabad", scope: "Interior Renovation", year: "2022" },
  ];

  const pearlContinentalProjects: Project[] = [
    { name: "Pearl Continental Hotel", location: "Rawalpindi", scope: "Complete Renovation of Corridor, Lobby Area, Guests Rooms, Business Centers, Restaurants, Executive Offices, Shopping Arcade, Parlors, Banquet Halls", year: "2003-2017" },
    { name: "Pearl Continental Hotel", location: "Karachi", scope: "Renovation of Marquee Hall, Dil Kusha Hall Marco Polo Restaurant, Banquet Hall, Ball Room, Guest Rooms, Rumors Room, Renovation of CBR Washrooms", year: "2005-2025" },
    { name: "Pearl Continental Hotel", location: "Lahore", scope: "Renovation of Restaurants, Scan Room, Bar Room, Parlor, Executive Lounge etc.", year: "2006-2017" },
    { name: "Pearl Continental Hotel", location: "Peshawar", scope: "Renovation of Restaurants, Guests Rooms, Lobbies Khushal Room etc.", year: "1999-2017" },
    { name: "Pearl Continental Hotel", location: "Bhurban", scope: "Design / Renovation / Furniture Terrace Café, Banquet Hall, Nadia Coffee Shop", year: "2008-2022" },
  ];

  const marriottProjects: Project[] = [
    { name: "Complete Interior Design & Renovation of The Lilly Restaurant", location: "Islamabad Marriott Hotel", scope: "(Turnkey Project) Civil, HVAC, Electrical, Furniture, Flooring", year: "2025" },
    { name: "Complete Renovation of 4th & 5th floor corridors", location: "IMH", scope: "Renovation", year: "2025" },
    { name: "Completion Renovation of Jason Board Room & Jason Corridor", location: "Islamabad Marriott Hotel", scope: "(Turnkey Project) Civil, HVAC, Electrical, Furniture, Flooring", year: "2024" },
    { name: "Complete Renovation of CBR Hall, Noor Mehal, Margalla Hall", location: "Islamabad Marriott Hotel", scope: "(Turnkey Project) Civil, HVAC, Electrical, Furniture, Flooring", year: "2024" },
    { name: "Construction of Marquee Walkway", location: "IMH", scope: "Construction / Renovation", year: "2024" },
    { name: "Renovation of Marquee Washrooms", location: "IMH", scope: "Renovation", year: "2024" },
    { name: "Renovation of Nadia Coffee Shop", location: "IMH", scope: "Renovation", year: "2024" },
    { name: "Renovation of KIKU Restaurant", location: "Islamabad Marriott Hotel", scope: "(Turnkey Project) Civil, HVAC, Electrical, Furniture, Flooring", year: "2023" },
    { name: "Refurbishment of complete Hotel", location: "Islamabad Marriott Hotel", scope: "Construction / Renovation", year: "2009" },
    { name: "Steak House", location: "Islamabad Marriott Hotel", scope: "Construction / Renovation", year: "2006" },
    { name: "VIP Lobby", location: "Islamabad Marriott Hotel", scope: "Construction / Renovation", year: "2006" },
    { name: "Presidential Suites", location: "Islamabad Marriott Hotel", scope: "Design & Construction", year: "2005" },
    { name: "Front Lobby Area", location: "Islamabad Marriott Hotel", scope: "Construction / Renovation", year: "2005" },
    { name: "Banquet Hall", location: "Islamabad Marriott Hotel", scope: "Construction / Renovation", year: "2005" },
    { name: "Upper Marquee", location: "Islamabad Marriott Hotel", scope: "Construction / Renovation", year: "2005" },
    { name: "Muddy's Disco", location: "Islamabad Marriott Hotel", scope: "Construction / Renovation", year: "2005" },
    { name: "Guest Rooms", location: "Islamabad Marriott Hotel", scope: "Construction / Renovation", year: "2004" },
    { name: "Dynasty Restaurant", location: "Islamabad Marriott Hotel", scope: "Design & Construction", year: "2004" },
    { name: "Renovation of Mezzanine Lobby", location: "Karachi Marriott Hotel", scope: "Interior Renovation", year: "2023-24" },
    { name: "Renovation of Mezzanine Lobby & Lift Landings", location: "Karachi Marriott Hotel", scope: "Interior Renovation", year: "2023" },
    { name: "Renovation of Marquee Hall", location: "Karachi Marriott Hotel", scope: "Interior Renovation", year: "2017" },
  ];

  const telenorProjects: Project[] = [
    { name: "Telenor Pakistan Walk in Centers", scope: "(Turnkey Project) Construction / Development of Walk in Centers / Offices across Pakistan", year: "Various" },
    { name: "Telenor Pakistan Franchises", scope: "(Turnkey Project) Construction / Development of 65+ Franchises across Pakistan", year: "Various" },
  ];

  const commercialProjects: Project[] = [
    { name: "Metro Cash & Carry Pakistan", location: "Karachi, Lahore, Islamabad, Multan", scope: "Renovation Works", year: "2009-2021" },
    { name: "Ocean Petroleum Limited", location: "PTET House, Islamabad", scope: "Complete Interior Renovation Design & Renovation of HQ", year: "2011-2012" },
    { name: "Interior Development of Burn Chili Restaurant", location: "Islamabad", scope: "Interior Works", year: "2015" },
    { name: "Development of Country Highland Restaurant", scope: "Interior Works", year: "2013" },
    { name: "Quaid-e-Azam International Hospital", scope: "Manufacturing of Furniture", year: "2010" },
    { name: "FWO Office Furniture", location: "Islamabad", scope: "Manufacturing of Furniture", year: "2010" },
    { name: "Commissioner Office", location: "Islamabad", scope: "Interior Works", year: "2010" },
    { name: "Radio City", location: "F-6 Markaz Islamabad", scope: "Construction", year: "2005" },
    { name: "H.B Computers", location: "Blue Area Islamabad", scope: "Construction", year: "2005" },
    { name: "Golf Club", location: "Rawalpindi", scope: "Construction", year: "2005" },
    { name: "Radio City", location: "Defense Area Lahore", scope: "Construction", year: "2004" },
    { name: "Granito Tiles Showroom", location: "Rawalpindi", scope: "Design & Const.", year: "2004" },
  ];

  const emaarProjects: Project[] = [
    { name: "Development of Community Centre", location: "Islamabad", scope: "Finishing Works", year: "2019" },
    { name: "Construction of M7 47 villas", location: "Islamabad", scope: "Finishing Works", year: "2017" },
    { name: "Design & Build of F-8 Office", scope: "Design & Renovation", year: "2009" },
    { name: "Construction of COO's Office", scope: "Renovation", year: "2009" },
    { name: "Renovation of Offices", location: "Blue Area", scope: "Finishing Works", year: "2009" },
    { name: "Model Apartments", location: "Crescent Bay, Karachi", scope: "Interior Works", year: "2008" },
    { name: "CIP Lounges", location: "Islamabad, Lahore, Karachi", scope: "Design & Renovation", year: "2008" },
    { name: "Mediterranean Townhouses – Duplex", scope: "Interior Works", year: "2008" },
    { name: "EMAAR Sale Centre Rawat Rectification Work", scope: "Rectification Works", year: "2007" },
    { name: "Sale center rectification work", scope: "Interior works", year: "2007" },
  ];

  const nadraProjects: Project[] = [
    { name: "Development of Guest House", location: "SWAT", scope: "Design & Renovation", year: "2012" },
    { name: "Development of G.F & Basement", location: "SWAT", scope: "Design & Renovation", year: "2012" },
    { name: "Development of NIC Center Ladies", location: "SWAT", scope: "Design & Renovation", year: "2012" },
    { name: "Development of T & D Center", scope: "Design & Renovation", year: "2011" },
    { name: "Development of NADRA HQ CCRO Office", scope: "Design & Renovation", year: "2011" },
    { name: "Development of Training & Call Center", location: "SWAT", scope: "Design & Renovation", year: "2011" },
    { name: "Development of Training Centre", scope: "Design & Renovation", year: "2010" },
    { name: "Development of Call Centre", location: "Lahore", scope: "Design & Renovation", year: "2010" },
  ];

  const officeProjects: Project[] = [
    { name: "Renovation of Ground Floor", location: "OGDCL House", scope: "Renovation / Interior Works / Furniture", year: "2014" },
    { name: "Renovation of 16th Floor", location: "OGDCL House", scope: "Renovation / Interior Works / Furniture", year: "2014" },
    { name: "Renovation of Reception Lobby", location: "OGDCL House, Islamabad", scope: "Design & Finishing", year: "2013" },
    { name: "Renovation of OGTI Rooms", location: "OGDCL House, Islamabad", scope: "Renovation / Interior Works / Furniture", year: "2013" },
    { name: "Renovation of Board Room", location: "OGDCL House, Islamabad", scope: "Renovation / Interior Works / Furniture", year: "2013" },
    { name: "Renovation of MD Office", location: "OGDCL House, Islamabad", scope: "Renovation / Interior Works / Furniture", year: "2012" },
    { name: "Renovation of 14th Floor", location: "OGDCL House, Islamabad", scope: "Renovation / Interior Works / Furniture", year: "2014" },
    { name: "Development of Meeting Room", location: "OGDCL Islamabad", scope: "Renovation / Interior Works / Furniture", year: "2012" },
    { name: "Development of PTET Office", location: "Islamabad", scope: "Renovation / Interior Works", year: "2012" },
    { name: "Pakistan Service Limited", location: "Blue Area", scope: "Renovation / Interior Works", year: "2011" },
    { name: "British Airways Serena Hotel", location: "Islamabad", scope: "Renovation / Interior Works", year: "2007" },
    { name: "BAKTEL Evacuee Trust Building", location: "Islamabad", scope: "Renovation / Interior Works", year: "2005" },
    { name: "Asian Development Bank", location: "Islamabad", scope: "Renovation / Interior Works", year: "2005" },
    { name: "Renovation & Maintenance of President House", scope: "Renovation / Interior Works", year: "2004" },
    { name: "Pakistan Services Limited", location: "Islamabad", scope: "Renovation / Interior Works", year: "2004" },
    { name: "Fauji Cement Office", scope: "Renovation / Interior Works", year: "2003" },
    { name: "Orient Petroleum Inc.", location: "Islamabad", scope: "Renovation / Interior Works", year: "2003" },
    { name: "Costal Power", location: "Blue Area Islamabad", scope: "Renovation / Interior Works", year: "2003" },
    { name: "ISTIL Office", location: "Islamabad", scope: "Renovation / Interior Works", year: "2002" },
    { name: "ISTIL Pakistan Office", location: "Anam Blessing", scope: "Renovation / Interior Works", year: "2002" },
    { name: "Petro. Nas Petroleum", location: "Margalla Road, Islamabad", scope: "Renovation / Interior Works", year: "2002" },
    { name: "5-story Building", location: "Donestsk, Ukraine", scope: "Renovation / Interior Works", year: "2002" },
  ];

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="hover:shadow-lg transition-all duration-300 hover:border-luxury-gold/50">
      <CardContent className="p-6">
        <div className="space-y-3">
          <h4 className="font-semibold text-lg text-foreground group-hover:text-luxury-gold transition-colors">
            {project.name}
          </h4>
          {project.location && (
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-luxury-gold" />
              <span>{project.location}</span>
            </div>
          )}
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <Building2 className="w-4 h-4 mt-0.5 shrink-0" />
            <span className="line-clamp-2">{project.scope}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-luxury-gold" />
            <Badge variant="outline" className="text-luxury-gold border-luxury-gold/50">
              {project.year}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const ProjectSection = ({ title, projects, icon }: { title: string; projects: Project[]; icon?: React.ReactNode }) => (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="completed-projects" className="py-20 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Successfully Completed <span className="text-luxury-gold">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Over two decades of excellence in construction, interior design, and renovation across Pakistan and beyond
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Badge variant="outline" className="text-base px-4 py-2">
              <Building2 className="w-4 h-4 mr-2" />
              200+ Projects
            </Badge>
            <Badge variant="outline" className="text-base px-4 py-2">
              <Calendar className="w-4 h-4 mr-2" />
              Since 2002
            </Badge>
          </div>
        </div>

        {/* Tabbed Content */}
        <Tabs defaultValue="recent" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-12 h-auto gap-2">
            <TabsTrigger value="recent" className="text-sm">Recent Projects</TabsTrigger>
            <TabsTrigger value="marriott" className="text-sm">Marriott Hotels</TabsTrigger>
            <TabsTrigger value="pc" className="text-sm">Pearl Continental</TabsTrigger>
            <TabsTrigger value="telenor" className="text-sm">Telenor</TabsTrigger>
            <TabsTrigger value="commercial" className="text-sm">Commercial</TabsTrigger>
            <TabsTrigger value="emaar" className="text-sm">EMAAR</TabsTrigger>
            <TabsTrigger value="nadra" className="text-sm">NADRA</TabsTrigger>
            <TabsTrigger value="offices" className="text-sm">Office Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="recent" className="mt-8">
            <ProjectSection 
              title="Recent & Ongoing Projects (2021-2025)" 
              projects={recentProjects}
            />
          </TabsContent>

          <TabsContent value="marriott" className="mt-8">
            <ProjectSection 
              title="Marriott Hotels - Islamabad & Karachi" 
              projects={marriottProjects}
            />
          </TabsContent>

          <TabsContent value="pc" className="mt-8">
            <ProjectSection 
              title="Pearl Continental Hotels" 
              projects={pearlContinentalProjects}
            />
          </TabsContent>

          <TabsContent value="telenor" className="mt-8">
            <ProjectSection 
              title="Telenor Pakistan" 
              projects={telenorProjects}
            />
          </TabsContent>

          <TabsContent value="commercial" className="mt-8">
            <ProjectSection 
              title="Commercial & Retail Projects" 
              projects={commercialProjects}
            />
          </TabsContent>

          <TabsContent value="emaar" className="mt-8">
            <ProjectSection 
              title="EMAAR Projects" 
              projects={emaarProjects}
            />
          </TabsContent>

          <TabsContent value="nadra" className="mt-8">
            <ProjectSection 
              title="NADRA Pakistan" 
              projects={nadraProjects}
            />
          </TabsContent>

          <TabsContent value="offices" className="mt-8">
            <ProjectSection 
              title="Corporate Offices & Institutional Projects" 
              projects={officeProjects}
            />
          </TabsContent>
        </Tabs>

        {/* Summary Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-8 bg-gradient-to-br from-luxury-gold/5 to-transparent border-luxury-gold/20">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-luxury-gold">200+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Successfully Completed Projects</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 bg-gradient-to-br from-luxury-gold/5 to-transparent border-luxury-gold/20">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-luxury-gold">20+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Years of Excellence</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 bg-gradient-to-br from-luxury-gold/5 to-transparent border-luxury-gold/20">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-luxury-gold">100%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CompletedProjects;
