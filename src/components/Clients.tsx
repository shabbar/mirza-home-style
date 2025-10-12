import hashwaniHotels from "@/assets/clients/hashwani-hotels.jpg";
import marriott from "@/assets/clients/marriott.jpg";
import marriottHotel from "@/assets/clients/marriott-hotel.jpg";
import pcLegacy from "@/assets/clients/pc-legacy.png";
import hashwaniResort from "@/assets/clients/hashwani-resort.jpg";
import fioraHotel from "@/assets/clients/fiora-hotel.jpg";
import shigar from "@/assets/clients/shigar.jpg";
import saia from "@/assets/clients/saia.jpg";
import ignite from "@/assets/clients/ignite.jpg";
import psx from "@/assets/clients/psx.jpg";
import liberte from "@/assets/clients/liberte.jpg";
import egalist from "@/assets/clients/egalist.jpg";
import nadra from "@/assets/clients/nadra.jpg";
import wifi from "@/assets/clients/wifi.jpg";
import republique from "@/assets/clients/republique.jpg";
import pakistan from "@/assets/clients/pakistan.jpg";
import jazz from "@/assets/clients/jazz.jpg";
import zong from "@/assets/clients/zong.jpg";
import metro from "@/assets/clients/metro.png";
import keenu from "@/assets/clients/keenu.jpg";
import telenor from "@/assets/clients/telenor.png";
import sohailKhan from "@/assets/clients/sohail-khan.png";

const Clients = () => {
  const clients = [
    { name: "Hashwani Hotels", logo: hashwaniHotels },
    { name: "Marriott", logo: marriott },
    { name: "Marriott Hotel", logo: marriottHotel },
    { name: "PC Legacy", logo: pcLegacy },
    { name: "Hashwani Resort", logo: hashwaniResort },
    { name: "Fiora Hotel Karachi", logo: fioraHotel },
    { name: "Shigar Islamabad", logo: shigar },
    { name: "SAIA", logo: saia },
    { name: "Ignite", logo: ignite },
    { name: "Pakistan Stock Exchange", logo: psx },
    { name: "Liberte", logo: liberte },
    { name: "Egalist Fraternist", logo: egalist },
    { name: "NADRA", logo: nadra },
    { name: "WiFi", logo: wifi },
    { name: "République Française", logo: republique },
    { name: "Pakistan", logo: pakistan },
    { name: "Jazz", logo: jazz },
    { name: "Zong", logo: zong },
    { name: "Metro", logo: metro },
    { name: "Keenu", logo: keenu },
    { name: "Telenor", logo: telenor },
    { name: "Sohail A. Khan Associates", logo: sohailKhan },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-luxury-gold">Clients</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by leading organizations across hospitality, telecommunications, and government sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-card/50 rounded-lg hover:bg-card transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full h-auto max-h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
