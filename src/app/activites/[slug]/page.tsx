import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { getActivityBySlug, getActivities } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

const images: Record<string, string> = {
  "centrale-achat": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
  btp: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
  "electricite-plomberie": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80",
  soutage: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200&q=80",
  realisations: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
};

export function generateStaticParams() {
  return getActivities().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);
  if (!activity) return {};
  return createMetadata({
    title: activity.title,
    description: activity.shortDescription,
    path: `/activites/${slug}`,
  });
}

export default async function ActivityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);
  if (!activity) notFound();

  return (
    <>
      <section className="relative h-64 md:h-80">
        <Image
          src={images[slug] || images.realisations}
          alt={activity.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-end">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <Link href="/activites" className="inline-flex items-center gap-1 text-sky text-sm mb-2 hover:text-accent">
              <ArrowLeft size={16} /> Retour aux activités
            </Link>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white">{activity.title}</h1>
          </div>
        </div>
      </section>

      <Section>
        <p className="text-lg text-slate leading-relaxed max-w-3xl">{activity.description}</p>
        <h2 className="font-display text-2xl font-bold text-primary mt-10 mb-4">Avantages clients</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {activity.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2 bg-white p-4 rounded-lg shadow-sm">
              <span className="text-accent font-bold">✓</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Button href="/contact" size="lg">
            Demander un devis pour {activity.title}
          </Button>
        </div>
      </Section>
    </>
  );
}
