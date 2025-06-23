
const ResultsSection = () => {
  return (
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
  );
};

export default ResultsSection;
