
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast({
        title: "Bitte füllen Sie alle Felder aus",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would typically send to your backend
    toast({
      title: "Vielen Dank für Ihr Interesse!",
      description: "Wir werden uns innerhalb von 24 Stunden bei Ihnen melden, um zu besprechen, wie wir Ihre Praxis beim Wachstum unterstützen können."
    });
    
    setEmail("");
    setName("");
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-2">
            Bereit, Ihre Praxis zu vergrößern?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-8 sm:mb-12 px-4 max-w-3xl mx-auto">
            Vereinbaren Sie eine kostenlose Beratung, um zu besprechen, wie wir Ihnen helfen können, 
            mehr qualifizierte Patienten zu gewinnen und Ihren Umsatz mit unseren bewährten Marketingstrategien zu steigern.
          </p>

          <Card className="bg-white p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto">
            <CardContent className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4 sm:mb-6">
                Erhalten Sie Ihre kostenlose Marketing-Analyse
              </h3>
              <form onSubmit={handleLeadSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Ihr Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 sm:p-4 text-base sm:text-lg"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 sm:p-4 text-base sm:text-lg"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700 py-3 sm:py-4 text-base sm:text-lg"
                >
                  Kostenlose Beratung vereinbaren
                </Button>
              </form>
              <p className="text-xs sm:text-sm text-slate-500 px-2">
                Keine Verpflichtung erforderlich. Wir werden Ihr aktuelles Marketing analysieren und Ihnen 
                spezifische Möglichkeiten zum Wachstum Ihrer Praxis zeigen.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
