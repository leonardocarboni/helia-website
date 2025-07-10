import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { IubendaProvider, IubendaCookieSolutionBannerConfigInterface } from '@mep-agency/next-iubenda';
import { AnalyticsConsent } from "@/components/analytics-consent";

const inter = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Helia - Assistente AI telefonico",
  description:
    "Helia è un assistente AI telefonico che risponde alle richieste dei clienti in tempo reale.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

const iubendaBannerConfig: IubendaCookieSolutionBannerConfigInterface = {
  siteId: Number(process.env.NEXT_PUBLIC_IUBENDA_SITE_ID),
  cookiePolicyId: Number(process.env.NEXT_PUBLIC_IUBENDA_COOKIE_POLICY_ID),
  lang: 'it', 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" suppressHydrationWarning className="h-full">
      <body className={`${inter.className} h-full overflow-x-hidden`}>
        <IubendaProvider bannerConfig={iubendaBannerConfig}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {/* Fixed position background that covers the entire viewport */}
            <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-[#2cc1de]/10 via-[#7f64e6]/10 to-[#f2ab40]/10 opacity-40 dark:opacity-20 pointer-events-none" />
            
            <div className="relative min-h-screen flex flex-col overflow-x-hidden">
              {/* <Navigation /> */}
              <main className="relative z-10 flex-grow w-full">{children}</main>
              <Footer />
            </div>
            
            <Toaster />
            <AnalyticsConsent />
          </ThemeProvider>
        </IubendaProvider>
      </body>
    </html>
  );
}
