"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";

const formSchema = z.object({
  name: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
  email: z.string().email("Inserisci un indirizzo email valido"),
  company: z
    .string()
    .min(2, "Il nome dell'azienda deve contenere almeno 2 caratteri"),
  message: z
    .string()
    .min(10, "Il messaggio deve contenere almeno 10 caratteri"),
});

export function ContactForm() {
  // const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      return;
    }
    emailjs.init(publicKey);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  // const handleRecaptchaChange = (token: string | null) => {
  //   setIsVerified(!!token);
  // };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // if (!isVerified) {
    //   toast.error("Per favore, verifica di non essere un robot");
    //   return;
    // }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      toast.error("Configurazione email mancante");
      return;
    }

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: values.name,
          from_email: values.email,
          company: values.company,
          message: values.message,
          to_email: "lucatorre00@gmail.com",
        }
      );

      if (response.status === 200) {
        toast.success("Messaggio inviato con successo!");
        form.reset();
        // recaptchaRef.current?.reset();
        setIsVerified(false);
      } else {
        throw new Error(`Failed to send email: ${response.text}`);
      }
    } catch (error: any) {
      toast.error("Si è verificato un errore nell'invio del messaggio");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome e Cognome</FormLabel>
              <FormControl>
                <Input placeholder="Mario Rossi" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="mario.rossi@azienda.it" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Azienda</FormLabel>
              <FormControl>
                <Input placeholder="Nome Azienda" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Messaggio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Descrivi le tue esigenze..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center mb-4">
          {/* <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={handleRecaptchaChange}
          /> */}
        </div>
        <Button 
          type="submit" 
          className="w-full"
          // disabled={!isVerified}
        >
          Invia Messaggio
        </Button>
      </form>
    </Form>
  );
}
