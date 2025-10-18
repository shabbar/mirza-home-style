import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import CompletedProjects from "@/components/CompletedProjects";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Expertise />
      <Projects />
      <CompletedProjects />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;