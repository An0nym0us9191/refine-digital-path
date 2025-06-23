
const Footer = () => {
  return (
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
          <div className="mt-8 pt-8 border-t border-slate-700">
            <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm">
              <a href="/datenschutz" className="text-slate-400 hover:text-white transition-colors">
                Datenschutzrichtlinien
              </a>
              <span className="text-slate-600">|</span>
              <a href="/impressum" className="text-slate-400 hover:text-white transition-colors">
                Impressum
              </a>
              <span className="text-slate-600">|</span>
              <a href="/agb" className="text-slate-400 hover:text-white transition-colors">
                AGB
              </a>
            </div>
            <div className="text-sm text-slate-400">
              © 2024 ÄsthetikWachstum. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
