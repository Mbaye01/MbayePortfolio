import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message envoyé!",
        description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-portfolio-purple" />,
      label: "Email",
      value: "mbayenkc@gmail.com",
      link: "mailto:mbayenkc@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-portfolio-purple" />,
      label: "Téléphone",
      value: "+222 43404927",
      link: "tel:+22243404927"
    },
    {
      icon: <MapPin className="h-5 w-5 text-portfolio-purple" />,
      label: "Adresse",
      value: "Nouakchott, Mauritanie",
      link: "https://maps.google.com/?q=Nouakchott,Mauritanie"
    }
  ];

  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">Contact</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de vos besoins en IA, IT ou Digital Workspace Management.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-portfolio-lightPurple/30 p-3 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-portfolio-blue mb-1">{item.label}</h3>
                      <a href={item.link} className="text-gray-700 hover:text-portfolio-purple transition-colors">
                        {item.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-portfolio-lightGray p-6 rounded-lg">
              <h3 className="text-lg font-medium text-portfolio-blue mb-4">Disponibilité</h3>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Lun - Ven:</span> 9:00 - 18:00
              </p>
              <p className="text-gray-700">
                Je vous répondrai dans un délai de 24 à 48 heures.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-portfolio-blue mb-6">Envoyez-moi un message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Nom</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Votre email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Sujet</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sujet de votre message"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message"
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-portfolio-blue hover:bg-portfolio-darkBlue flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Envoi en cours...</>
                    ) : (
                      <>
                        <Send size={16} />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
