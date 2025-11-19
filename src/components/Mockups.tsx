import roomInterior1 from "@/assets/mockups/room-interior-1.jpg";
import bathroomDesign1 from "@/assets/mockups/bathroom-design-1.jpg";
import workspace1 from "@/assets/mockups/workspace-1.jpg";
import wardrobeArea1 from "@/assets/mockups/wardrobe-area-1.jpg";
import bedroomView1 from "@/assets/mockups/bedroom-view-1.jpg";
import bathroomDesign2 from "@/assets/mockups/bathroom-design-2.jpg";
import bedroomView2 from "@/assets/mockups/bedroom-view-2.jpg";
import roomInterior2 from "@/assets/mockups/room-interior-2.jpg";
import bedroomView3 from "@/assets/mockups/bedroom-view-3.jpg";
import workspace2 from "@/assets/mockups/workspace-2.jpg";

const Mockups = () => {
  const mockupImages = [
    { src: roomInterior1, alt: "Luxury Hotel Room Interior with Modern Furnishings", category: "Room Interior" },
    { src: bathroomDesign1, alt: "Contemporary Bathroom Design with Marble Finishes", category: "Bathroom" },
    { src: workspace1, alt: "Modern Workspace Design with Wall-Mounted TV", category: "Workspace" },
    { src: wardrobeArea1, alt: "Custom Wardrobe and Dressing Area Design", category: "Storage Solutions" },
    { src: bedroomView1, alt: "Premium Bedroom Design with Ambient Lighting", category: "Bedroom" },
    { src: bathroomDesign2, alt: "Minimalist Bathroom with Glass Shower Enclosure", category: "Bathroom" },
    { src: bedroomView2, alt: "Elegant Bedroom with Feature Wall and Seating", category: "Bedroom" },
    { src: roomInterior2, alt: "Hotel Suite Interior with Designer Furniture", category: "Suite Design" },
    { src: bedroomView3, alt: "Sophisticated Bedroom with Artistic Headboard", category: "Bedroom" },
    { src: workspace2, alt: "Functional Workspace with Entertainment Setup", category: "Workspace" },
  ];

  return (
    <section id="mockups" className="py-8 md:py-12 bg-gradient-to-br from-background to-muted/20">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Interior Design <span className="text-luxury-gold">Mockups</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our detailed 3D visualizations and design mockups showcasing luxury hospitality interiors
          </p>
        </div>

        {/* Mockup Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockupImages.map((mockup, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={mockup.src}
                alt={mockup.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm font-semibold text-luxury-gold mb-1">{mockup.category}</p>
                  <p className="text-sm opacity-90">{mockup.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mockups;
