import { createMetadata } from "@/lib/seo";
import { getSiteData, getServices } from "@/lib/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Shield, Clock, FileCheck } from "lucide-react";

export const metadata = createMetadata({
  title: "Nos services",
  description:
    "Services BRENTEX SARL par domaine : réactivité, fiabilité et conformité pour la centrale d'achat, le BTP, l'électricité, le soutage et les réalisations.",
  path: "/services",
});

export default function ServicesPage() {
  const site = getSiteData();
  const serviceGroups = getServices();

  return (
    <>
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Nos services</h1>
          <p className="mt-4 text-sky text-lg max-w-2xl mx-auto">
            Des prestations structurées, de la demande de devis à la livraison ou réalisation.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeader title="Bénéfices clients" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Clock, title: "Réactivité", desc: "Réponse rapide et mobilisation opérationnelle." },
            { icon: Shield, title: "Fiabilité", desc: "Engagements tenus et suivi rigoureux." },
            { icon: FileCheck, title: "Conformité", desc: "Respect des normes sectorielles et réglementaires." },
          ].map((b) => (
            <ScrollReveal key={b.title}>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <b.icon size={32} className="mx-auto text-accent mb-3" />
                <h3 className="font-display text-lg font-bold text-primary">{b.title}</h3>
                <p className="mt-2 text-slate text-sm">{b.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <SectionHeader title="Services par domaine" />
        <div className="space-y-10">
          {serviceGroups.map((group) => (
            <ScrollReveal key={group.activitySlug}>
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="font-display text-2xl font-bold text-primary mb-6">{group.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {group.services.map((s) => (
                    <div key={s.name} className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold text-primary">{s.name}</h4>
                      <p className="mt-1 text-slate text-sm">{s.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section background="white">
        <SectionHeader title="Notre processus de travail" />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {site.process.map((step) => (
            <ScrollReveal key={step.step}>
              <div className="relative text-center p-6">
                <div className="w-12 h-12 mx-auto bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                <h4 className="mt-4 font-display font-bold text-primary">{step.title}</h4>
                <p className="mt-2 text-slate text-sm">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
