"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/activites", label: "Nos activités" },
  { href: "/services", label: "Nos services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sky shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="BRENTEX SARL — Fueling Serenity"
              width={140}
              height={56}
              className="h-10 md:h-12 w-auto"
              priority
            />
            <span className="hidden md:block text-xs text-slate font-medium tracking-wider border-l border-sky pl-3">
              Fueling Serenity
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-primary hover:text-brentex-blue-light transition-colors rounded-md hover:bg-sky"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-brentex-blue-light transition-colors"
            >
              Demander un devis
            </Link>
          </nav>

          <button
            type="button"
            className="lg:hidden p-2 text-primary"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-sky",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 text-primary font-medium hover:bg-sky rounded-lg"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
