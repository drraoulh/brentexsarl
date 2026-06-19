import Link from "next/link";
import Image from "next/image";
import {
  HardHat,
  Ship,
  ShoppingCart,
  Wrench,
  Zap,
  ArrowRight,
} from "lucide-react";
import type { Activity } from "@/types/content";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const iconMap = {
  "shopping-cart": ShoppingCart,
  "hard-hat": HardHat,
  zap: Zap,
  ship: Ship,
  wrench: Wrench,
} as const;

const placeholderImages: Record<string, string> = {
  "centrale-achat": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  btp: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  "electricite-plomberie": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
  soutage: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=600&q=80",
  realisations: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
};

export function ActivityPreview({ activities }: { activities: Activity[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {activities.map((activity, i) => {
        const Icon = iconMap[activity.icon as keyof typeof iconMap] || Wrench;
        return (
          <ScrollReveal key={activity.id}>
            <Link
              href={`/activites/${activity.slug}`}
              className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={placeholderImages[activity.slug] || placeholderImages.realisations}
                  alt={`${activity.title} — BRENTEX SARL`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/20 transition-colors" />
                <div className="absolute top-4 left-4 p-2 bg-accent rounded-lg">
                  <Icon size={20} className="text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary group-hover:text-accent transition-colors">
                  {activity.title}
                </h3>
                <p className="mt-2 text-slate text-sm leading-relaxed">
                  {activity.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-accent">
                  En savoir plus <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        );
      })}
    </div>
  );
}

export function ActivityCard({ activity }: { activity: Activity }) {
  const Icon = iconMap[activity.icon as keyof typeof iconMap] || Wrench;
  const img = placeholderImages[activity.slug] || placeholderImages.realisations;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative h-56">
        <Image src={img} alt={activity.title} fill className="object-cover" sizes="50vw" />
      </div>
      <div className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-sky rounded-lg">
            <Icon size={24} className="text-primary" />
          </div>
          <h3 className="font-display text-2xl font-bold text-primary">{activity.title}</h3>
        </div>
        <p className="text-slate leading-relaxed">{activity.description}</p>
        <ul className="mt-6 space-y-2">
          {activity.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-foreground">
              <span className="text-accent mt-0.5">✓</span> {b}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-1 text-primary font-medium hover:text-accent"
        >
          Demander un devis <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
