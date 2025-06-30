
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
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
                "Vedunas hat unsere Online-Präsenz transformiert. Wir sind von einem 
                Kampf um Terminvergabe zu einer 3-monatigen Warteliste für Beratungen übergegangen."
              </p>
              <div className="flex items-center">
                <div>
                  <div className="font-semibold text-slate-800">Dr. Sarah Martinez</div>
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
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
