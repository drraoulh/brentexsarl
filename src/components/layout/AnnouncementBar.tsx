import Link from "next/link";
import Image from "next/image";
import { getSiteData } from "@/lib/content";

export function AnnouncementBar() {
  const { announcement } = getSiteData();

  if (!announcement.enabled) return null;

  return (
    <div className="bg-primary text-white text-sm py-2.5 px-4 text-center">
      <Link href={announcement.link} className="text-white/90 hover:text-accent transition-colors">
        {announcement.text}
      </Link>
    </div>
  );
}
