// Sitewide constants — single source of truth for contact info, canonical URLs
// and shared metadata. Consumed by the footer, contact page, JSON-LD scripts
// and the sitemap route.

export const SITE = {
  name: "Big Things Decoration",
  baseUrl: "https://bigthings.lovable.app",
  description:
    "Big Things Decoration conçoit et réalise des stands d'exposition sur mesure, la communication événementielle hybride, l'enseignerie et les caissons lumineux.",
} as const;

export const CONTACT = {
  address: "10 Rue Ammar Ben Yesser, Radès, Tunisie",
  phone: "+216 20 771 990",
  phoneHref: "tel:+21620771990",
  email: "bigthingsdecoration@gmail.com",
  emailHref: "mailto:bigthingsdecoration@gmail.com",
  manager: "Walid Darhoumi",
} as const;

/** Absolute URL for canonical / og:url. */
export const abs = (path: string) => `${SITE.baseUrl}${path}`;
