import { Hero, StatsCounter } from "@/components/home/Hero";
import { ActivityPreview } from "@/components/activities/ActivityCards";
import { Button } from "@/components/ui/Button";
import { getSiteData, getActivities } from "@/lib/content";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Section as PageSection, SectionHeader as Header } from "@/components/ui/Section";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

export default function HomePage() {
  const site = getSiteData();
  const activities = getActivities();

  return (
    <>
      <Hero tagline={site.company.tagline} description={site.company.description} />

      <PageSection background="navy">
        <StatsCounter stats={site.stats} note={site.stats.note} />
      </PageSection>

      <PageSection>
        <Header
          title="Nos domaines d'activité"
          subtitle="Cinq pôles d'expertise au service de votre entreprise, avec une approche B2B fondée sur la fiabilité."
        />
        <ActivityPreview activities={activities} />
      </PageSection>

      <PageSection background="white">
        <Header title="Pourquoi choisir BRENTEX ?" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "Fiabilité", desc: "Des engagements tenus et une conformité rigoureuse." },
            { icon: Clock, title: "Réactivité", desc: "Mobilisation rapide, notamment pour les opérations portuaires." },
            { icon: Award, title: "Expertise B2B", desc: "Un partenaire de confiance pour entreprises et armateurs." },
          ].map((item) => (
            <ScrollReveal key={item.title}>
              <div className="text-center p-8 rounded-xl bg-cream">
                <div className="inline-flex p-3 bg-sky rounded-full mb-4">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-slate">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </PageSection>

      <PageSection background="sky">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
            Prêt à collaborer avec BRENTEX ?
          </h2>
          <p className="mt-4 text-slate text-lg">
            Contactez-nous pour une demande de devis ou plus d&apos;informations sur nos services B2B.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              Demander un devis <ArrowRight size={20} />
            </Button>
            <Button href="/activites" variant="outline" size="lg">
              Découvrir nos activités
            </Button>
          </div>
        </div>
      </PageSection>
    </>
  );
}
