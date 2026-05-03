import { Link } from "react-router-dom";

/**
 * Sitewide keyword-rich internal link cloud.
 * Renders the primary Delhi service keywords on every page so search
 * engines can crawl and associate the main keywords across the site.
 */
export const keywordLinks: { t: string; to: string }[] = [
  { t: "Laser Hair Removal Delhi", to: "/laser-hair-removal-delhi" },
  { t: "Full Body Laser Hair Removal Delhi", to: "/laser-hair-removal-delhi" },
  { t: "CoolSculpting Delhi", to: "/coolsculpting-delhi" },
  { t: "Weight Loss Clinic Delhi", to: "/weight-loss-clinic-delhi" },
  { t: "Body Contouring Delhi", to: "/body-contouring-delhi" },
  { t: "Skin Clinic Delhi", to: "/skin-clinic-delhi" },
  { t: "Acne Treatment Delhi", to: "/acne-treatment-delhi" },
  { t: "Skin Lightening Delhi", to: "/skin-lightening-delhi" },
  { t: "Anti-Ageing Delhi", to: "/anti-ageing-delhi" },
  { t: "HIFU Face Lift Delhi", to: "/hifu-treatment-delhi" },
  { t: "Dark Circles Treatment Delhi", to: "/dark-circles-treatment-delhi" },
  { t: "Skin Tightening Delhi", to: "/skin-tightening-delhi" },
  { t: "Hair Loss Treatment Delhi", to: "/hair-loss-treatment-delhi" },
  { t: "Hair Transplant Delhi", to: "/hair-transplant-delhi" },
  { t: "Botox & Fillers Delhi", to: "/botox-fillers-delhi" },
  { t: "ResurFX Skin Resurfacing Delhi", to: "/resurfx-delhi" },
  { t: "Microdermabrasion Delhi", to: "/microdermabrasion-delhi" },
  { t: "Bridal Packages Delhi", to: "/bridal-packages-delhi" },
  { t: "HydraFacial Delhi", to: "/facials-delhi" },
  { t: "Tattoo Removal Delhi", to: "/tattoo-removal-delhi" },
  { t: "Stretch Marks Treatment Delhi", to: "/stretch-marks-delhi" },
  { t: "Mole & Wart Removal Delhi", to: "/mole-wart-removal-delhi" },
  { t: "Salon Services Delhi", to: "/salon-services-delhi" },
];

interface Props {
  heading?: string;
  subheading?: string;
  className?: string;
}

const KeywordLinkCloud = ({
  heading = "Popular Treatments in Delhi NCR",
  subheading = "Explore our most-searched services across Delhi, Pitampura, Rohini, Noida and Gurugram.",
  className = "",
}: Props) => (
  <section
    aria-label="Popular treatments in Delhi"
    className={`relative py-16 bg-secondary border-t border-border ${className}`}
  >
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-8">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground">
          {heading.split("Delhi")[0]}
          <em className="text-primary not-italic font-medium">Delhi{heading.includes("Delhi NCR") ? " NCR" : ""}</em>
        </h2>
        <p className="text-sm text-muted-foreground mt-2">{subheading}</p>
      </div>
      <nav className="flex flex-wrap justify-center gap-2">
        {keywordLinks.map((link, i) => (
          <Link
            key={i}
            to={link.to}
            className="text-xs border border-border rounded-full px-3 py-1.5 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-colors"
            title={link.t}
          >
            {link.t}
          </Link>
        ))}
      </nav>
    </div>
  </section>
);

export default KeywordLinkCloud;
