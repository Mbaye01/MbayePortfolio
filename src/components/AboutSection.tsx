
import { Card, CardContent } from "@/components/ui/card";
import { Book, GraduationCap, Briefcase, Code } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">À Propos de Moi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Je suis un professionnel passionné par les nouvelles technologies, spécialisé dans les domaines de l'Intelligence Artificielle, l'IT et le Digital Workspace Management (DWM).
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Avec plus de 5 ans d'expérience dans le secteur technologique, j'ai développé une expertise approfondie dans la création de solutions innovantes qui répondent aux besoins complexes des entreprises modernes.
            </p>
            <p className="text-lg text-gray-700">
              Mon approche combine rigueur technique, créativité et une compréhension approfondie des enjeux business, me permettant de livrer des projets qui créent une réelle valeur ajoutée.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="card-hover bg-gradient-to-br from-portfolio-blue/90 to-portfolio-lightBlue/90 text-white">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <GraduationCap size={48} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">Formation</h3>
                <p className="text-white/90">Parcours académique et certifications</p>
              </CardContent>
            </Card>
            <Card className="card-hover bg-gradient-to-br from-portfolio-purple/90 to-portfolio-lightPurple/90 text-white">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <Briefcase size={48} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">Projets</h3>
                <p className="text-white/90">Réalisations et portfolio</p>
              </CardContent>
            </Card>
            <Card className="card-hover bg-gradient-to-br from-portfolio-purple/90 to-portfolio-lightPurple/90 text-white">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <Book size={48} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">Articles</h3>
                <p className="text-white/90">Publications et recherches</p>
              </CardContent>
            </Card>
            <Card className="card-hover bg-gradient-to-br from-portfolio-blue/90 to-portfolio-lightBlue/90 text-white">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <Code size={48} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">Compétences</h3>
                <p className="text-white/90">Langages et technologies</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
