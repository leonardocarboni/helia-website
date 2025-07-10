"use client";
import { SectionHeader } from "@/components/section-header";
import { ContactForm } from "@/components/contact-form";
import { Card } from "@/components/ui/card";
import { Mail, Clock, MessageSquare } from "lucide-react";
import { GlowEffect } from "@/components/glow-effect";

export default function ContattiPage() {
  return (
    <div className="bg-black text-white w-full">
      <section className="container py-16 md:py-20 lg:py-24 relative">
        <SectionHeader
          title="Contattaci"
          description="Siamo qui per aiutarti a trasformare il tuo business con l'intelligenza artificiale"
          centered
          className="text-white"
        />

        <div className="mt-12 mb-12 relative group mx-auto max-w-4xl">
          <GlowEffect
            colors={["#2cc1de", "#3c92e9"]}
            mode="static"
            blur="strongest"
            scale={1.1}
            className="opacity-20 group-hover:opacity-60 transition-opacity duration-500"
          />
          <Card className="p-8 backdrop-blur bg-black/80 border border-white/10 relative z-10 hover:shadow-lg transition-shadow duration-300 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-6">
                  <Mail className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Email</h3>
                <p className="text-gray-400 hover:text-white transition-colors">
                  <a href="mailto:info@laifgroup.com">info@laifgroup.com</a>
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-6">
                  <Clock className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  Disponibilità
                </h3>
                <p className="text-gray-400">
                  Lunedì - Domenica
                  <br />
                  9:00 - 18:00
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-6">
                  <MessageSquare
                    className="w-8 h-8 text-white"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Supporto</h3>
                <p className="text-gray-400">
                  Risposta entro
                  <br />
                  24 ore lavorative
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="relative group mx-auto max-w-3xl mb-8">
          <GlowEffect
            colors={["#7f64e6", "#eb6266"]}
            mode="static"
            blur="strongest"
            scale={1.1}
            className="opacity-20 group-hover:opacity-50 transition-opacity duration-500"
          />
          <Card className="backdrop-blur bg-black/80 border border-white/10 relative z-10">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Mandaci un messaggio
              </h2>
              <ContactForm />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
