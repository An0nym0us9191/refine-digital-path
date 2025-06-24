
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 py-24 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>
        
        <h1 className="text-4xl font-bold text-slate-800 mb-8">Datenschutzrichtlinien</h1>
        
        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-semibold text-slate-700 mb-4">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-xl font-medium text-slate-600 mb-3">Allgemeine Hinweise</h3>
          <p className="text-slate-600 mb-6">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
            wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>

          <h3 className="text-xl font-medium text-slate-600 mb-3">Datenerfassung auf dieser Website</h3>
          <p className="text-slate-600 mb-6">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem 
            Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
          </p>

          <h2 className="text-2xl font-semibold text-slate-700 mb-4">2. Hosting</h2>
          <p className="text-slate-600 mb-6">
            Wir hosten die Inhalte unserer Website bei Lovable. Der Anbieter ist Lovable Inc., 
            mit Servern in verschiedenen Rechenzentren. Wenn Sie unsere Website besuchen, werden Ihre IP-Adresse 
            und weitere technische Daten erfasst, die für die Bereitstellung der Website erforderlich sind.
          </p>

          <h2 className="text-2xl font-semibold text-slate-700 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3 className="text-xl font-medium text-slate-600 mb-3">Datenschutz</h3>
          <p className="text-slate-600 mb-6">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
            personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie 
            dieser Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-medium text-slate-600 mb-3">Hinweis zur verantwortlichen Stelle</h3>
          <div className="bg-slate-100 p-6 rounded-lg mb-6">
            <p className="text-slate-700 mb-2">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="text-slate-700">
              Vedunas<br />
              München, Deutschland<br />
              E-Mail: hallo@ästhetikwachstum.de<br />
              Telefon: +49 89 123 4567
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-slate-700 mb-4">4. Datenerfassung auf dieser Website</h2>
          <h3 className="text-xl font-medium text-slate-600 mb-3">Server-Log-Dateien</h3>
          <p className="text-slate-600 mb-6">
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
            die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>

          <h3 className="text-xl font-medium text-slate-600 mb-3">Kontaktformular</h3>
          <p className="text-slate-600 mb-6">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
            inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
            von Anschlussfragen bei uns gespeichert.
          </p>

          <h2 className="text-2xl font-semibold text-slate-700 mb-4">5. Externe Dienste</h2>
          <h3 className="text-xl font-medium text-slate-600 mb-3">Calendly</h3>
          <p className="text-slate-600 mb-6">
            Wir nutzen Calendly für die Terminvereinbarung. Wenn Sie einen Termin über Calendly buchen, 
            werden Ihre Daten direkt an Calendly übertragen und dort verarbeitet. Calendly ist ein Service 
            der Calendly LLC, USA. Weitere Informationen finden Sie in der Datenschutzerklärung von Calendly.
          </p>

          <h2 className="text-2xl font-semibold text-slate-700 mb-4">6. Ihre Rechte</h2>
          <p className="text-slate-600 mb-6">
            Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
            gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, 
            Sperrung oder Löschung dieser Daten zu verlangen.
          </p>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Stand: Dezember 2024<br />
              Diese Datenschutzerklärung wurde erstellt für Vedunas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
