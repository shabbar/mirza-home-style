import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import project images
import marriott1 from "@/assets/projects/marriott-1.jpg";
import marriott2 from "@/assets/projects/marriott-2.jpg";
import marriott3 from "@/assets/projects/marriott-3.jpg";
import mindstir1 from "@/assets/projects/mindstir-1.jpg";
import mindstir2 from "@/assets/projects/mindstir-2.jpg";
import mindstir3 from "@/assets/projects/mindstir-3.jpg";
import paf1 from "@/assets/projects/paf-1.jpg";
import paf2 from "@/assets/projects/paf-2.jpg";
import pcLegacy1 from "@/assets/projects/pc-legacy-1.jpg";
import pcLegacy2 from "@/assets/projects/pc-legacy-2.jpg";
import telenor1 from "@/assets/projects/telenor-1.jpg";
import telenor2 from "@/assets/projects/telenor-2.jpg";
import pearls1 from "@/assets/projects/10pearls-1.jpg";
import pearls2 from "@/assets/projects/10pearls-2.jpg";

const ProjectSlider = () => {
  const projectImages = [
    { src: marriott1, title: "Marriott Hotel Project" },
    { src: marriott2, title: "Marriott Hotel Interior" },
    { src: marriott3, title: "Marriott Hotel Design" },
    { src: mindstir1, title: "Mindstir Office" },
    { src: mindstir2, title: "Mindstir Workspace" },
    { src: mindstir3, title: "Mindstir Interior" },
    { src: paf1, title: "PAF Project" },
    { src: paf2, title: "PAF Interior Design" },
    { src: pcLegacy1, title: "PC Legacy Hotel" },
    { src: pcLegacy2, title: "PC Legacy Design" },
    { src: telenor1, title: "Telenor Office" },
    { src: telenor2, title: "Telenor Workspace" },
    { src: pearls1, title: "10 Pearls Office" },
    { src: pearls2, title: "10 Pearls Interior" },
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
