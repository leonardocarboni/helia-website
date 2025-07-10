import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";

export default function TerminiPage() {
  return (
    <div className="bg-black text-white w-full">
      <div className="container mx-auto">
        <section className="py-16 md:py-24 lg:py-32">
          <SectionHeader
            title="Termini e Condizioni"
            description="Leggi attentamente i termini e le condizioni che regolano l'uso dei servizi offerti da Laif."
            centered
            className="text-white mb-12 md:mb-16"
          />
          
          <Card className="mt-12 p-6 md:p-8 bg-black/70 border border-white/10 backdrop-blur-md shadow-lg max-w-4xl mx-auto">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4 text-white">1. Accettazione dei Termini</h2>
              <p className="mb-6 text-gray-300">
                Utilizzando i servizi di Laif, accetti di essere vincolato da questi termini e condizioni. Se non accetti uno qualsiasi dei termini, ti invitiamo a non utilizzare i nostri servizi.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white">2. Descrizione del Servizio</h2>
              <p className="mb-6 text-gray-300">
                Laif offre soluzioni di intelligenza artificiale per l'automazione dei processi aziendali e la gestione della documentazione. Ci riserviamo il diritto di aggiornare, modificare o interrompere il servizio in qualsiasi momento, previa comunicazione agli utenti laddove possibile.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white">3. Licenze e Proprietà Intellettuale</h2>
              <p className="mb-6 text-gray-300">
                Tutti i diritti relativi ai software, alle piattaforme e ai contenuti forniti da Laif, inclusi i diritti di proprietà intellettuale, appartengono esclusivamente a Laif o ai suoi licenziatari. Sei autorizzato a utilizzare i nostri servizi solo per scopi conformi ai termini stabiliti.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white">4. Limitazioni di Responsabilità</h2>
              <p className="mb-6 text-gray-300">
                Laif fornisce i suoi servizi "così come sono" e "come disponibili". Non garantiamo l'assenza di errori o l'accuratezza dei risultati. Non saremo responsabili per:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-300">
                <li>Danni indiretti, accidentali o consequenziali derivanti dall'uso del servizio</li>
                <li>Eventuali perdite di dati o interruzioni del servizio</li>
                <li>Uso improprio o non autorizzato del servizio</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-white">5. Obblighi dell'Utente</h2>
              <p className="mb-6 text-gray-300">
                Accedendo ai nostri servizi, ti impegni a:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-300">
                <li>Fornire informazioni veritiere e aggiornate</li>
                <li>Mantenere riservate le tue credenziali di accesso</li>
                <li>Non utilizzare il servizio per scopi illegali o dannosi</li>
                <li>Non caricare contenuti che violano i diritti di terze parti</li>
                <li>Non tentare di compromettere la sicurezza o l'integrità dei nostri sistemi</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-white">6. Termini di Pagamento</h2>
              <p className="mb-6 text-gray-300">
                I servizi a pagamento devono essere saldati in conformità con le condizioni specifiche del contratto. Eventuali ritardi nei pagamenti potranno comportare l'interruzione del servizio.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white">7. Modifiche ai Termini</h2>
              <p className="mb-6 text-gray-300">
                Laif si riserva il diritto di aggiornare i presenti termini e condizioni. Le modifiche saranno effettive dalla data di pubblicazione sul nostro sito web. Gli utenti saranno informati in caso di modifiche significative.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white">8. Risoluzione</h2>
              <p className="mb-6 text-gray-300">
                Ci riserviamo il diritto di sospendere o terminare l'accesso ai servizi in caso di violazione dei termini, uso improprio o mancato pagamento.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white">9. Legge Applicabile e Giurisdizione</h2>
              <p className="mb-6 text-gray-300">
                Questi termini sono regolati dalla legislazione italiana. Qualsiasi controversia sarà sottoposta alla giurisdizione esclusiva del Tribunale di Milano.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white">10. Contatti</h2>
              <p className="text-gray-300">
                Per domande o chiarimenti relativi ai presenti termini e condizioni, puoi contattarci all'indirizzo email: <strong className="text-white">support@Laif.ai</strong>.
              </p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}