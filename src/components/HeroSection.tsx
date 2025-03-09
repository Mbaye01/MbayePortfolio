
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-portfolio-lightBlue/10 via-white to-portfolio-lightPurple/20">
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
      <div className="z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-portfolio-blue mb-6 animate-fade-in">
          Expert en <span className="text-portfolio-purple">IA</span>, <span className="text-portfolio-lightBlue">IT</span> et <span className="text-portfolio-darkBlue">DWM</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto animate-fade-in">
          Bienvenue sur mon portfolio professionnel. Découvrez mes projets, compétences et publications dans les domaines de l'Intelligence Artificielle, l'informatique et le Digital Workspace Management.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
          <Button onClick={() => scrollToSection('projects')} className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white px-8 py-6 text-lg">
            Voir mes projets
          </Button>
          <Button onClick={() => scrollToSection('contact')} variant="outline" className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white px-8 py-6 text-lg">
            Me contacter
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" onClick={() => scrollToSection('about')} className="rounded-full">
          <ChevronDown size={24} />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
