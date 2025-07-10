import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="bg-black text-white w-full">
      <div className="container mx-auto">
        <section className="py-16 md:py-24 lg:py-32">
          <SectionHeader
            title="Informativa sulla Privacy"
            description="La tua privacy è una priorità per Laif. Questa informativa spiega come raccogliamo, utilizziamo, condividiamo e proteggiamo i tuoi dati personali, in conformità con il GDPR e altre normative applicabili."
            centered
            className="text-white mb-12 md:mb-16"
          />

          <Card className="mt-12 p-6 md:p-8 bg-black/70 border border-white/10 backdrop-blur-md shadow-lg max-w-4xl mx-auto">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4 text-white">1. Chi siamo</h2>
              <p className="mb-6 text-gray-300">
                Laif è una società specializzata nell'offerta di soluzioni di automazione aziendale e software basati sull'intelligenza artificiale. Per qualsiasi domanda, puoi contattarci all'indirizzo email: <strong className="text-white">privacy@Laif.ai</strong>.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white">2. Dati raccolti</h2>
              <p className="mb-6 text-gray-300">
                Raccogliamo i seguenti dati personali per fornire e migliorare i nostri servizi:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-300">
                <li>Dati identificativi: nome, cognome, indirizzo email</li>
                <li>Dati aziendali: ragione sociale, partita IVA, settore di attività</li>
                <li>Dati tecnici: indirizzo IP, tipo di dispositivo, sistema operativo</li>
                <li>Dati di utilizzo: interazioni con i nostri servizi, preferenze</li>
                <li>Dati di supporto: informazioni condivise durante richieste di assistenza</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-white">3. Finalità del trattamento</h2>
              <p className="mb-6 text-gray-300">
                Utilizziamo i tuoi dati personali per le seguenti finalità:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-300">
                <li>Fornire, personalizzare e migliorare i nostri servizi</li>
                <li>Gestire le richieste di supporto tecnico</li>
                <li>Garantire la sicurezza dei nostri sistemi</li>
                <li>Comunicare aggiornamenti su nuovi prodotti o funzionalità</li>
                <li>Rispettare gli obblighi legali e fiscali</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-white">4. Condivisione dei dati</h2>
              <p className="mb-6 text-gray-300">
                I tuoi dati personali non saranno mai venduti a terzi. Tuttavia, potrebbero essere condivisi con:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-300">
                <li>Fornitori di servizi IT per la gestione della nostra infrastruttura</li>
                <li>Consulenti legali, fiscali o di conformità</li>
                <li>Autorità competenti in caso di obblighi legali</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-white">5. Conservazione dei dati</h2>
              <p className="mb-6 text-gray-300">
                Conserviamo i tuoi dati personali per il tempo strettamente necessario alle finalità per cui sono stati raccolti, salvo diversi obblighi legali. In generale:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-300">
                <li>I dati di utilizzo sono conservati per 12 mesi</li>
                <li>I dati relativi ai contratti sono conservati per 10 anni</li>
                <li>Altri dati sono eliminati su richiesta, salvo obblighi di legge</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-white">6. Sicurezza dei dati</h2>
              <p className="mb-6 text-gray-300">
                Adottiamo misure di sicurezza avanzate per proteggere i tuoi dati, inclusi:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-300">
                <li>Crittografia durante la trasmissione dei dati</li>
                <li>Accesso limitato ai dati solo al personale autorizzato</li>
                <li>Monitoraggio continuo delle nostre infrastrutture</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-white">7. I tuoi diritti</h2>
              <p className="mb-6 text-gray-300">In conformità con il GDPR, hai diritto a:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-300">
                <li>Accedere ai tuoi dati personali</li>
                <li>Richiedere la rettifica o l'aggiornamento dei dati</li>
                <li>Chiedere la cancellazione dei dati ("diritto all'oblio")</li>
                <li>Limitare o opporti al trattamento dei dati</li>
                <li>Richiedere la portabilità dei dati</li>
                <li>Presentare un reclamo a un'autorità di controllo</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-white">8. Modifiche all'informativa</h2>
              <p className="mb-6 text-gray-300">
                Potremmo aggiornare periodicamente questa informativa. Ti informeremo tramite email o avviso sul sito web in caso di modifiche rilevanti.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white">9. Contatti</h2>
              <p className="text-gray-300">
                Per qualsiasi domanda o richiesta riguardante la privacy, contattaci:
              </p>
              <p className="text-gray-300">Email: <strong className="text-white">privacy@Laif.ai</strong></p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
