
import { Card, CardContent } from "@/components/ui/card";

const CaseStudySection = () => {
  return (
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
  );
};

export default CaseStudySection;
