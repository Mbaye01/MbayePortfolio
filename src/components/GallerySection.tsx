import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/lovable-uploads/87bf80bb-465f-4e6a-ba68-36e65a984f0c.png",
      alt: "Photo professionnelle",
      category: "IT"
    },
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Développement informatique",
      category: "IT"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Programmation avancée",
      category: "IT"
    },
    {
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Intelligence artificielle",
      category: "IA"
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Architecture logicielle",
      category: "IT"
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Innovation technologique",
      category: "IT"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Workspace management",
      category: "DWM"
    },
    {
      src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Analyse de données",
      category: "IA"
    },
    {
      src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Interface utilisateur",
      category: "DWM"
    }
  ];

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  return (
    <section id="gallery" className="bg-portfolio-lightGray py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">Galerie</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Un aperçu visuel de mes travaux, projets et environnements de travail dans les domaines de l'IA, l'IT et le Digital Workspace Management.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer card-hover"
              onClick={() => openImageModal(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-white font-medium">{image.alt}</span>
                <span className="text-white/80 text-sm">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            <div className="relative">
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 right-2 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <X size={20} />
              </Button>
              {selectedImage && (
                <img 
                  src={selectedImage} 
                  alt="Image agrandie" 
                  className="w-full max-h-[80vh] object-contain"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
