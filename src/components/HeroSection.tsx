
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6">
      <div className="container mx-auto text-center max-w-5xl">
        <div className="animate-fade-in">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 mb-3 sm:mb-4 md:mb-6 leading-tight">
            Transformieren Sie Ihre Praxis mit 
            <span className="text-blue-600 block mt-1 sm:mt-2">Premium Content & Anzeigen</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            Wir helfen Ästhetik- und Plastikchirurgen dabei, mehr qualifizierte Patienten durch 
            hochkonvertierende Content-Erstellung und zielgerichtete Werbekampagnen zu gewinnen.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <Button 
              onClick={() => window.open('https://calendly.com/vedunas/15-min-demo-call', '_blank')}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
            >
              Kostenlose Beratung vereinbaren
            </Button>
            <Button 
              onClick={() => scrollToSection('results')} 
              variant="outline" 
              size="lg" 
              className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-slate-300 hover:bg-slate-50 w-full sm:w-auto"
            >
              Unsere Ergebnisse ansehen
            </Button>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16 px-2 sm:px-4">
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">150+</div>
            <div className="text-xs sm:text-sm md:text-base text-slate-600">Betreute Chirurgen</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">85%</div>
            <div className="text-xs sm:text-sm md:text-base text-slate-600">Durchschnittliche Lead-Steigerung</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">2,8 Mio.€+</div>
            <div className="text-xs sm:text-sm md:text-base text-slate-600">Generierter Umsatz</div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 animate-bounce">
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
