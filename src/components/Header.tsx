
import { Button } from "@/components/ui/button";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  return (
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
  );
};

export default Header;
