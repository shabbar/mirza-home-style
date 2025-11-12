import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import slider images
import teamAward from "@/assets/slider/team-award.jpg";
import luxuryRoom from "@/assets/slider/luxury-room.jpg";
import restaurantOverview from "@/assets/slider/restaurant-overview.jpg";
import marbleDining from "@/assets/slider/marble-dining.jpg";
import mountainTerrace from "@/assets/slider/mountain-terrace.jpg";
import modernRestaurant from "@/assets/slider/modern-restaurant.jpg";
import terraceNight from "@/assets/slider/terrace-night.jpg";
import hotelRoom from "@/assets/slider/hotel-room.jpg";
import luxurySuite from "@/assets/slider/luxury-suite.jpg";
import diningArea from "@/assets/slider/dining-area.jpg";
import hotelExterior from "@/assets/slider/hotel-exterior.jpg";
import pafOffice from "@/assets/slider/paf-office.jpg";
import restaurantAerial from "@/assets/slider/restaurant-aerial.jpg";

const ProjectSlider = () => {
  const projectImages = [
    { src: teamAward, title: "Award Excellence", subtitle: "Recognized for Outstanding Design & Construction Services" },
    { src: luxuryRoom, title: "Premium Hotel Suite", subtitle: "Luxury Accommodation with Mountain Views" },
    { src: restaurantOverview, title: "Culinary Excellence", subtitle: "Contemporary Dining Space Design" },
    { src: marbleDining, title: "Grand Dining Hall", subtitle: "Exquisite Marble Flooring & Premium Interiors" },
    { src: mountainTerrace, title: "Mountain Retreat Terrace", subtitle: "Scenic Outdoor Living Spaces" },
    { src: modernRestaurant, title: "Modern Restaurant Design", subtitle: "Sophisticated Dining Experience" },
    { src: terraceNight, title: "Evening Ambiance", subtitle: "Multi-Level Outdoor Terraces" },
    { src: hotelRoom, title: "Executive Hotel Room", subtitle: "Contemporary Luxury Hospitality Design" },
    { src: luxurySuite, title: "Premium Suite Interior", subtitle: "Elegant Bedroom with Custom Furnishings" },
    { src: diningArea, title: "Modern Work Space", subtitle: "Functional & Stylish Hospitality Furniture" },
    { src: hotelExterior, title: "Luxury Hotel Exterior", subtitle: "Grand Architecture & Landscape Design" },
    { src: pafOffice, title: "Corporate Office Design", subtitle: "Professional Workspace Solutions" },
    { src: restaurantAerial, title: "Restaurant Overview", subtitle: "Complete Dining Experience Design" },
  ];

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden bg-gradient-to-br from-black via-luxury-navy/20 to-black mt-16 md:mt-20">
      <Carousel
        opts={{
          align: "center",
          loop: true,
          skipSnaps: false,
          dragFree: false,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="h-full -ml-0">
          {projectImages.map((image, index) => (
            <CarouselItem key={index} className="relative h-full pl-0 basis-full">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover object-center transition-all duration-[10000ms] ease-out hover:scale-110"
                  loading="lazy"
                  style={{ aspectRatio: '16/9' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 animate-fade-in" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12 animate-fade-in">
                  <div className="max-w-7xl mx-auto">
                    <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-2xl mb-1 md:mb-2 tracking-tight">
                      {image.title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg text-white/90 drop-shadow-lg font-light max-w-3xl">
                      {image.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ProjectSlider;
