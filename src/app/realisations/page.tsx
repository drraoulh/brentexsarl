import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { getRealisations } from "@/lib/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const projectImages: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80",
  "2": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  "3": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
};

export const metadata = createMetadata({
  title: "Réalisations",
  description:
    "Projets référencés BRENTEX SARL — soutage, BTP, électricité et plus.",
  path: "/realisations",
});

export default function RealisationsPage() {
  const projects = getRealisations();

  return (
    <>
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Réalisations</h1>
          <p className="mt-4 text-sky text-lg max-w-2xl mx-auto">
            Projets et partenariats menés pour nos clients B2B.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeader title="Projets référencés" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ScrollReveal key={project.id}>
              <article className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={projectImages[project.id] || projectImages["1"]}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                  <span className="absolute top-3 left-3 bg-accent text-white text-xs font-medium px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-primary">{project.title}</h3>
                  <p className="text-sm text-accent mt-1">{project.client} — {project.year}</p>
                  <p className="mt-2 text-slate text-sm">{project.description}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
