import { motion } from "framer-motion";
import { Crown, Gem, Star, ArrowRight, Sparkles, Gift, Heart, Award, Percent } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/effects/ScrollReveal";
import Tilt3DCard from "@/components/effects/Tilt3DCard";
import AuroraMesh from "@/components/effects/AuroraMesh";

const tiers = [
  {
    name: "Silver",
    icon: Star,
    color: "from-[hsl(0,0%,65%)] to-[hsl(0,0%,80%)]",
    borderColor: "border-[hsl(0,0%,65%,0.3)]",
    glowColor: "hsl(0,0%,70%,0.15)",
    perks: ["5% off all treatments", "Priority appointment booking", "Birthday month surprise gift", "Exclusive newsletter with tips", "Free skin assessment annually"],
    threshold: "After 3 visits",
  },
  {
    name: "Gold",
    icon: Crown,
    color: "from-primary to-[hsl(38,60%,75%)]",
    borderColor: "border-primary/30",
    glowColor: "hsl(38,45%,60%,0.15)",
    perks: ["10% off all treatments", "Free monthly facial upgrade", "Exclusive VIP event invites", "₹500 referral bonus per friend", "Complimentary aftercare kits", "Priority WhatsApp support"],
    threshold: "After 8 visits",
    popular: true,
  },
  {
    name: "Platinum",
    icon: Gem,
    color: "from-[hsl(220,30%,60%)] to-[hsl(220,40%,80%)]",
    borderColor: "border-[hsl(220,30%,60%,0.3)]",
    glowColor: "hsl(220,30%,60%,0.15)",
    perks: ["15% off all treatments", "1 complimentary treatment per quarter", "VIP lounge access & refreshments", "Personal beauty concierge", "Annual comprehensive skin assessment", "Exclusive preview of new treatments", "Partner & family discounts"],
    threshold: "After 15 visits",
  },
];

const benefits = [
  { icon: Gift, label: "Welcome Gift", desc: "20% off your very first session" },
  { icon: Heart, label: "Refer & Earn", desc: "₹500 credit for every referral" },
  { icon: Percent, label: "Package Savings", desc: "Up to 30% off with course packages" },
  { icon: Award, label: "Auto-Enrollment", desc: "Start earning from visit one" },
];

const LoyaltyTeaser = () => (
  <section className="py-28 bg-background relative overflow-hidden">
    <AuroraMesh intensity="subtle" className="opacity-30" />
    <div className="absolute inset-0 grid-bg opacity-15" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] radial-glow opacity-50" />

    <div className="relative z-10 container mx-auto px-6">
      <ScrollReveal direction="up" className="text-center mb-16">
        <p className="eyebrow mb-4">VIP Rewards</p>
        <h2 className="section-heading">
          The Empathy <em className="holographic-text" style={{ fontStyle: "italic" }}>Privilege Club</em>
        </h2>
        <p className="body-text mt-4 max-w-xl mx-auto">
          Every visit rewards you. Unlock exclusive perks, complimentary treatments, and VIP experiences as you rise through our membership tiers. No signup required — membership is automatic.
        </p>
      </ScrollReveal>

      {/* Quick benefits row */}
      <ScrollReveal direction="up" delay={0.05} className="mb-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="text-center p-4 rounded-xl bg-card/30 border border-primary/8 hover:border-primary/20 transition-all group"
            >
              <b.icon size={20} className="text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium text-foreground/80">{b.label}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {tiers.map((tier, i) => (
          <ScrollReveal key={i} direction="up" delay={i * 0.15}>
            <Tilt3DCard className="h-full" maxTilt={8}>
              <div className={`relative p-6 bg-card/50 backdrop-blur-sm border ${tier.borderColor} rounded-2xl overflow-hidden h-full depth-shadow group hover:border-primary/40 transition-all duration-500`}>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `radial-gradient(ellipse at center, ${tier.glowColor}, transparent 70%)` }}
                />

                {tier.popular && (
                  <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground text-[8px] font-sans uppercase tracking-[0.15em] px-2.5 py-1 rounded-full shadow-[0_0_12px_hsl(38,45%,60%,0.3)]">
                    Most Popular
                  </div>
                )}

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <tier.icon size={24} className="text-background" />
                  </motion.div>

                  <h3 className="card-heading mb-1">{tier.name}</h3>
                  <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground mb-5">
                    {tier.threshold}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {tier.perks.map((perk, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.05 }}
                        className="flex items-center gap-2.5 text-sm text-foreground/80"
                      >
                        <Sparkles size={12} className="text-primary shrink-0" />
                        {perk}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </Tilt3DCard>
          </ScrollReveal>
        ))}
      </div>

      {/* CTA */}
      <ScrollReveal direction="up" delay={0.4} className="text-center mt-14">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Link
            to="/contact"
            className="gold-shimmer text-primary-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 shadow-[0_8px_30px_hsl(38,45%,60%,0.25)]"
          >
            Join the Privilege Club <ArrowRight size={16} />
          </Link>
        </motion.div>
        <p className="body-text text-xs mt-3">
          Membership is automatic. Start earning rewards from your very first visit.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default LoyaltyTeaser;
