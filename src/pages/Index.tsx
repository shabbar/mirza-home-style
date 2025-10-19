import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProjectSlider from "@/components/ProjectSlider";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import CompletedProjects from "@/components/CompletedProjects";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Index = () => {
  const [showCompletedProjects, setShowCompletedProjects] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      <ProjectSlider />
      <Hero />
      <Services />
      <Expertise />
      <Projects />
      
      {/* Show Completed Projects Button */}
      {!showCompletedProjects && (
        <div className="text-center py-8 bg-background">
          <Button 
            variant="luxury" 
            size="lg"
            onClick={() => setShowCompletedProjects(true)}
            className="group"
          >
            View All Completed Projects
            <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      )}
      
      {showCompletedProjects && <CompletedProjects />}
      
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;