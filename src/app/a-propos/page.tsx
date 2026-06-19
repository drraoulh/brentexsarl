import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { getSiteData } from "@/lib/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = createMetadata({
  title: "À propos",
  description:
    "Découvrez l'histoire, la mission et les valeurs de BRENTEX SARL, entreprise camerounaise fondée en 2017 à Douala.",
  path: "/a-propos",
});

export default function AboutPage() {
  const site = getSiteData();

  return (
    <>
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">À propos de BRENTEX</h1>
          <p className="mt-4 text-sky text-lg max-w-2xl mx-auto">{site.company.tagline}</p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader title="Notre histoire" centered={false} />
            <p className="text-slate leading-relaxed">{site.about.history}</p>
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&q=80"
              alt="Port de Douala — image placeholder BRENTEX SARL"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">Mission</h2>
            <p className="text-slate leading-relaxed">{site.about.mission}</p>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">Vision</h2>
            <p className="text-slate leading-relaxed">{site.about.vision}</p>
          </ScrollReveal>
        </div>
      </Section>

      <Section>
        <SectionHeader title="Nos valeurs" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {site.about.values.map((v) => (
            <ScrollReveal key={v.title}>
              <div className="bg-white p-6 rounded-xl shadow-md h-full">
                <h3 className="font-display text-lg font-bold text-primary">{v.title}</h3>
                <p className="mt-2 text-slate text-sm">{v.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section background="white">
        <SectionHeader title="Chiffres clés" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {site.about.keyFigures.map((fig) => (
            <div key={fig.label} className="text-center p-6 bg-cream rounded-xl">
              <p className="font-display text-2xl font-bold text-accent">{fig.value}</p>
              <p className="mt-1 text-sm text-slate">{fig.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="Équipe dirigeante" subtitle="[Placeholders — photos et biographies à compléter par la Direction]" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {site.team.map((member) => (
            <ScrollReveal key={member.name}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-56 bg-sky flex items-center justify-center">
                  <span className="text-slate text-sm">Photo placeholder</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-primary">{member.name}</h3>
                  <p className="text-accent text-sm font-medium">{member.role}</p>
                  <p className="mt-2 text-slate text-sm">{member.bio}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
