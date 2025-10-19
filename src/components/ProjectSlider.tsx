import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import project images
import marriott4 from "@/assets/projects/marriott-4.jpg";
import marriott5 from "@/assets/projects/marriott-5.jpg";
import marriott6 from "@/assets/projects/marriott-6.jpg";
import mindstir5 from "@/assets/projects/mindstir-5.jpg";
import mindstir7 from "@/assets/projects/mindstir-7.jpg";
import mindstir9 from "@/assets/projects/mindstir-9.jpg";
import paf3 from "@/assets/projects/paf-3.jpg";
import paf4 from "@/assets/projects/paf-4.jpg";
import pcLegacy4 from "@/assets/projects/pc-legacy-4.jpg";
import pcLegacy5 from "@/assets/projects/pc-legacy-5.jpg";
import telenor3 from "@/assets/projects/telenor-3.jpg";
import mindstir11 from "@/assets/projects/mindstir-11.jpg";

const ProjectSlider = () => {
  const projectImages = [
    { src: marriott4, title: "Marriott Hotel - Grand Lobby" },
    { src: marriott5, title: "Marriott Hotel - Executive Suite" },
    { src: marriott6, title: "Marriott Hotel - Conference Hall" },
    { src: mindstir5, title: "Mindstir - Modern Workspace" },
    { src: mindstir7, title: "Mindstir - Collaborative Zone" },
    { src: mindstir9, title: "Mindstir - Executive Office" },
    { src: paf3, title: "PAF - Interior Excellence" },
    { src: paf4, title: "PAF - Premium Design" },
    { src: pcLegacy4, title: "PC Legacy Hotel - Luxury Suite" },
    { src: pcLegacy5, title: "PC Legacy Hotel - Dining" },
    { src: telenor3, title: "Telenor - Corporate Office" },
    { src: mindstir11, title: "Premium Interior Design" },
  ];

  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden bg-background mt-16 md:mt-20">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="h-full -ml-4">
          {projectImages.map((image, index) => (
            <CarouselItem key={index} className="relative h-full pl-4">
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                  <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
                    {image.title}
                  </h3>
                  <p className="text-sm md:text-lg text-white/90 mt-1 md:mt-2">
                    Excellence in Design & Execution
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
