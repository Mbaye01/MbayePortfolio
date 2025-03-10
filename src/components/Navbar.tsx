
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-xl font-bold text-portfolio-blue">MbayePortfolio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-portfolio-purple font-medium">À propos</button>
            <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-portfolio-purple font-medium">Formation</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-portfolio-purple font-medium">Projets</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-portfolio-purple font-medium">Galerie</button>
            <button onClick={() => scrollToSection('articles')} className="text-gray-700 hover:text-portfolio-purple font-medium">Articles</button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-portfolio-purple font-medium">Blog</button>
            <Button onClick={() => scrollToSection('contact')} variant="default" className="bg-portfolio-purple hover:bg-portfolio-blue">Contact</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-portfolio-purple font-medium py-2">À propos</button>
            <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-portfolio-purple font-medium py-2">Formation</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-portfolio-purple font-medium py-2">Projets</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-portfolio-purple font-medium py-2">Galerie</button>
            <button onClick={() => scrollToSection('articles')} className="text-gray-700 hover:text-portfolio-purple font-medium py-2">Articles</button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-portfolio-purple font-medium py-2">Blog</button>
            <Button onClick={() => scrollToSection('contact')} variant="default" className="bg-portfolio-purple hover:bg-portfolio-blue w-full">Contact</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
