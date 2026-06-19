import { createMetadata } from "@/lib/seo";
import { getGallery } from "@/lib/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata = createMetadata({
  title: "Galerie",
  description:
    "Photos des activités BRENTEX SARL : port, chantiers BTP, installations électriques et opérations de soutage.",
  path: "/galerie",
});

export default function GalleryPage() {
  const items = getGallery();

  return (
    <>
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Galerie</h1>
          <p className="mt-4 text-sky text-lg max-w-2xl mx-auto">
            Visuels placeholder — à remplacer par les photos officielles de BRENTEX SARL.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeader
          title="Nos activités en images"
          subtitle="Port, navires, chantiers BTP, installations techniques et équipes."
        />
        <GalleryGrid items={items} />
      </Section>
    </>
  );
}
