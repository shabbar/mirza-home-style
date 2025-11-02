import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import slider images
import diningArea from "@/assets/slider/dining-area.jpg";
import hotelRoom from "@/assets/slider/hotel-room.jpg";
import restaurantAerial from "@/assets/slider/restaurant-aerial.jpg";
import hotelExterior from "@/assets/slider/hotel-exterior.jpg";
import pafOffice from "@/assets/slider/paf-office.jpg";
import luxurySuite from "@/assets/slider/luxury-suite.jpg";

const ProjectSlider = () => {
  const projectImages = [
    { src: diningArea, title: "Luxury Dining Experience", subtitle: "Premium Restaurant Design with Elegant Marble Flooring" },
    { src: hotelRoom, title: "Comfort & Elegance", subtitle: "Modern Hotel Room Design" },
    { src: restaurantAerial, title: "Culinary Excellence", subtitle: "Contemporary Dining Space" },
    { src: hotelExterior, title: "Mountain Retreat", subtitle: "Stunning Hotel Architecture" },
    { src: luxurySuite, title: "Luxury Suite", subtitle: "Sophisticated Interior Design" },
    { src: pafOffice, title: "PAF Base Sargodha", subtitle: "Professional Office Design & Construction" },
  ];

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[85vh] overflow-hidden bg-black mt-16 md:mt-20">
      <Carousel
        opts={{
          align: "center",
          loop: true,
          skipSnaps: false,
          dragFree: false,
        }}
        plugins={[
          Autoplay({
            delay: 3500,
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
                  className="w-full h-full object-cover object-center transition-transform duration-[8000ms] ease-linear hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-16 animate-fade-in">
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl mb-3 md:mb-4 tracking-tight">
                    {image.title}
                  </h3>
                  <p className="text-lg md:text-2xl lg:text-3xl text-white/95 drop-shadow-xl font-light">
                    {image.subtitle}
                  </p>
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
