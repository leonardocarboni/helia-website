"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Zap,
  TrendingUp,
  BrainCircuit,
  Sparkles,
  Star,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlowEffect } from "@/components/glow-effect";
import { Squares } from "@/components/squares-background";
import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import React from "react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 1 }, // Container itself is visible
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Star Rating Component
const StarRating = () => (
  <div className="flex items-center justify-center gap-1 mb-4">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };
  const handleMouseLeave = () => setMousePosition(null);
  const heroHeadline = "Adoc: Il tuo Agente AI per la crescita aziendale";

  return (
    <div className="w-full bg-black dark:bg-black text-white overflow-x-hidden">
      {/* === Hero Section === */}
      <motion.section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center px-4"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background Effects: Placed first to be behind everything */}
        <div className="absolute inset-0 w-full h-full">
          {/* Interactive Squares Grid */}
          <Squares
            direction="diagonal"
            speed={0}
            borderColor="rgba(255, 255, 255, 0.15)"
            squareSize={50}
            hoverFillColor="rgba(255, 255, 255, 0.2)"
            rainbowOpacity={0.1}
            mousePosition={mousePosition}
          />
          {/* Fading overlay for smooth transition */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>
          {/* Extra Grid-Rainbow Integration Layer */}
          <div
            className="absolute inset-0 z-0 opacity-60"
            style={{
              background: `
                radial-gradient(circle at 20% 30%, rgba(44, 193, 222, 0.2), transparent 35%),
                radial-gradient(circle at 80% 70%, rgba(127, 100, 230, 0.15), transparent 40%),
                radial-gradient(circle at 50% 50%, rgba(242, 171, 64, 0.1), transparent 60%)
              `,
              mixBlendMode: "screen",
              animation: "glow-shift 15s ease-in-out infinite alternate",
            }}
          ></div>
        </div>
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto pt-24 md:pt-0">
          <motion.div
            className="mb-12 overflow-hidden p-1 inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="text-xs md:text-sm py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2cc1de] to-[#7f64e6]">
                Assistente AI per il Servizio Clienti
              </span>
            </motion.div>
          </motion.div>
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl lg:leading-[1.1] mb-6"
            variants={fadeInUp}
          >
            Helia - Assistente AI per il Servizio Clienti
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lg text-gray-300 sm:text-xl mb-8"
            variants={fadeInUp}
          >
            Un agente AI capace di svolgere gli stessi compiti di un
            rappresentante del servizio clienti fisico. Installazione semplice
            con solo un numero di telefono — collegati al tuo call center
            esistente o funziona in modo indipendente.
          </motion.p>
          <motion.div
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            variants={fadeInUp}
          >
            {/* Primary CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                asChild
                className="relative z-10 group overflow-hidden bg-gradient-to-r from-[#2cc1de] to-[#7f64e6] border-0 hover:shadow-lg hover:shadow-[#7f64e6]/20 transition-all duration-300"
              >
                <Link href="/contatti" className="flex items-center gap-2">
                  Inizia Subito
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-0 w-full h-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10 group-active:opacity-15"></span>
                </Link>
              </Button>
            </motion.div>
            {/* Secondary CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="relative z-10 group overflow-hidden border-white/30 hover:border-white/60 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white hover:text-white"
              >
                <Link href="#funzionalita">
                  Scopri di più
                  <span className="absolute inset-0 block w-full h-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-5 group-active:opacity-10"></span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          {/* Early Access */}
          <motion.div className="mt-10" variants={fadeInUp}>
            <Link href="/contatti" className="inline-block group">
              <div className="relative px-5 py-2 bg-black/40 border border-white/20 rounded-lg hover:bg-black/60 hover:border-white/40 transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-purple-500/20 transform group-hover:-translate-y-0.5">
                <p className="text-sm font-medium text-gray-200 text-center">
                  🚀 Helia è in Early Access - Richiedila per la tua azienda!
                </p>
              </div>
            </Link>
          </motion.div>
          {/* Floating Stats Cards */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Stat Card 1 */}
            <motion.div
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-lg text-center"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(124, 100, 230, 0.2)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2cc1de] to-[#7f64e6]">
                Veloce ed affidabile
              </div>
              <div className="text-sm text-gray-300 mt-1">
                Chiamate sempre disponibili e risposte istantanee.
              </div>
            </motion.div>
            {/* Stat Card 2 */}
            <motion.div
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-lg text-center"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(242, 171, 64, 0.2)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f2ab40] to-[#eb6266]">
                Adattabile
              </div>
              <div className="text-sm text-gray-300 mt-1">
                Personalizziamo Helia sulle tue esigenze e richieste.
              </div>
            </motion.div>
            {/* Stat Card 3 */}
            <motion.div
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-lg text-center"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(192, 229, 86, 0.2)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c0e556] to-[#6ad99a]">
                Facile da usare
              </div>
              <div className="text-sm text-gray-300 mt-1">
                Interfaccia intuitiva per tutti i tuoi dipendenti e clienti.
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      {/* COSA PUÒ FARE HELIA PER TE */}
      <motion.section
        className="container py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <SectionHeader
          title="Cosa Può Fare Helia Per Te"
          description="Tre funzionalità rivoluzionarie che trasformeranno il tuo servizio clienti per sempre"
          centered
          className="mb-12 md:mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="flex flex-col items-center p-8 text-center bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#2cc1de]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #2cc1de22, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Zero chiamate perse
              </h3>
              <h4 className="font-bold mb-1 text-[#2cc1de]">
                Richieste di Richiamata
              </h4>
              <p className="text-gray-300 mb-2">
                Come una receptionist virtuale
              </p>
              <p className="text-gray-400">
                L'operatore vedrà il numero di telefono, nome e motivo della
                richiesta direttamente nella dashboard.
              </p>
            </div>
          </Card>
          <Card className="flex flex-col items-center p-8 text-center bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#7f64e6]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #7f64e622, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                90% domande risolte automaticamente
              </h3>
              <h4 className="font-bold mb-1 text-[#7f64e6]">
                Risposte dalla Knowledge Base
              </h4>
              <p className="text-gray-300 mb-2">
                Alimentato da tecniche RAG avanzate
              </p>
              <p className="text-gray-400">
                Stanco di rispondere sempre alle stesse domande? Helia lo fa per
                te — istantaneamente, accuratamente, 24/7.
              </p>
            </div>
          </Card>
          <Card className="flex flex-col items-center p-8 text-center bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#f2ab40]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #f2ab4022, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Conferma immediata
              </h3>
              <h4 className="font-bold mb-1 text-[#f2ab40]">
                Programmazione Appuntamenti
              </h4>
              <p className="text-gray-300 mb-2">
                Accedendo al calendario e controllando la disponibilità
              </p>
              <p className="text-gray-400">
                Prenota appuntamenti automaticamente controllando la tua agenda
                in tempo reale.
              </p>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* FUNZIONALITÀ */}
      <motion.section
        id="funzionalita"
        className="container py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <SectionHeader
          title="Tutto Quello Che Ti Serve Per Avere Successo"
          description="La nostra piattaforma completa fornisce tutti gli strumenti necessari per ottimizzare il tuo flusso di lavoro, boost productivity, e raggiungere i tuoi obiettivi."
          centered
          className="mb-12 md:mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-8 bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#2cc1de]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #2cc1de22, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10">
              <h4 className="font-bold mb-2 text-white">
                Richieste di Richiamata Intelligenti 🎯
              </h4>
              <p className="text-gray-300">
                La tua receptionist virtuale perfetta! Cattura ogni dettaglio:
                nome, numero e motivo della chiamata. I clienti non aspettano
                più in linea - Helia raccoglie tutto e te lo presenta in una
                dashboard elegante e organizzata.
              </p>
            </div>
          </Card>
          <Card className="p-8 bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#7f64e6]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #7f64e622, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10">
              <h4 className="font-bold mb-2 text-white">
                Risposte Istantanee dalla Tua Knowledge Base 🧠
              </h4>
              <p className="text-gray-300">
                Stanco di rispondere sempre alle stesse domande? Helia lo fa per
                te! Alimentata da tecnologie RAG avanzate, risponde con
                precisione chirurgica utilizzando le informazioni della TUA
                azienda. È come avere un esperto che non dorme mai.
              </p>
            </div>
          </Card>
          <Card className="p-8 bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#f2ab40]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #f2ab4022, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10">
              <h4 className="font-bold mb-2 text-white">
                Programmazione Appuntamenti Automatica 📅
              </h4>
              <p className="text-gray-300">
                Basta con i doppi appuntamenti e le confusioni! Helia accede al
                tuo calendario in tempo reale, controlla la disponibilità e
                prenota automaticamente. I tuoi clienti ottengono conferma
                immediata, tu risparmi ore di lavoro.
              </p>
            </div>
          </Card>
          <Card className="p-8 bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#6ad99a]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #6ad99a22, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10">
              <h4 className="font-bold mb-2 text-white">Disponibilità 24/7</h4>
              <p className="text-gray-300">
                Non perdere mai più una chiamata del cliente. Helia lavora 24
                ore su 24 per servire i tuoi clienti.
              </p>
            </div>
          </Card>
          <Card className="p-8 bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#c0e556]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #c0e55622, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10">
              <h4 className="font-bold mb-2 text-white">
                Installazione Semplice
              </h4>
              <p className="text-gray-300">
                Basta fornire un numero di telefono. Collegati ai call center
                esistenti o funziona in modo indipendente.
              </p>
            </div>
          </Card>
          <Card className="p-8 bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#eb6266]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #eb626622, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10">
              <h4 className="font-bold mb-2 text-white">
                Dashboard in Tempo Reale
              </h4>
              <p className="text-gray-300">
                Monitora tutte le interazioni, richieste di richiamata e
                appuntamenti da una dashboard centrale.
              </p>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* COME FUNZIONA */}
      <motion.section
        className="container py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <SectionHeader
          title="Processo Semplice, Risultati Potenti"
          description="Inizia in pochi minuti e scopri la differenza che la nostra piattaforma può fare per la tua azienda."
          centered
          className="mb-12 md:mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <Card className="p-8 flex flex-col items-center bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#2cc1de]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #2cc1de22, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="text-3xl font-bold mb-2 text-[#2cc1de]">01</div>
              <h4 className="font-bold mb-2 text-white">
                Ottieni il Tuo Numero
              </h4>
              <p className="text-gray-300">
                Ti forniamo un numero di telefono dedicato per il tuo assistente
                AI per il servizio clienti.
              </p>
            </div>
          </Card>
          <Card className="p-8 flex flex-col items-center bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#7f64e6]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #7f64e622, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="text-3xl font-bold mb-2 text-[#7f64e6]">02</div>
              <h4 className="font-bold mb-2 text-white">Collega e Configura</h4>
              <p className="text-gray-300">
                Collegati al tuo call center esistente o lascia che Helia
                funzioni in modo indipendente. Carica la tua knowledge base.
              </p>
            </div>
          </Card>
          <Card className="p-8 flex flex-col items-center bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#f2ab40]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #f2ab4022, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="text-3xl font-bold mb-2 text-[#f2ab40]">03</div>
              <h4 className="font-bold mb-2 text-white">
                Inizia a Servire i Clienti
              </h4>
              <p className="text-gray-300">
                Helia gestisce le chiamate 24/7, gestendo richiami, domande e
                appuntamenti automaticamente.
              </p>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* TESTIMONIANZE */}
      <motion.section
        className="container py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <SectionHeader
          title="Amato dai Team di Tutto il Mondo"
          description="Non fidarti solo delle nostre parole. Scopri cosa dicono i nostri clienti della loro esperienza."
          centered
          className="mb-12 md:mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-8 flex flex-col items-center text-center bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#2cc1de]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #2cc1de22, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <StarRating />
              <p className="italic mb-4 text-gray-300">
                "Helia ha trasformato il nostro servizio clienti. Siamo passati
                dal perdere chiamate ad avere una copertura 24/7. Il nostro
                sistema di richiamata ora è perfetto."
              </p>
              <div className="font-bold text-white">Marco Rossi</div>
              <div className="text-sm text-gray-400">
                Responsabile Servizio Clienti, TechItalia
              </div>
            </div>
          </Card>
          <Card className="p-8 flex flex-col items-center text-center bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#7f64e6]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #7f64e622, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <StarRating />
              <p className="italic mb-4 text-gray-300">
                "L'integrazione della knowledge base è incredibile. Helia
                risponde al 90% delle nostre domande comuni istantaneamente,
                liberando il nostro team per questioni complesse."
              </p>
              <div className="font-bold text-white">Giulia Bianchi</div>
              <div className="text-sm text-gray-400">
                Direttore Operazioni, RetailPlus
              </div>
            </div>
          </Card>
          <Card className="p-8 flex flex-col items-center text-center bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#f2ab40]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #f2ab4022, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <StarRating />
              <p className="italic mb-4 text-gray-300">
                "L'installazione è stata letteralmente solo collegare un numero
                di telefono. In poche ore, avevamo un assistente AI che gestiva
                le chiamate dei clienti professionalmente."
              </p>
              <div className="font-bold text-white">Luca Verdi</div>
              <div className="text-sm text-gray-400">
                Proprietario Azienda, ServiziLocali
              </div>
            </div>
          </Card>
          <Card className="p-8 flex flex-col items-center text-center bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#6ad99a]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #6ad99a22, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <StarRating />
              <p className="italic mb-4 text-gray-300">
                "La prenotazione degli appuntamenti non è mai stata così fluida.
                Helia controlla il nostro calendario e programma tutto
                automaticamente. È come avere una receptionist perfetta."
              </p>
              <div className="font-bold text-white">Anna Ferrari</div>
              <div className="text-sm text-gray-400">
                Responsabile Clinica, SalutePrima
              </div>
            </div>
          </Card>
          <Card className="p-8 flex flex-col items-center text-center bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#c0e556]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #c0e55622, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <StarRating />
              <p className="italic mb-4 text-gray-300">
                "Eravamo scettici riguardo al servizio clienti AI, ma Helia
                suona così naturale. I nostri clienti non si rendono nemmeno
                conto di parlare con un'AI."
              </p>
              <div className="font-bold text-white">Paolo Conti</div>
              <div className="text-sm text-gray-400">
                Proprietario Ristorante, Bella Vista
              </div>
            </div>
          </Card>
          <Card className="p-8 flex flex-col items-center text-center bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#eb6266]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #eb626622, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <StarRating />
              <p className="italic mb-4 text-gray-300">
                "La dashboard ci dà completa visibilità su tutte le interazioni
                dei clienti. Possiamo vedere richieste di richiamata, domande
                comuni e prenotazioni di appuntamenti in tempo reale."
              </p>
              <div className="font-bold text-white">Sofia Ricci</div>
              <div className="text-sm text-gray-400">
                Responsabile Customer Success, CrescitaCo
              </div>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* PREZZI */}
      <motion.section
        className="container py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <SectionHeader
          title="Prezzi Semplici e Trasparenti"
          description="Scegli il piano giusto per la tua azienda. Paghi solo per i minuti effettivamente utilizzati. Tutti i piani includono una prova gratuita di 14 giorni."
          centered
          className="mb-12 md:mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 flex flex-col items-center text-center bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#2cc1de]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #2cc1de22, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10 flex flex-col items-center text-center h-full">
              <h4 className="font-bold mb-2 text-white">Base</h4>
              <div className="mb-2 text-gray-300">Prezzo al minuto</div>
              <ul className="mb-4 text-gray-300 space-y-1">
                <li>Richieste di richiamata</li>
                <li>Dashboard in tempo reale</li>
                <li>Supporto email</li>
                <li>Analisi chiamate base</li>
              </ul>
              <Button size="sm" asChild className="mt-auto">
                <Link href="/contatti">Inizia Prova Gratuita</Link>
              </Button>
            </div>
          </Card>
          <Card className="p-8 flex flex-col items-center text-center bg-black/70 border-2 border-[#7f64e6] backdrop-blur-md hover:border-[#7f64e6]/80 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #7f64e622, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10 flex flex-col items-center text-center h-full">
              <div className="text-xs uppercase text-[#7f64e6] mb-2 font-semibold">
                Più Popolare
              </div>
              <h4 className="font-bold mb-2 text-white">Professionale</h4>
              <div className="mb-2 text-gray-300">Prezzo al minuto</div>
              <ul className="mb-4 text-gray-300 space-y-1">
                <li>Tutto del piano Base</li>
                <li>Knowledge base avanzata</li>
                <li>Supporto prioritario</li>
                <li>Trascrizioni chiamate</li>
                <li>Analisi chiamate avanzate</li>
              </ul>
              <Button size="sm" asChild className="mt-auto">
                <Link href="/contatti">Inizia Prova Gratuita</Link>
              </Button>
            </div>
          </Card>
          <Card className="p-8 flex flex-col items-center text-center bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#f2ab40]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #f2ab4022, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10 flex flex-col items-center text-center h-full">
              <h4 className="font-bold mb-2 text-white">Enterprise</h4>
              <div className="mb-2 text-gray-300">Prezzo al minuto</div>
              <ul className="mb-4 text-gray-300 space-y-1">
                <li>Tutto del piano Professionale</li>
                <li>Knowledge base personalizzata</li>
                <li>Integrazione calendario</li>
                <li>Presa appuntamenti</li>
                <li>Integrazioni personalizzate</li>
                <li>SLA garantito</li>
              </ul>
              <Button size="sm" asChild className="mt-auto">
                <Link href="/contatti">Contatta Vendite</Link>
              </Button>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        className="container py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <SectionHeader
          title="Domande Frequenti"
          description="Trova risposte alle domande comuni sulla nostra piattaforma."
          centered
          className="mb-12 md:mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#2cc1de]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #2cc1de22, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10">
              <h4 className="font-bold mb-2 text-white">
                Come funziona la prova gratuita di 14 giorni?
              </h4>
              <p className="text-gray-300">
                La prova gratuita ti permette di testare tutte le funzionalità
                di Helia senza impegno. Nessuna carta di credito richiesta.
              </p>
            </div>
          </Card>
          <Card className="p-8 bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#7f64e6]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #7f64e622, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10">
              <h4 className="font-bold mb-2 text-white">
                Posso cambiare piano in seguito?
              </h4>
              <p className="text-gray-300">
                Sì, puoi passare a un piano superiore o inferiore in qualsiasi
                momento, in base alle esigenze della tua azienda.
              </p>
            </div>
          </Card>
          <Card className="p-8 bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#f2ab40]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #f2ab4022, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10">
              <h4 className="font-bold mb-2 text-white">
                C'è un limite al numero di utenti che posso aggiungere?
              </h4>
              <p className="text-gray-300">
                No, puoi aggiungere tutti gli utenti che desideri senza costi
                aggiuntivi.
              </p>
            </div>
          </Card>
          <Card className="p-8 bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#6ad99a]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #6ad99a22, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10">
              <h4 className="font-bold mb-2 text-white">
                Offrite sconti per organizzazioni no-profit o istituzioni
                educative?
              </h4>
              <p className="text-gray-300">
                Sì, contattaci per ricevere un'offerta personalizzata.
              </p>
            </div>
          </Card>
          <Card className="p-8 bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#c0e556]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #c0e55622, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10">
              <h4 className="font-bold mb-2 text-white">
                Quanto sono sicuri i miei dati?
              </h4>
              <p className="text-gray-300">
                La sicurezza dei dati è la nostra priorità. Utilizziamo
                tecnologie avanzate per proteggere tutte le informazioni dei
                clienti.
              </p>
            </div>
          </Card>
          <Card className="p-8 bg-black/70 border border-white/10 backdrop-blur-md hover:border-[#eb6266]/50 transition-all duration-300 shadow-lg group overflow-hidden">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at center, #eb626622, transparent 65%)",
              }}
            ></div>
            <div className="relative z-10">
              <h4 className="font-bold mb-2 text-white">
                Che tipo di supporto offrite?
              </h4>
              <p className="text-gray-300">
                Offriamo supporto via email, telefono e chat, oltre a una
                knowledge base sempre aggiornata.
              </p>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* CHI SIAMO */}
      <motion.section
        className="container py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-2xl font-bold mb-4 md:text-3xl text-white"
            variants={fadeInUp}
          >
            Chi Siamo
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 mb-6 leading-relaxed"
            variants={fadeInUp}
          >
            Helia è sviluppata da{" "}
            <strong className="text-[#2cc1de]">LAIF Group</strong>, un'azienda
            specializzata in soluzioni AI innovative per le imprese. Con anni di
            esperienza nel settore dell'intelligenza artificiale e
            dell'automazione dei processi aziendali, creiamo tecnologie che
            semplificano il lavoro e migliorano l'efficienza operativa.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <a
              href="https://laifgroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#2cc1de] hover:text-[#7f64e6] transition-colors duration-300 font-medium"
            >
              Scopri di più su LAIF Group
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA FINALE / CONTATTI */}
      <motion.section
        className="container py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div
          className="relative rounded-lg bg-gradient-to-r from-blue-900/60 via-purple-900/60 to-pink-900/60 p-10 md:p-16 text-center overflow-hidden border border-white/10 shadow-2xl animate-gradient-xy"
          style={{ backgroundSize: "200% 200%" }}
        >
          <GlowEffect
            colors={["#3b82f6", "#a855f7", "#ec4899"]}
            mode="pulse"
            blur="strong"
            scale={1.6}
            duration={5}
            className="opacity-50"
            followMouse={true}
            followStrength={150}
          />
          <div className="relative z-10">
            <motion.h2
              className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl text-white drop-shadow-md"
              variants={fadeInUp}
            >
              Pronto a Trasformare il Tuo Servizio Clienti?
            </motion.h2>
            <motion.p
              className="mb-8 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-sm"
              variants={fadeInUp}
            >
              Unisciti a centinaia di aziende che hanno rivoluzionato la loro
              assistenza clienti con Helia. Non perdere mai una chiamata,
              rispondi alle domande istantaneamente e programma appuntamenti
              automaticamente.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="relative z-10 group overflow-hidden bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 active:scale-100"
              >
                <Link
                  href="/contatti"
                  className="flex items-center gap-2 font-semibold"
                >
                  Contattaci
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
                  <span className="absolute inset-0 block w-full h-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-5 group-active:opacity-10"></span>
                </Link>
              </Button>
            </motion.div>
            <div className="mt-8 text-gray-300">
              <div className="mb-2 font-semibold">
                Hai domande su Helia? Vuoi saperne di più sui nostri piani o hai
                bisogno di una consulenza personalizzata? Il nostro team è qui
                per aiutarti.
              </div>
              <div className="mb-1">
                Scrivici una Email:{" "}
                <a
                  href="mailto:info@laifgroup.com"
                  className="underline text-white"
                >
                  info@laifgroup.com
                </a>
              </div>
              <div className="text-xs">Ti risponderemo entro 24 ore</div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

// Global styles for the animations
const globalStyles = `
@keyframes grid-float {
  0% {
    transform: perspective(1000px) rotateX(2deg) translateY(0px);
  }
  100% {
    transform: perspective(1000px) rotateX(8deg) translateY(-10px);
  }
}

@keyframes glow-shift {
  0% {
    opacity: 0.4;
    background-position: 0% 0%;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 0.5;
    background-position: 100% 100%;
  }
}

@keyframes animate-gradient-xy {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.animate-gradient-xy {
    animation: animate-gradient-xy 15s ease infinite;
}
`;

// Add the styles to the document
if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.textContent = globalStyles;
  document.head.appendChild(styleElement);
}
