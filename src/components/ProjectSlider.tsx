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
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-background mt-20">
      <Carousel
        opts={{
          align: "start",
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
        <CarouselContent className="h-full">
          {projectImages.map((image, index) => (
            <CarouselItem key={index} className="relative h-full">
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                    {image.title}
                  </h3>
                  <p className="text-lg md:text-xl text-white/90 mt-2">
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
