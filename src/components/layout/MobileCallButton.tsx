import { Phone } from "lucide-react";
import { getSiteData } from "@/lib/content";

export function MobileCallButton() {
  const { company } = getSiteData();

  return (
    <a
      href={`tel:${company.phoneRaw}`}
      className="fixed bottom-6 left-6 z-50 md:hidden flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary-light transition-colors"
      aria-label="Appeler BRENTEX SARL"
    >
      <Phone size={24} />
    </a>
  );
}
