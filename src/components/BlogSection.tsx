
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MessageCircle } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Comment intégrer l'IA dans votre stratégie d'entreprise",
      excerpt: "L'intelligence artificielle n'est plus un concept futuriste. Découvrez comment les entreprises de toutes tailles peuvent l'intégrer efficacement pour rester compétitives.",
      date: "3 avril 2023",
      category: "Intelligence Artificielle",
      author: "Jean Dupont",
      authorAvatar: "https://i.pravatar.cc/150?img=1",
      readTime: "6 min",
      comments: 8,
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      title: "Les tendances DWM qui transforment l'environnement de travail",
      excerpt: "Le Digital Workspace Management évolue rapidement. Explorons les tendances actuelles qui redéfinissent notre façon de travailler et de collaborer.",
      date: "18 février 2023",
      category: "Digital Workspace",
      author: "Marie Dubois",
      authorAvatar: "https://i.pravatar.cc/150?img=5",
      readTime: "9 min",
      comments: 12,
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      title: "DevOps et IA: Une synergie pour accélérer l'innovation",
      excerpt: "Comment les pratiques DevOps combinées aux technologies d'IA peuvent créer un environnement propice à l'innovation continue et aux déploiements rapides.",
      date: "5 janvier 2023",
      category: "IT & DevOps",
      author: "Thomas Martin",
      authorAvatar: "https://i.pravatar.cc/150?img=8",
      readTime: "7 min",
      comments: 5,
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#"
    }
  ];

  return (
    <section id="blog" className="bg-portfolio-lightGray py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">Blog</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Restez informé des dernières tendances, actualités et réflexions sur l'IA, l'IT et le Digital Workspace Management à travers mon blog.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="card-hover overflow-hidden h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6 flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <Badge className="bg-portfolio-blue text-white">{post.category}</Badge>
                  <div className="flex items-center text-gray-500 text-sm">
                    <CalendarDays size={14} className="mr-1" />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-portfolio-blue mb-3">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={post.authorAvatar} alt={post.author} />
                      <AvatarFallback>{post.author.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 text-xs">
                    <div className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle size={12} className="mr-1" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-6 py-4 bg-gray-50 border-t">
                <Button asChild className="w-full bg-portfolio-purple hover:bg-portfolio-blue">
                  <a href={post.link}>Lire la suite</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white">
            Explorer tous les articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
