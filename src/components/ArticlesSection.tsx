
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar } from "lucide-react";

const ArticlesSection = () => {
  const articles = [
    {
      title: "L'avenir de l'IA générative dans les entreprises",
      summary: "Analyse de l'impact potentiel des technologies d'IA générative comme GPT-4 sur les processus métier et la productivité des organisations.",
      date: "15 mars 2023",
      category: "Intelligence Artificielle",
      readTime: "8 min",
      link: "#"
    },
    {
      title: "Optimisation des environnements de travail numériques",
      summary: "Guide pratique pour concevoir et déployer des environnements de travail numériques efficaces et centrés sur l'expérience utilisateur.",
      date: "23 janvier 2023",
      category: "Digital Workspace",
      readTime: "12 min",
      link: "#"
    },
    {
      title: "Sécurité des données dans un monde multi-cloud",
      summary: "Stratégies et meilleures pratiques pour sécuriser les données d'entreprise dans des environnements cloud hybrides et multi-fournisseurs.",
      date: "7 décembre 2022",
      category: "IT Security",
      readTime: "10 min",
      link: "#"
    },
    {
      title: "Les défis éthiques de l'Intelligence Artificielle",
      summary: "Exploration des considérations éthiques liées au développement et au déploiement de systèmes d'IA dans différents secteurs.",
      date: "19 octobre 2022",
      category: "Intelligence Artificielle",
      readTime: "15 min",
      link: "#"
    }
  ];

  return (
    <section id="articles" className="bg-white py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">Articles & Publications</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Mes réflexions, analyses et contributions dans les domaines de l'IA, l'IT et le Digital Workspace Management.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="card-hover overflow-hidden h-full flex flex-col">
              <CardContent className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-portfolio-purple text-white">{article.category}</Badge>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {article.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-portfolio-blue mb-3">{article.title}</h3>
                <p className="text-gray-700 mb-4">{article.summary}</p>
                <div className="flex items-center text-sm text-gray-500 mt-auto">
                  <BookOpen size={14} className="mr-1" />
                  <span>{article.readTime} de lecture</span>
                </div>
              </CardContent>
              <CardFooter className="px-6 py-4 bg-gray-50 border-t">
                <Button asChild className="w-full bg-portfolio-blue hover:bg-portfolio-darkBlue">
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    Lire l'article
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white">
            Voir toutes les publications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
