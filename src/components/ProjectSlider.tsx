import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import project images - PC Legacy Hotel
import pcLegacyDining1 from "@/assets/projects/pc-legacy-dining-1.jpg";
import pcLegacyDining2 from "@/assets/projects/pc-legacy-dining-2.jpg";
import pcLegacyTerrace from "@/assets/projects/pc-legacy-terrace-view.jpg";
import pcLegacyTerraceNight from "@/assets/projects/pc-legacy-terrace-night.jpg";
import pcLegacyBedroom from "@/assets/projects/pc-legacy-bedroom.jpg";

// Import MINDSTIR Office images
import mindstirLounge from "@/assets/projects/mindstir-lounge-1.jpg";
import mindstirOffice1 from "@/assets/projects/mindstir-office-1.jpg";
import mindstirOffice2 from "@/assets/projects/mindstir-office-2.jpg";
import mindstirWorkspace1 from "@/assets/projects/mindstir-workspace-1.jpg";
import mindstirWorkspace2 from "@/assets/projects/mindstir-workspace-2.jpg";

const ProjectSlider = () => {
  const projectImages = [
    { src: pcLegacyDining1, title: "PC Legacy Hotel - Premium Dining Area" },
    { src: pcLegacyDining2, title: "PC Legacy Hotel - Restaurant Interior" },
    { src: pcLegacyBedroom, title: "PC Legacy Hotel - Luxury Suite" },
    { src: pcLegacyTerrace, title: "PC Legacy Hotel - Mountain View Terrace" },
    { src: pcLegacyTerraceNight, title: "PC Legacy Hotel - Evening Ambiance" },
    { src: mindstirLounge, title: "MINDSTIR Office - Reception Lounge" },
    { src: mindstirOffice1, title: "MINDSTIR Office - Collaborative Space" },
    { src: mindstirOffice2, title: "MINDSTIR Office - Executive Room" },
    { src: mindstirWorkspace1, title: "MINDSTIR Office - Modern Workspace" },
    { src: mindstirWorkspace2, title: "MINDSTIR Office - Open Work Area" },
  ];

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-background mt-16 md:mt-20">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="h-full -ml-0">
          {projectImages.map((image, index) => (
            <CarouselItem key={index} className="relative h-full pl-0 basis-full">
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12">
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl mb-2">
                    {image.title}
                  </h3>
                  <p className="text-base md:text-xl text-white/95 drop-shadow-lg">
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
