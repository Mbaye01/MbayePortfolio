
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const educationData = [
    {
      degree: "Master en Intelligence Artificielle",
      institution: "Université de Science & Technologie",
      year: "2020 - 2022",
      description: "Spécialisation en apprentissage automatique et traitement du langage naturel. Projet de recherche sur l'optimisation des algorithmes de recommandation.",
      skills: ["Deep Learning", "NLP", "Python", "PyTorch", "TensorFlow"]
    },
    {
      degree: "Licence en Informatique",
      institution: "École Supérieure d'Informatique",
      year: "2017 - 2020",
      description: "Formation approfondie en développement logiciel, bases de données et architecture des systèmes. Mention très bien.",
      skills: ["Java", "C++", "SQL", "Algorithms", "Data Structures"]
    },
    {
      degree: "Certification en Digital Workspace Management",
      institution: "Digital Academy",
      year: "2019",
      description: "Formation intensive sur la gestion des espaces de travail numériques, la collaboration et la productivité en entreprise.",
      skills: ["Microsoft 365", "Cloud Computing", "Collaboration Tools", "IT Management"]
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Data Engineer",
    "Microsoft Certified: Azure AI Engineer",
    "IBM Data Science Professional Certificate",
    "Scrum Master Certified (SMC)"
  ];

  return (
    <section id="education" className="bg-portfolio-lightGray py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">Formation & Certifications</h2>
        
        <div className="space-y-8 mb-16">
          {educationData.map((item, index) => (
            <Card key={index} className="card-hover overflow-hidden bg-white border-l-4 border-l-portfolio-purple">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-purple/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-portfolio-purple" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-portfolio-blue">{item.degree}</h3>
                      <span className="text-sm font-medium text-gray-500">{item.year}</span>
                    </div>
                    <p className="text-portfolio-purple font-medium mb-3">{item.institution}</p>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="bg-portfolio-lightPurple/30 text-portfolio-blue">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="section-subtitle text-center mb-8">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-hover bg-white">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-portfolio-blue/10 p-2 rounded-full">
                    <GraduationCap className="h-5 w-5 text-portfolio-blue" />
                  </div>
                  <span className="font-medium text-gray-800">{cert}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
