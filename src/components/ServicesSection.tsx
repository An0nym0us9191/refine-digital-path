
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Code, Search, Check } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
            Spezialisierte Leistungen für Ästhetikpraxen
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto px-2">
            Unser bewährtes System kombiniert überzeugende Content-Erstellung mit zielgerichteter Werbung, 
            um Ihre idealen Patienten anzuziehen und Ihre Praxis zu vergrößern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
            <CardContent className="p-4 sm:p-6 md:p-8 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Camera className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800 mb-3 sm:mb-4">Content-Erstellung</h3>
              <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6">
                Professionelle Vorher/Nachher-Galerien, Aufklärungsinhalte und ansprechende Social Media Posts, 
                die Ihre Expertise präsentieren und Vertrauen bei potenziellen Patienten aufbauen.
              </p>
              <ul className="text-left space-y-2 text-sm sm:text-base text-slate-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Vorher/Nachher-Fotografie</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Aufklärungsvideos</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Social Media Content</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Blog-Artikel</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
            <CardContent className="p-4 sm:p-6 md:p-8 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Search className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800 mb-3 sm:mb-4">Zielgerichtete Werbung</h3>
              <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6">
                Datenbasierte Werbekampagnen auf Google und Social Media Plattformen, 
                die Patienten erreichen, die aktiv nach ästhetischen Behandlungen suchen.
              </p>
              <ul className="text-left space-y-2 text-sm sm:text-base text-slate-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Google Ads Management</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Facebook & Instagram Anzeigen</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Zielgruppen-Targeting</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Kampagnen-Optimierung</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
            <CardContent className="p-4 sm:p-6 md:p-8 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Code className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800 mb-3 sm:mb-4">Website-Optimierung</h3>
              <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6">
                Verwandeln Sie mehr Besucher in Beratungen mit optimierten Landing Pages, 
                streamlinierten Buchungssystemen und vertrauensbildenden Elementen.
              </p>
              <ul className="text-left space-y-2 text-sm sm:text-base text-slate-600">
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
  );
};

export default ServicesSection;
