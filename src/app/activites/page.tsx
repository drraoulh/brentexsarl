import { createMetadata } from "@/lib/seo";
import { getActivities } from "@/lib/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ActivityCard } from "@/components/activities/ActivityCards";

export const metadata = createMetadata({
  title: "Nos activités",
  description:
    "Centrale d'achat, BTP, électricité & plomberie, soutage maritime et réalisations diverses — les 5 domaines d'activité de BRENTEX SARL.",
  path: "/activites",
});

export default function ActivitiesPage() {
  const activities = getActivities();

  return (
    <>
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Nos activités</h1>
          <p className="mt-4 text-sky text-lg max-w-2xl mx-auto">
            Cinq domaines d&apos;expertise au service exclusif de la clientèle B2B.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeader
          title="Domaines d'intervention"
          subtitle="Chaque activité est menée avec rigueur, conformité et réactivité — des qualités essentielles pour nos partenaires maritimes et industriels."
        />
        <div className="space-y-12">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </Section>
    </>
  );
}
