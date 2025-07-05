
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800">
          Vedunas
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-blue-600 transition-colors text-sm lg:text-base">Leistungen</button>
          <button onClick={() => scrollToSection('results')} className="text-slate-600 hover:text-blue-600 transition-colors text-sm lg:text-base">Ergebnisse</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-slate-600 hover:text-blue-600 transition-colors text-sm lg:text-base">Referenzen</button>
          <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-blue-600 transition-colors text-sm lg:text-base">Kontakt</button>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button onClick={() => scrollToSection('contact')} className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm px-3 sm:px-4 py-2 hidden sm:block">
            Jetzt starten
          </Button>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            <button 
              onClick={() => {scrollToSection('services'); setIsMenuOpen(false);}} 
              className="block w-full text-left py-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              Leistungen
            </button>
            <button 
              onClick={() => {scrollToSection('results'); setIsMenuOpen(false);}} 
              className="block w-full text-left py-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              Ergebnisse
            </button>
            <button 
              onClick={() => {scrollToSection('testimonials'); setIsMenuOpen(false);}} 
              className="block w-full text-left py-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              Referenzen
            </button>
            <button 
              onClick={() => {scrollToSection('contact'); setIsMenuOpen(false);}} 
              className="block w-full text-left py-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              Kontakt
            </button>
            <Button 
              onClick={() => {scrollToSection('contact'); setIsMenuOpen(false);}} 
              className="w-full bg-blue-600 hover:bg-blue-700 mt-4"
            >
              Jetzt starten
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
