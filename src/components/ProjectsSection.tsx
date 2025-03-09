
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Recommendation Engine",
      description: "Système de recommandation basé sur l'apprentissage profond pour une plateforme e-commerce. Augmentation de 35% du taux de conversion.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "TensorFlow", "Flask", "Redis", "AWS"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Plateforme de Gestion DWM",
      description: "Solution complète pour la gestion des espaces de travail numériques, intégrant outils de collaboration, gestion documentaire et analytics.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Docker", "Azure"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Système d'Analyse Prédictive",
      description: "Application d'analyse prédictive pour anticiper les tendances du marché à partir de données historiques et en temps réel.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["R", "Python", "D3.js", "SQL", "Tableau"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Assistant Virtuel pour IT Support",
      description: "Chatbot intelligent pour le support IT utilisant le NLP pour comprendre et résoudre automatiquement les problèmes courants.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "NLTK", "BERT", "FastAPI", "Vue.js"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Tableau de Bord IoT pour Smart Building",
      description: "Interface de visualisation en temps réel pour la gestion de bâtiments intelligents, avec monitoring énergétique et prédiction de maintenance.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "GraphQL", "Node.js", "InfluxDB", "MQTT"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Système de Gestion de Données Sécurisé",
      description: "Solution pour la gestion sécurisée des données sensibles, avec chiffrement, contrôle d'accès et audit de conformité RGPD.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Keycloak", "Docker"],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="bg-white py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">Mes Projets</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Découvrez une sélection de mes réalisations dans les domaines de l'IA, l'IT et le Digital Workspace Management. Chaque projet représente un défi unique relevé avec passion et expertise.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-portfolio-blue mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="bg-portfolio-lightGray">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 py-4 bg-gray-50 border-t flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Github size={16} />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
