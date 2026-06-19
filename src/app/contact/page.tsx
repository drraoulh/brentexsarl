import { createMetadata } from "@/lib/seo";
import { getSiteData } from "@/lib/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contactez BRENTEX SARL à Douala pour une demande de devis ou d'information. Téléphone, email, WhatsApp et formulaire en ligne.",
  path: "/contact",
});

export default function ContactPage() {
  const { company } = getSiteData();

  return (
    <>
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Contact</h1>
          <p className="mt-4 text-sky text-lg max-w-2xl mx-auto">
            Demandez un devis ou posez vos questions — notre équipe vous répond rapidement.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader title="Formulaire de contact" centered={false} />
            <ContactForm />
          </div>

          <div>
            <SectionHeader title="Coordonnées" centered={false} />
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                <MapPin className="text-accent shrink-0 mt-1" size={22} />
                <div>
                  <p className="font-semibold text-primary">Adresse</p>
                  <p className="text-slate">{company.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                <Phone className="text-accent shrink-0 mt-1" size={22} />
                <div>
                  <p className="font-semibold text-primary">Téléphone</p>
                  <a href={`tel:${company.phoneRaw}`} className="text-slate hover:text-accent">
                    {company.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                <Mail className="text-accent shrink-0 mt-1" size={22} />
                <div>
                  <p className="font-semibold text-primary">Email</p>
                  <a href={`mailto:${company.email}`} className="text-slate hover:text-accent">
                    {company.email}
                  </a>
                </div>
              </div>
              <a
                href={company.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full p-4 bg-[#25D366] text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                Contacter via WhatsApp
              </a>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden shadow-md h-64">
              <iframe
                title="Carte Google Maps — Douala, Cameroun"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255168.09708585747!2d9.664322!3d4.051056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061128d0e74b79d%3A0x4b3e8b8b8b8b8b8b!2sDouala%2C%20Cameroon!5e0!3m2!1sfr!2s!4v1700000000000!5m2!1sfr!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
