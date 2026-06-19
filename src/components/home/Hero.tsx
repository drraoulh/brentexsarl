"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  tagline: string;
  description: string;
}

export function Hero({ tagline, description }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(0,135,203,0.92) 0%, rgba(0,135,203,0.75) 50%, rgba(0,102,153,0.85) 100%), url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1920&q=80')",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-3xl">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            BRENTEX SARL — Depuis 2017
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {tagline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-sky leading-relaxed max-w-2xl">
            {description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" variant="secondary" size="lg">
              Demander un devis
              <ArrowRight size={20} />
            </Button>
            <Button href="/activites" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Découvrir nos activités
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
