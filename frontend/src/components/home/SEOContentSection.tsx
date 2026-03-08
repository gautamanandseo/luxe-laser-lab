import { Link } from "react-router-dom";
import ScrollReveal from "@/components/effects/ScrollReveal";

const seoBlocks = [
  {
    title: "Best Laser Hair Removal Clinic in Delhi NCR",
    content: `Empathy Laser Clinic is widely recognised as the best laser hair removal clinic in Delhi, offering permanent hair reduction with USFDA-cleared Lumenis LightSheer Desire™ and Alma Soprano ICE Platinum™ technology. Our clinic in Pitampura serves clients from across Delhi NCR including Rohini, Shalimar Bagh, Model Town, Paschim Vihar, Ashok Vihar, Noida, Gurugram, and Dwarka. Whether you're looking for full body laser hair removal in Delhi, upper lip laser treatment, or underarm laser hair removal cost in Delhi, our expert team provides customised plans with transparent pricing. We specialise in laser hair removal for Indian skin types (Fitzpatrick III–VI), ensuring safe, effective, and virtually painless sessions.`,
    links: [
      { text: "Laser Hair Removal in Delhi", to: "/laser-hair-removal" },
      { text: "Book Free Consultation", to: "/contact" },
    ],
  },
  {
    title: "CoolSculpting® & Non-Surgical Weight Loss in Delhi",
    content: `Looking for the best CoolSculpting clinic in Delhi? Empathy Laser Clinic is Delhi NCR's premier destination for FDA-cleared CoolSculpting® Elite fat freezing. Our non-surgical weight loss treatments permanently eliminate up to 27% of stubborn fat cells per session — with zero downtime, no needles, and no surgery. Serving patients across Delhi NCR, Pitampura, Rohini, Noida, and Gurugram, we offer comprehensive body contouring solutions including double chin reduction, abdomen sculpting, love handle treatment, and thigh contouring. If you've been searching for weight loss clinic in Delhi, non-surgical fat reduction Delhi NCR, or CoolSculpting cost in Delhi, book your free body assessment today.`,
    links: [
      { text: "CoolSculpting in Delhi", to: "/coolsculpting" },
      { text: "Weight Loss Clinic Delhi", to: "/weight-loss-delhi" },
      { text: "Body Contouring Delhi", to: "/body-contouring" },
    ],
  },
  {
    title: "Advanced Skin Treatments & Dermatology in Delhi",
    content: `From acne scar treatment in Delhi to skin lightening, anti-ageing, and pigmentation correction — Empathy Laser Clinic offers the full spectrum of advanced dermatological treatments. Our skin clinic in Pitampura, Delhi uses clinical-grade technologies including ResurFX™ fractional laser, HydraFacial, chemical peels, PRP therapy, and LED phototherapy. We treat conditions like melasma, dark circles, fine lines, open pores, stretch marks, and uneven skin tone. Patients from Rohini, Shalimar Bagh, Paschim Vihar, GTB Nagar, Ashok Vihar, and across North Delhi trust us for visible, lasting skin transformation.`,
    links: [
      { text: "Skin Treatments Delhi", to: "/skin-treatments" },
      { text: "Acne Treatment Delhi", to: "/acne-treatment" },
      { text: "Skin Lightening Delhi", to: "/skin-lightening" },
      { text: "Dark Circles Treatment", to: "/dark-circles" },
    ],
  },
  {
    title: "Botox, Fillers & Anti-Ageing in Delhi NCR",
    content: `Empathy Laser Clinic is an Allergan-certified clinic offering genuine Botox and premium dermal fillers (Juvederm, Restylane) in Delhi. Our board-certified aesthetic physicians deliver natural-looking results for forehead lines, crow's feet, lip enhancement, jawline contouring, and cheek augmentation. We also offer non-surgical face lift with HIFU technology, skin tightening, and comprehensive anti-ageing programs. If you're searching for Botox cost in Delhi, best dermal fillers in Delhi NCR, or HIFU face lift Delhi, visit our Pitampura clinic for a free consultation.`,
    links: [
      { text: "Botox & Fillers Delhi", to: "/botox-fillers" },
      { text: "HIFU Face Lift Delhi", to: "/hifu-treatment" },
      { text: "Anti-Ageing Delhi", to: "/anti-ageing" },
      { text: "Skin Tightening Delhi", to: "/skin-tightening" },
    ],
  },
  {
    title: "Hair Loss, PRP & Hair Transplant in Delhi",
    content: `Struggling with hair loss or thinning hair? Empathy Laser Clinic offers advanced hair restoration solutions in Delhi NCR including PRP (Platelet-Rich Plasma) therapy, scalp mesotherapy, low-level laser therapy, and FUE hair transplant. Our trichoscopy diagnosis identifies the root cause of hair loss, enabling personalised treatment plans for both men and women. Patients from across Delhi — Pitampura, Rohini, Model Town, Shalimar Bagh, Noida, and Gurugram — trust us for effective hair regrowth and natural-looking hair transplant results.`,
    links: [
      { text: "Hair Loss Treatment Delhi", to: "/hair-loss-treatment" },
      { text: "Hair Transplant Delhi", to: "/hair-transplant" },
    ],
  },
  {
    title: "Bridal Packages & Pre-Wedding Beauty in Delhi",
    content: `Planning your wedding? Empathy Laser Clinic's luxury bridal packages in Delhi offer a complete pre-wedding transformation — from laser hair removal and skin brightening to facials, body contouring, and professional makeup. Start 6 months before your big day for the best results. Our bridal beauty packages in Delhi include customised skincare regimens, HydraFacial glow treatments, and full body laser prep. Brides from Delhi NCR, Rohini, Pitampura, Noida, and Gurugram choose Empathy for their most beautiful day.`,
    links: [
      { text: "Bridal Packages Delhi", to: "/bridal-packages" },
      { text: "Facials & HydraFacial", to: "/facials" },
    ],
  },
];

