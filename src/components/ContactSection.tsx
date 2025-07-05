
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, TrendingUp, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const handleCalendlyClick = () => {
    // Replace with your actual Calendly link
    window.open("https://calendly.com/your-calendly-link", "_blank");
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA */}
          <div className="text-center text-white mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Verdoppeln Sie Ihre Patientenzahl
              <span className="block text-blue-200">in den nächsten 90 Tagen</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed">
              Kostenlose Strategiesitzung: Wir zeigen Ihnen <strong>exakt</strong>, wie Sie mit unserem 
              bewährten System mehr qualifizierte Patienten gewinnen und Ihren Umsatz nachhaltig steigern.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center text-white border border-white/20">
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-4 text-blue-200" />
              <h3 className="text-base sm:text-lg font-semibold mb-2">30 Minuten</h3>
              <p className="text-blue-100 text-xs sm:text-sm">Intensive Analyse Ihrer aktuellen Marketingstrategie</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center text-white border border-white/20">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-4 text-blue-200" />
              <h3 className="text-base sm:text-lg font-semibold mb-2">Sofortige Ergebnisse</h3>
              <p className="text-blue-100 text-xs sm:text-sm">Konkrete Handlungsempfehlungen die Sie direkt umsetzen können</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center text-white border border-white/20 sm:col-span-2 md:col-span-1">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-4 text-blue-200" />
              <h3 className="text-base sm:text-lg font-semibold mb-2">Bewährtes System</h3>
              <p className="text-blue-100 text-xs sm:text-sm">Über 150 Praxen vertrauen bereits auf unsere Expertise</p>
            </div>
          </div>

          {/* Main CTA Card */}
          <Card className="bg-white shadow-2xl max-w-3xl mx-auto overflow-hidden">
            <CardContent className="p-8 sm:p-10 lg:p-12 text-center">
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
                  Kostenlose Praxis-Wachstumsstrategie
                </h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  In diesem exklusiven Gespräch analysieren wir Ihre aktuelle Situation und entwickeln 
                  gemeinsam eine maßgeschneiderte Strategie für Ihr Praxiswachstum.
                </p>
              </div>

              {/* What you get */}
              <div className="bg-slate-50 rounded-lg p-6 mb-8 text-left">
                <h4 className="font-semibold text-slate-800 mb-4 text-center">Das erwartet Sie:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Detaillierte Analyse Ihrer aktuellen Online-Präsenz</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Identifikation ungenutzter Wachstumspotentiale</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Konkrete Handlungsempfehlungen für die nächsten 90 Tage</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Keine Verpflichtung, kein Verkaufsgespräch</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleCalendlyClick}
                size="lg" 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 py-4 sm:py-5 text-lg sm:text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Jetzt kostenlose Strategiesitzung buchen
              </Button>
              
              <p className="text-sm text-slate-500 mt-6 leading-relaxed">
                <strong>100% kostenlos & unverbindlich</strong> • Keine Verkaufstaktiken • 
                Sofortige Mehrwerte garantiert
              </p>
            </CardContent>
          </Card>

          {/* Trust indicators */}
          <div className="text-center mt-6 sm:mt-8 md:mt-10 text-blue-100 px-4">
            <p className="text-xs sm:text-sm">
              ⭐⭐⭐⭐⭐ "Die Strategiesitzung hat unsere Praxis transformiert. Innerhalb von 60 Tagen konnten wir 
              unsere Patientenanfragen um 180% steigern." - Dr. Schmidt, Hannover
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
