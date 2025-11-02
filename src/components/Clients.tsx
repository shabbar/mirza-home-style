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
    { name: "Hashwani Hotels", logo: hashwaniHotels, color: "from-blue-500/20 to-purple-500/20" },
    { name: "Marriott", logo: marriott, color: "from-red-500/20 to-pink-500/20" },
    { name: "Marriott Hotel", logo: marriottHotel, color: "from-amber-500/20 to-orange-500/20" },
    { name: "PC Legacy", logo: pcLegacy, color: "from-green-500/20 to-emerald-500/20" },
    { name: "Hashwani Resort", logo: hashwaniResort, color: "from-cyan-500/20 to-blue-500/20" },
    { name: "Fiora Hotel", logo: fioraHotel, color: "from-violet-500/20 to-purple-500/20" },
    { name: "Shigar", logo: shigar, color: "from-rose-500/20 to-pink-500/20" },
    { name: "SAIA", logo: saia, color: "from-yellow-500/20 to-amber-500/20" },
    { name: "Ignite", logo: ignite, color: "from-teal-500/20 to-cyan-500/20" },
    { name: "PSX", logo: psx, color: "from-indigo-500/20 to-blue-500/20" },
    { name: "Liberté", logo: liberte, color: "from-fuchsia-500/20 to-purple-500/20" },
    { name: "Egalist", logo: egalist, color: "from-lime-500/20 to-green-500/20" },
    { name: "NADRA", logo: nadra, color: "from-sky-500/20 to-blue-500/20" },
    { name: "WiFi", logo: wifi, color: "from-orange-500/20 to-red-500/20" },
    { name: "République", logo: republique, color: "from-purple-500/20 to-violet-500/20" },
    { name: "Pakistan", logo: pakistan, color: "from-green-500/20 to-teal-500/20" },
    { name: "Jazz", logo: jazz, color: "from-pink-500/20 to-rose-500/20" },
    { name: "Zong", logo: zong, color: "from-emerald-500/20 to-green-500/20" },
    { name: "Metro", logo: metro, color: "from-blue-500/20 to-indigo-500/20" },
    { name: "Keenu", logo: keenu, color: "from-amber-500/20 to-yellow-500/20" },
    { name: "Telenor", logo: telenor, color: "from-cyan-500/20 to-teal-500/20" },
    { name: "Sohail Khan", logo: sohailKhan, color: "from-violet-500/20 to-fuchsia-500/20" },
  ];

  return (
    <section id="clients" className="py-8 md:py-12 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-luxury-navy mb-6">
            Our Prestigious Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading organizations across Pakistan to deliver excellence in design and construction
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105"
            >
              {/* Vibrant gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${client.color.replace('/20', '/30')} transition-opacity duration-500`}></div>
              
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              {/* Logo - Always colored */}
              <div className="relative z-10 flex items-center justify-center h-20">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-lg"
                />
              </div>
              
              {/* Enhanced border glow */}
              <div className="absolute inset-0 rounded-xl border-2 border-luxury-gold/30 group-hover:border-luxury-gold transition-all duration-500 group-hover:shadow-gold"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-luxury-navy/5 to-luxury-gold/5 border border-luxury-gold/20">
            <div className="text-4xl font-bold text-luxury-navy mb-2">22+</div>
            <div className="text-muted-foreground font-medium">Trusted Partners</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-luxury-gold/5 to-luxury-navy/5 border border-luxury-navy/20">
            <div className="text-4xl font-bold text-luxury-navy mb-2">100%</div>
            <div className="text-muted-foreground font-medium">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-luxury-navy/5 to-luxury-gold/5 border border-luxury-gold/20">
            <div className="text-4xl font-bold text-luxury-navy mb-2">30+</div>
            <div className="text-muted-foreground font-medium">Years Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
