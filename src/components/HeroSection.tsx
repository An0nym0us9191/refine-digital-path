
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
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
  );
};

export default HeroSection;
