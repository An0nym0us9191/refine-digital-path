import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1 pr-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und unsere Website zu optimieren. 
              Durch die weitere Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
            <Button
              onClick={handleAccept}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm w-full sm:w-auto"
            >
              Akzeptieren
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="border-slate-300 hover:bg-slate-50 px-6 py-2 text-sm w-full sm:w-auto"
            >
              Ablehnen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;