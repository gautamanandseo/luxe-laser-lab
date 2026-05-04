/**
 * Centralized Schema.org JSON-LD helpers.
 * Every page composes a @graph with Organization + LocalBusiness + page-specific nodes
 * to strengthen rich results and local SEO for Delhi NCR.
 */

const SITE_URL = "https://empathylaserclinic.com/laser-treatments/";
const LOGO_URL =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/835a41fb-bc3f-4d27-b81e-d16b90f5a1a8/id-preview-b3a46e2f--cf10e61c-b23a-472f-b7a2-7f02e6b3418f.lovable.app-1772602102059.png";

export const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  name: "Empathy Laser Clinic",
  alternateName: "Empathy Skin & Laser Hair Removal Clinic Delhi",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 512,
    height: 512,
  },
  image: LOGO_URL,
  telephone: ["+919811157787", "+919811157784"],
  email: "info@empathylaserclinic.com",
  foundingDate: "2009",
  founder: [
    { "@type": "Person", name: "Dr. Jyoti Anand", jobTitle: "Director & Chief Dermatologist" },
    { "@type": "Person", name: "Dr. Rajnish Anand", jobTitle: "Director & Hair Transplant Surgeon" },
  ],
  sameAs: [
    "https://www.instagram.com/empathylaserclinic/",
    "https://www.facebook.com/empathylaserclinic",
    "https://www.youtube.com/user/tourismdentalindia",
    "https://www.google.com/maps/place/Empathy+Skin+%26+Laser+Hair+Removal+Clinic+Delhi+-+Coolsculpting+-+Skin+Treatments/@28.7013523,77.1246251,15z",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "HD-6, First Floor, Main Road, Opp Metro Pillar 362",
    addressLocality: "Pitampura",
    addressRegion: "Delhi",
    postalCode: "110034",
    addressCountry: "IN",
  },
};

export const localBusinessSchema = {
  "@type": ["MedicalBusiness", "LocalBusiness"],
  "@id": `${SITE_URL}#localbusiness`,
  name: "Empathy Laser Clinic Delhi",
  description:
    "Delhi NCR's premier aesthetic clinic for laser hair removal (Lumenis LightSheer, Alma Soprano), CoolSculpting fat freezing, weight loss, body contouring, Botox, fillers, hair restoration & advanced skincare.",
  url: SITE_URL,
  telephone: "+919811157787",
  priceRange: "₹₹",
  image: LOGO_URL,
  logo: LOGO_URL,
  parentOrganization: { "@id": `${SITE_URL}#organization` },
  address: {
    "@type": "PostalAddress",
    streetAddress: "HD-6, First Floor, Main Road, Opp Metro Pillar 362",
    addressLocality: "Pitampura",
    addressRegion: "Delhi",
    postalCode: "110034",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.7013527,
    longitude: 77.1349249,
  },
  hasMap:
    "https://www.google.com/maps/place/Empathy+Skin+%26+Laser+Hair+Removal+Clinic+Delhi",
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "Place", name: "Pitampura" },
    { "@type": "Place", name: "Rohini" },
    { "@type": "Place", name: "Shalimar Bagh" },
    { "@type": "Place", name: "Paschim Vihar" },
    { "@type": "Place", name: "Ashok Vihar" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "City", name: "Ghaziabad" },
    { "@type": "City", name: "Faridabad" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "860",
    reviewCount: "860",
  },
  medicalSpecialty: ["Dermatology", "PlasticSurgery"],
  knowsAbout: [
    "Laser Hair Removal",
    "CoolSculpting",
    "Body Contouring",
    "Botox",
    "Dermal Fillers",
    "Skin Lightening",
    "Anti-Ageing",
    "PRP Therapy",
    "Hair Transplant",
  ],
};

export interface FaqItem {
  q: string;
  a: string;
}

export const buildFAQSchema = (faqs: FaqItem[], pageUrl: string) => ({
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const buildBreadcrumbSchema = (
  items: { name: string; url: string }[],
  pageUrl: string
) => ({
  "@type": "BreadcrumbList",
  "@id": `${pageUrl}#breadcrumb`,
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});

export const buildWebPageSchema = (
  pageUrl: string,
  name: string,
  description: string
) => ({
  "@type": "WebPage",
  "@id": pageUrl,
  url: pageUrl,
  name,
  description,
  isPartOf: { "@id": `${SITE_URL}#organization` },
  about: { "@id": `${SITE_URL}#localbusiness` },
  breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  inLanguage: "en-IN",
});

/**
 * Build a Review node attached to the LocalBusiness so testimonials
 * qualify for richer local result enhancements (rating snippets, etc.).
 */
export interface ReviewInput {
  author: string;
  body: string;
  rating: number;
  datePublished: string;
  treatment?: string;
  location?: string;
}

export const buildReviewSchema = (r: ReviewInput, pageUrl: string, idx: number) => ({
  "@type": "Review",
  "@id": `${pageUrl}#review-${idx + 1}`,
  itemReviewed: { "@id": `${SITE_URL}#localbusiness` },
  reviewRating: {
    "@type": "Rating",
    ratingValue: r.rating,
    bestRating: 5,
    worstRating: 1,
  },
  author: { "@type": "Person", name: r.author },
  reviewBody: r.body,
  datePublished: r.datePublished,
  publisher: { "@id": `${SITE_URL}#organization` },
  ...(r.treatment ? { about: r.treatment } : {}),
  ...(r.location ? { locationCreated: { "@type": "Place", name: r.location } } : {}),
});

export const buildReviewsGraph = (reviews: ReviewInput[], pageUrl: string) =>
  reviews.map((r, i) => buildReviewSchema(r, pageUrl, i));

/**
 * Compose a full @graph for a page.
 * Always includes Organization + LocalBusiness; pass page-specific nodes via `extra`.
 */
export const buildGraph = (extra: Record<string, unknown>[] = []) => ({
  "@context": "https://schema.org",
  "@graph": [organizationSchema, localBusinessSchema, ...extra],
});

export const SITE_BASE_URL = SITE_URL;
