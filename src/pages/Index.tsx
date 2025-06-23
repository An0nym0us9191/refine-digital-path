
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Camera, Code, Search, Star, Check, ArrowDown } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-800">
            Ästhetik<span className="text-blue-600">Wachstum</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-blue-600 transition-colors">Leistungen</button>
            <button onClick={() => scrollToSection('results')} className="text-slate-600 hover:text-blue-600 transition-colors">Ergebnisse</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-slate-600 hover:text-blue-600 transition-colors">Referenzen</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-blue-600 transition-colors">Kontakt</button>
          </nav>
          <Button onClick={() => scrollToSection('contact')} className="bg-blue-600 hover:bg-blue-700">
            Jetzt starten
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Transformieren Sie Ihre Praxis mit 
              <span className="text-blue-600 block">Premium Content & Anzeigen</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Wir helfen Ästhetik- und Plastikchirurgen dabei, mehr qualifizierte Patienten durch 
              hochkonvertierende Content-Erstellung und zielgerichtete Werbekampagnen zu gewinnen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={() => scrollToSection('contact')} 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg"
              >
                Kostenlose Beratung vereinbaren
              </Button>
              <Button 
                onClick={() => scrollToSection('results')} 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg border-slate-300 hover:bg-slate-50"
              >
                Unsere Ergebnisse ansehen
              </Button>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-slate-600">Betreute Chirurgen</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-slate-600">Durchschnittliche Lead-Steigerung</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2,8 Mio.€+</div>
              <div className="text-slate-600">Generierter Umsatz</div>
            </div>
          </div>

          <div className="mt-12 animate-bounce">
            <ArrowDown className="w-6 h-6 text-slate-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Spezialisierte Leistungen für Ästhetikpraxen
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Unser bewährtes System kombiniert überzeugende Content-Erstellung mit zielgerichteter Werbung, 
              um Ihre idealen Patienten anzuziehen und Ihre Praxis zu vergrößern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Camera className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Content-Erstellung</h3>
                <p className="text-slate-600 mb-6">
                  Professionelle Vorher/Nachher-Galerien, Aufklärungsinhalte und ansprechende Social Media Posts, 
                  die Ihre Expertise präsentieren und Vertrauen bei potenziellen Patienten aufbauen.
                </p>
                <ul className="text-left space-y-2 text-slate-600">
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Vorher/Nachher-Fotografie</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Aufklärungsvideos</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Social Media Content</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Blog-Artikel</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Zielgerichtete Werbung</h3>
                <p className="text-slate-600 mb-6">
                  Datenbasierte Werbekampagnen auf Google und Social Media Plattformen, 
                  die Patienten erreichen, die aktiv nach ästhetischen Behandlungen suchen.
                </p>
                <ul className="text-left space-y-2 text-slate-600">
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Google Ads Management</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Facebook & Instagram Anzeigen</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Zielgruppen-Targeting</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Kampagnen-Optimierung</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Website-Optimierung</h3>
                <p className="text-slate-600 mb-6">
                  Verwandeln Sie mehr Besucher in Beratungen mit optimierten Landing Pages, 
                  streamlinierten Buchungssystemen und vertrauensbildenden Elementen.
                </p>
                <ul className="text-left space-y-2 text-slate-600">
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Landing Page Design</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Buchungsintegration</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Mobile Optimierung</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Conversion Tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Bewährte Ergebnisse für unsere Kunden
            </h2>
            <p className="text-xl text-slate-600">
              Sehen Sie, wie wir Ästhetikpraxen beim Ausbau ihres Patientenstamms und Umsatzes geholfen haben
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
              <div className="text-slate-600">Durchschnittlicher ROI</div>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">65%</div>
              <div className="text-slate-600">Mehr Beratungen</div>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">45%</div>
              <div className="text-slate-600">Reduzierte Kosten pro Lead</div>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-slate-600">Kunden-Bindungsrate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">Fallstudie: Münchener Plastische Chirurgie</h3>
                  <p className="text-blue-100 text-lg">
                    Wie wir Dr. Müller dabei geholfen haben, die monatlichen Beratungen in nur 6 Monaten um 180% zu steigern
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">12</div>
                    <div className="text-blue-100">Beratungen/Monat vorher</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">34</div>
                    <div className="text-blue-100">Beratungen/Monat nachher</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">180.000€</div>
                    <div className="text-blue-100">Zusätzlicher Monatsumsatz</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Was unsere Kunden sagen
            </h2>
            <p className="text-xl text-slate-600">
              Vertraut von führenden Plastikchirurgen in ganz Deutschland
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6">
                  "ÄsthetikWachstum hat unsere Online-Präsenz transformiert. Wir sind von einem 
                  Kampf um Terminvergabe zu einer 3-monatigen Warteliste für Beratungen übergegangen."
                </p>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-slate-800">Dr. Sarah Martinez</div>
                    <div className="text-slate-500">Berliner Ästhetikzentrum</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6">
                  "Die Qualität der Leads hat sich dramatisch verbessert. Wir sehen Patienten, die 
                  wirklich interessiert sind und bereit sind, mit Behandlungen fortzufahren."
                </p>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-slate-800">Dr. Michael Chen</div>
                    <div className="text-slate-500">Elite Plastische Chirurgie</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6">
                  "Professionell, ergebnisorientiert und sie verstehen wirklich die Ästhetikbranche. 
                  Unser ROI war vom ersten Tag an außergewöhnlich."
                </p>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-slate-800">Dr. Jennifer Williams</div>
                    <div className="text-slate-500">Küsten Plastische Chirurgie</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Bereit, Ihre Praxis zu vergrößern?
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Vereinbaren Sie eine kostenlose Beratung, um zu besprechen, wie wir Ihnen helfen können, 
              mehr qualifizierte Patienten zu gewinnen und Ihren Umsatz mit unseren bewährten Marketingstrategien zu steigern.
            </p>

            <Card className="bg-white p-8 max-w-2xl mx-auto">
              <CardContent className="space-y-6">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                  Erhalten Sie Ihre kostenlose Marketing-Analyse
                </h3>
                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Ihr Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-4 text-lg"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Ihre E-Mail-Adresse"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-4 text-lg"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-blue-600 hover:bg-blue-700 py-4 text-lg"
                  >
                    Kostenlose Beratung vereinbaren
                  </Button>
                </form>
                <p className="text-sm text-slate-500">
                  Keine Verpflichtung erforderlich. Wir werden Ihr aktuelles Marketing analysieren und Ihnen 
                  spezifische Möglichkeiten zum Wachstum Ihrer Praxis zeigen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              Ästhetik<span className="text-blue-400">Wachstum</span>
            </div>
            <p className="text-slate-300 mb-8">
              Spezialisiertes digitales Marketing für Ästhetik- und Plastikchirurgie-Praxen
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-slate-300">
              <span>hallo@ästhetikwachstum.de</span>
              <span>|</span>
              <span>+49 89 123 4567</span>
              <span>|</span>
              <span>München, Deutschland</span>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-700 text-sm text-slate-400">
              © 2024 ÄsthetikWachstum. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
