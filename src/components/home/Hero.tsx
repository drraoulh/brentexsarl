"use client";

import { useEffect, useRef, useState } from "react";
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
            "linear-gradient(135deg, rgba(10,37,64,0.92) 0%, rgba(10,37,64,0.75) 50%, rgba(26,58,92,0.85) 100%), url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1920&q=80')",
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

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 2000;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsCounter({
  stats,
  note,
}: {
  stats: { experience: StatItem; clients: StatItem; projects: StatItem };
  note: string;
}) {
  const items = [stats.experience, stats.clients, stats.projects];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {items.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-4xl md:text-5xl font-bold text-accent">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sky text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-sky/60 italic">{note}</p>
    </div>
  );
}
