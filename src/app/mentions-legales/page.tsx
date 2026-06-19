import { createMetadata } from "@/lib/seo";
import { getSiteData } from "@/lib/content";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata = createMetadata({
  title: "Mentions légales",
  description: "Mentions légales, politique de confidentialité et conditions générales de BRENTEX SARL.",
  path: "/mentions-legales",
});

export default function LegalPage() {
  const { company, legal } = getSiteData();

  return (
    <>
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Mentions légales</h1>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto prose prose-slate">
          <SectionHeader title="Informations légales" centered={false} />
          <ul className="space-y-2 text-slate">
            <li><strong>Raison sociale :</strong> {company.name}</li>
            <li><strong>Siège social :</strong> {company.address}</li>
            <li><strong>Email :</strong> {company.email}</li>
            <li><strong>Téléphone :</strong> {company.phone}</li>
            <li><strong>RCCM :</strong> {company.rccm}</li>
            <li><strong>NIU :</strong> {company.niu}</li>
            <li><strong>Année de création :</strong> {company.founded}</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-primary mt-12 mb-4">Politique de confidentialité</h2>
          <p className="text-slate leading-relaxed">{legal.privacy}</p>

          <h2 className="font-display text-2xl font-bold text-primary mt-12 mb-4">Conditions générales</h2>
          <p className="text-slate leading-relaxed">{legal.terms}</p>
        </div>
      </Section>
    </>
  );
}
