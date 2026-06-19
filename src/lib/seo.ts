import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brentexsarl.com";

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle = path ? `${title} | BRENTEX SARL` : `${title} — BRENTEX SARL`;
  const url = `${siteUrl}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "BRENTEX SARL",
      locale: "fr_FR",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export { siteUrl };
