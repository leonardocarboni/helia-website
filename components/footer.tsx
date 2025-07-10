import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black text-white">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image
            src="/circles.svg"
            alt="Laif Logo"
            width={32}
            height={32}
            className="h-8 w-8 invert"
          />
          <p className="text-center text-sm leading-loose md:text-left text-gray-400">
            © 2025 Laif. Tutti i diritti riservati.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Home
          </Link>
          
          <Link
            href="/contatti"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Contatti
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/termini"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Termini
          </Link>
          <Link
            href="https://laifgroup.com/"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Laif Group Parent Website
          </Link>
        </div>
      </div>
    </footer>
  );
}