const nearbyAreas = [
  "Pitampura", "Rohini", "Shalimar Bagh", "Model Town", "Ashok Vihar",
  "Paschim Vihar", "Punjabi Bagh", "Dwarka", "Janakpuri", "Rajouri Garden",
  "GTB Nagar", "Kamla Nagar", "North Campus", "Netaji Subhash Place",
  "Wazirpur", "Saraswati Vihar", "Prashant Vihar", "Rani Bagh",
  "Noida", "Greater Noida", "Gurugram", "Ghaziabad", "Faridabad",
];

const SEOContentSection = () => (
  <section className="py-24 bg-secondary relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-10" />
    <div className="relative z-10 container mx-auto px-6">
      <ScrollReveal direction="up" className="text-center mb-16">
        <p className="eyebrow mb-4">Delhi NCR's Premier Aesthetic Clinic</p>
        <h2 className="section-heading">
          Trusted by <em className="text-primary" style={{ fontStyle: "italic" }}>25,000+</em> Clients Across Delhi
        </h2>
        <p className="body-text mt-4 max-w-3xl mx-auto">
          Empathy Laser Clinic in Pitampura, Delhi has been delivering world-class aesthetic treatments since 2009. We serve clients from across Delhi NCR with USFDA-cleared technology and genuine products.
        </p>
      </ScrollReveal>

      <div className="space-y-12 max-w-4xl mx-auto">
        {seoBlocks.map((block, i) => (
          <ScrollReveal key={i} direction="up" delay={i * 0.05}>
            <div className="border border-border rounded-2xl p-8 bg-card/30 backdrop-blur-sm">
              <h3 className="card-heading mb-4">{block.title}</h3>
              <p className="body-text mb-6">{block.content}</p>
              <div className="flex flex-wrap gap-3">
                {block.links.map((link, j) => (
                  <Link
                    key={j}
                    to={link.to}
                    className="text-sm text-primary border border-primary/20 rounded-full px-4 py-2 hover:bg-primary/10 transition-colors"
                  >
                    {link.text} →
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Nearby Areas */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h3 className="font-serif text-2xl text-foreground text-center mb-6">
          Serving All of <em className="text-primary">Delhi NCR</em>
        </h3>
        <p className="text-muted-foreground text-center mb-8">
          Empathy Laser Clinic proudly serves patients from these areas and beyond. Located conveniently near Pitampura Metro Station, we're easily accessible from anywhere in Delhi NCR.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {nearbyAreas.map((area, i) => (
            <span
              key={i}
              className="text-xs border border-border rounded-full px-3 py-1.5 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SEOContentSection;
