
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-portfolio-blue text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">MbayePortfolio</h3>
            <p className="text-white/80 mb-4">
              Expert en Intelligence Artificielle, IT et Digital Workspace Management.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-portfolio-lightPurple hover:bg-white/10 rounded-full">
                <Github size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-portfolio-lightPurple hover:bg-white/10 rounded-full">
                <Twitter size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-portfolio-lightPurple hover:bg-white/10 rounded-full">
                <Linkedin size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-portfolio-lightPurple hover:bg-white/10 rounded-full">
                <Instagram size={20} />
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#education" className="text-white/80 hover:text-white transition-colors">Formation</a></li>
              <li><a href="#projects" className="text-white/80 hover:text-white transition-colors">Projets</a></li>
              <li><a href="#gallery" className="text-white/80 hover:text-white transition-colors">Galerie</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><a href="#articles" className="text-white/80 hover:text-white transition-colors">Articles</a></li>
              <li><a href="#blog" className="text-white/80 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Newsletter</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Téléchargements</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/80">contact@mbayeportfolio.com</li>
              <li className="text-white/80">+33 1 23 45 67 89</li>
              <li className="text-white/80">Paris, France</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MbayePortfolio. Tous droits réservés.
          </p>
          <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10 rounded-full" onClick={scrollToTop}>
            <ArrowUp size={20} />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
