import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Building2, Calendar } from "lucide-react";

interface Project {
  sno: number;
  name: string;
  scope: string;
  year: string;
}

const CompletedProjects = () => {
  // All projects from the document organized by category
  const allProjects: Project[] = [
    // Recent Projects (2021-2025)
    { sno: 1, name: "Hashupi Resort", scope: "(Turnkey Project) Construction / Interior Renovation", year: "2024-25" },
    { sno: 2, name: "Complete Interior Finishing of Lexus Hotel - Mirpur", scope: "(Turnkey Project) Construction / Interior Renovation", year: "2025" },
    { sno: 3, name: "TSS PK New Office Development at AJ Tower Gulberg Green Islamabad", scope: "(Turnkey Project) Construction / Interior Renovation", year: "2025" },
    { sno: 4, name: "Development of 10 Pearls NASTP Karachi", scope: "Construction / Interior Renovation", year: "2025" },
    { sno: 5, name: "IGNITE CEGA @ NASTP Lahore- Complete Renovation", scope: "Complete Interior Renovation", year: "2025" },
    { sno: 6, name: "Construction of 5 Story Building, I-9/3, Islamabad", scope: "Complete Construction/ Renovation", year: "In-Process" },
    { sno: 7, name: "Renovation of Guard Rooms, Embassy of France in Islamabad", scope: "Design & Renovation", year: "2024" },
    { sno: 8, name: "Development of Keenu Office, NASTP, Karachi", scope: "Complete Interior Renovation", year: "2023" },
    { sno: 9, name: "Renovation of Engro Enfashare Office, Islamabad", scope: "Interior Renovation", year: "2021" },
    { sno: 10, name: "MAGM Holdings Office, Blue Area Islamabad", scope: "Interior Renovation", year: "2022" },
    { sno: 11, name: "Renovation of Children Education Office, Islamabad", scope: "Interior Renovation", year: "2022" },
    
    // Pearl Continental Hotels
    { sno: 12, name: "Pearl Continental Hotel-Rawalpindi", scope: "Complete Renovation of Corridor, Lobby Area, Guests Rooms, Business Centers, Restaurants, Executive Offices, Shopping Arcade, Parlors, Banquet Halls", year: "2003-2017" },
    { sno: 13, name: "Pearl Continental Hotel-Karachi", scope: "Renovation of Marquee Hall, Dil Kusha Hall Marco Polo Restaurant, Banquet Hall, Ball Room, Guest Rooms, Rumors Room, Renovation of CBR Washrooms", year: "2005-2025" },
    { sno: 14, name: "Pearl Continental Hotel-Lahore", scope: "Renovation of Restaurants, Scan Room, Bar Room, Parlor, Executive Lounge etc.", year: "2006-2017" },
    { sno: 15, name: "Pearl Continental Hotel-Peshawar", scope: "Renovation of Restaurants, Guests Rooms, Lobbies Khushal Room etc.", year: "1999-2017" },
    { sno: 16, name: "Pearl Continental Hotel-Bhurban", scope: "Design / Renovation / Furniture Terrace Café, Banquet Hall, Nadia Coffee Shop", year: "2008-2022" },
    
    // Telenor
    { sno: 17, name: "Telenor Pakistan - Walk in Centers", scope: "(Turnkey Project) Construction / Development of Walk in Centers / Offices across Pakistan", year: "Various" },
    { sno: 18, name: "Telenor Pakistan - Franchises", scope: "(Turnkey Project) Construction / Development of 65+ Franchises across Pakistan", year: "Various" },
    
    // Metro & Ocean
    { sno: 19, name: "Metro Cash & Carry Pakistan", scope: "Renovation Works in Metro-Karachi, Lahore, Islamabad, Multan", year: "2009-2021" },
    { sno: 20, name: "Ocean Petroleum Limited", scope: "Complete Interior Renovation Design & Renovation of HQ at PTET House, Islamabad", year: "2011-2012" },
    
    // Marriott Hotels - Islamabad
    { sno: 21, name: "Complete Interior Design & Renovation of The Lilly Restaurant (Islamabad Marriott Hotel)", scope: "(Turnkey Project) Civil, HVAC, Electrical, Furniture, Flooring", year: "2025" },
    { sno: 22, name: "Complete Renovation of 4th & 5th floor corridors, IMH", scope: "Renovation", year: "2025" },
    { sno: 23, name: "Completion Renovation of Jason Board Room & Jason Corridor (Islamabad Marriott Hotel)", scope: "(Turnkey Project) Civil, HVAC, Electrical, Furniture, Flooring", year: "2024" },
    { sno: 24, name: "Complete Renovation of CBR Hall, Noor Mehal, Margalla Hall (Islamabad Marriott Hotel)", scope: "(Turnkey Project) Civil, HVAC, Electrical, Furniture, Flooring", year: "2024" },
    { sno: 25, name: "Construction of Marquee Walkway, (IMH)", scope: "Construction / Renovation", year: "2024" },
    { sno: 26, name: "Renovation of Marquee Washrooms, (IMH)", scope: "Renovation", year: "2024" },
    { sno: 27, name: "Renovation of Nadia Coffee Shop, IMH", scope: "Renovation", year: "2024" },
    { sno: 28, name: "Renovation of KIKU Restaurant (Islamabad Marriott Hotel)", scope: "(Turnkey Project) Civil, HVAC, Electrical, Furniture, Flooring", year: "2023" },
    { sno: 29, name: "Refurbishment of complete Hotel (Islamabad Marriott Hotel)", scope: "Construction / Renovation", year: "2009" },
    { sno: 30, name: "Steak House (Islamabad Marriott Hotel)", scope: "Construction / Renovation", year: "2006" },
    { sno: 31, name: "VIP Lobby (Islamabad Marriott Hotel)", scope: "Construction / Renovation", year: "2006" },
    { sno: 32, name: "Presidential Suites (Islamabad Marriott Hotel)", scope: "Design & Construction", year: "2005" },
    { sno: 33, name: "Front Lobby Area (Islamabad Marriott Hotel)", scope: "Construction / Renovation", year: "2005" },
    { sno: 34, name: "Banquet Hall (Islamabad Marriott Hotel)", scope: "Construction / Renovation", year: "2005" },
    { sno: 35, name: "Upper Marquee (Islamabad Marriott Hotel)", scope: "Construction / Renovation", year: "2005" },
    { sno: 36, name: "Muddy's Disco (Islamabad Marriott Hotel)", scope: "Construction / Renovation", year: "2005" },
    { sno: 37, name: "Guest Rooms (Islamabad Marriott Hotel)", scope: "Construction / Renovation", year: "2004" },
    { sno: 38, name: "Dynasty Restaurant (Islamabad Marriott Hotel)", scope: "Design & Construction", year: "2004" },
    
    // Marriott Hotels - Karachi
    { sno: 39, name: "Renovation of Mezzanine Lobby (Karachi Marriott Hotel)", scope: "Interior Renovation", year: "2023-24" },
    { sno: 40, name: "Renovation of Mezzanine Lobby & Lift Landings (Karachi Marriott Hotel)", scope: "Interior Renovation", year: "2023" },
    { sno: 41, name: "Renovation of Marquee Hall (Karachi Marriott Hotel)", scope: "Interior Renovation", year: "2017" },
    
    // Commercial Projects
    { sno: 42, name: "Interior Development of Burn Chili Restaurant, Islamabad", scope: "Interior Works", year: "2015" },
    { sno: 43, name: "Development of Country Highland Restaurant", scope: "Interior Works", year: "2013" },
    { sno: 44, name: "Quaid-e-Azam International Hospital", scope: "Manufacturing of Furniture", year: "2010" },
    { sno: 45, name: "FWO Office Furniture, Islamabad", scope: "Manufacturing of Furniture", year: "2010" },
    { sno: 46, name: "Commissioner Office, Islamabad", scope: "Interior Works", year: "2010" },
    { sno: 47, name: "Radio City F-6 Markaz Islamabad", scope: "Construction", year: "2005" },
    { sno: 48, name: "H.B Computers Blue Area Islamabad", scope: "Construction", year: "2005" },
    { sno: 49, name: "Golf Club, Rawalpindi", scope: "Construction", year: "2005" },
    { sno: 50, name: "Radio City Defense Area Lahore", scope: "Construction", year: "2004" },
    { sno: 51, name: "Granito Tiles Showroom, (Rawalpindi)", scope: "Design & Const.", year: "2004" },
    
    // EMAAR Projects
    { sno: 52, name: "Development of Community Centre, Islamabad", scope: "Finishing Works", year: "2019" },
    { sno: 53, name: "Construction of M7 47 villas, Islamabad", scope: "Finishing Works", year: "2017" },
    { sno: 54, name: "Design & Build of F-8 Office", scope: "Design & Renovation", year: "2009" },
    { sno: 55, name: "Construction of COO's Office", scope: "Renovation", year: "2009" },
    { sno: 56, name: "Renovation of Offices, Blue Area", scope: "Finishing Works", year: "2009" },
    { sno: 57, name: "Model Apartments, Crescent Bay, Karachi", scope: "Interior Works", year: "2008" },
    { sno: 58, name: "CIP Lounges (Islamabad, Lahore, Karachi)", scope: "Design & Renovation", year: "2008" },
    { sno: 59, name: "Mediterranean Townhouses – Duplex", scope: "Interior Works", year: "2008" },
    { sno: 60, name: "EMAAR Sale Centre Rawat Rectification Work", scope: "Rectification Works", year: "2007" },
    { sno: 61, name: "Rectification of 2nd & 3rd floor", scope: "Rectification Works", year: "2007" },
    { sno: 62, name: "Sale center rectification work", scope: "Interior works", year: "2007" },
    
    // NADRA Projects
    { sno: 63, name: "Development of Guest House SWAT", scope: "Design & Renovation", year: "2012" },
    { sno: 64, name: "Development of G.F & Basement SWAT", scope: "Design & Renovation", year: "2012" },
    { sno: 65, name: "Development of NIC Center Ladies SWAT", scope: "Design & Renovation", year: "2012" },
    { sno: 66, name: "Development of T & D Center", scope: "Design & Renovation", year: "2011" },
    { sno: 67, name: "Development of NADRA HQ CCRO Office", scope: "Design & Renovation", year: "2011" },
    { sno: 68, name: "Development of Training & Call Center SWAT", scope: "Design & Renovation", year: "2011" },
    { sno: 69, name: "Development of Training Centre", scope: "Design & Renovation", year: "2010" },
    { sno: 70, name: "Development of Call Centre, Lahore", scope: "Design & Renovation", year: "2010" },
    
    // Office Projects
    { sno: 71, name: "Renovation of Ground Floor, OGDCL House", scope: "Renovation / Interior Works / Furniture", year: "2014" },
    { sno: 72, name: "Renovation of 16th Floor, OGDCL House", scope: "Renovation / Interior Works / Furniture", year: "2014" },
    { sno: 73, name: "Renovation of Reception Lobby, OGDCL House, Islamabad", scope: "Design & Finishing", year: "2013" },
    { sno: 74, name: "Renovation of OGTI Rooms, OGDCL House, Islamabad", scope: "Renovation / Interior Works / Furniture", year: "2013" },
    { sno: 75, name: "Renovation of Board Room, OGDCL House, Islamabad", scope: "Renovation / Interior Works / Furniture", year: "2013" },
    { sno: 76, name: "Renovation of MD Office, OGDCL House, Islamabad", scope: "Renovation / Interior Works / Furniture", year: "2012" },
    { sno: 77, name: "Renovation of 14th Floor, OGDCL House, Islamabad", scope: "Renovation / Interior Works / Furniture", year: "2014" },
    { sno: 78, name: "Development of Meeting Room, OGDCL Islamabad", scope: "Renovation / Interior Works / Furniture", year: "2012" },
    { sno: 79, name: "Development of PTET Office, Islamabad", scope: "Renovation / Interior Works", year: "2012" },
    { sno: 80, name: "Pakistan Service Limited (Blue Area)", scope: "Renovation / Interior Works", year: "2011" },
    { sno: 81, name: "British Airways Serena Hotel, Islamabad", scope: "Renovation / Interior Works", year: "2007" },
    { sno: 82, name: "BAKTEL Evacuee Trust Building (Islamabad)", scope: "Renovation / Interior Works", year: "2005" },
    { sno: 83, name: "Asian Development Bank Islamabad", scope: "Renovation / Interior Works", year: "2005" },
    { sno: 84, name: "Renovation & Maintenance of President House", scope: "Renovation / Interior Works", year: "2004" },
    { sno: 85, name: "Pakistan Services Limited Islamabad", scope: "Renovation / Interior Works", year: "2004" },
    { sno: 86, name: "Fauji Cement Office", scope: "Renovation / Interior Works", year: "2003" },
    { sno: 87, name: "Orient Petroleum Inc. (Islamabad)", scope: "Renovation / Interior Works", year: "2003" },
    { sno: 88, name: "Costal Power Blue Area Islamabad", scope: "Renovation / Interior Works", year: "2003" },
    { sno: 89, name: "ISTIL Office Islamabad", scope: "Renovation / Interior Works", year: "2002" },
    { sno: 90, name: "ISTIL Pakistan Office, Anam Blessing", scope: "Renovation / Interior Works", year: "2002" },
    { sno: 91, name: "Petro. Nas Petroleum Margalla Road, Islamabad", scope: "Renovation / Interior Works", year: "2002" },
    { sno: 92, name: "5-story Building, Donestsk, Ukraine", scope: "Renovation / Interior Works", year: "2002" },
  ];

  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-accent/30 to-muted/20">
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
            <Badge variant="outline" className="text-base px-4 py-2 border-luxury-gold/50">
              <Building2 className="w-4 h-4 mr-2 text-luxury-gold" />
              30+ Years Experience
            </Badge>
          </div>
        </div>

        {/* Projects Table */}
        <Card className="shadow-xl border-luxury-gold/20">
          <CardHeader className="bg-gradient-to-r from-luxury-gold/5 to-transparent">
            <CardTitle className="text-2xl">Complete Project Portfolio</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50 hover:bg-muted/50">
                    <TableHead className="w-20 font-bold text-foreground">S. No.</TableHead>
                    <TableHead className="font-bold text-foreground min-w-[300px]">Project Name</TableHead>
                    <TableHead className="font-bold text-foreground min-w-[350px]">Scope of Work</TableHead>
                    <TableHead className="w-32 font-bold text-foreground text-right">Year</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allProjects.map((project) => (
                    <TableRow 
                      key={project.sno} 
                      className="hover:bg-luxury-gold/5 transition-colors"
                    >
                      <TableCell className="font-medium text-muted-foreground">
                        {project.sno}
                      </TableCell>
                      <TableCell className="font-semibold">
                        {project.name}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {project.scope}
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge variant="outline" className="border-luxury-gold/50 text-luxury-gold">
                          {project.year}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Summary Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-8 bg-gradient-to-br from-luxury-gold/5 to-transparent border-luxury-gold/20 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-5xl font-bold text-luxury-gold">{allProjects.length}+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">Successfully Completed Projects</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 bg-gradient-to-br from-luxury-gold/5 to-transparent border-luxury-gold/20 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-5xl font-bold text-luxury-gold">25+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">Years of Excellence</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 bg-gradient-to-br from-luxury-gold/5 to-transparent border-luxury-gold/20 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-5xl font-bold text-luxury-gold">100%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">Client Satisfaction</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CompletedProjects;
