import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import ProjectSlider from "@/components/ProjectSlider";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Mockups from "@/components/Mockups";
import CompletedProjects from "@/components/CompletedProjects";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Index = () => {
  const [showCompletedProjects, setShowCompletedProjects] = useState(false);

  useEffect(() => {
    // Listen for portfolio link clicks via custom event
    const handleShowPortfolio = () => {
      setShowCompletedProjects(true);
    };

    // Listen for hash changes
    const handleHashChange = () => {
      if (window.location.hash === '#portfolio') {
        setShowCompletedProjects(true);
        setTimeout(() => {
          document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    window.addEventListener('showPortfolio', handleShowPortfolio);
    window.addEventListener('hashchange', handleHashChange);
    // Check on initial load
    handleHashChange();

    return () => {
      window.removeEventListener('showPortfolio', handleShowPortfolio);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <ProjectSlider />
      <Hero />
      <Services />
      <Expertise />
      <Projects />
      <Mockups />
      
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
      
      {showCompletedProjects && (
        <div id="portfolio">
          <CompletedProjects />
        </div>
      )}
      
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;