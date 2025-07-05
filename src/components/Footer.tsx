const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 md:py-12 bg-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Vedunas
          </div>
          <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6 md:mb-8 px-2">
            Spezialisiertes digitales Marketing für Ästhetik- und Plastikchirurgie-Praxen
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 md:gap-8 text-xs sm:text-sm text-slate-300">
            <span>hallo@ästhetikwachstum.de</span>
            <span className="hidden sm:inline">|</span>
            <span>+49 89 123 4567</span>
            <span className="hidden sm:inline">|</span>
            <span>Hannover, Deutschland</span>
          </div>
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-700">
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 text-xs sm:text-sm">
              <a href="/datenschutz" className="text-slate-400 hover:text-white transition-colors">
                Datenschutzrichtlinien
              </a>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <a href="/impressum" className="text-slate-400 hover:text-white transition-colors">
                Impressum
              </a>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <a href="/agb" className="text-slate-400 hover:text-white transition-colors">
                AGB
              </a>
            </div>
            <div className="text-xs sm:text-sm text-slate-400">
              © 2024 Vedunas. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
