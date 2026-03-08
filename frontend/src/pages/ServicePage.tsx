import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Phone, ChevronDown, Star, Quote, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { servicesData } from "@/data/serviceData";

// AI-generated hero images
import heroLaserGen from "@/assets/hero-laser-gen.jpg";
import heroCoolGen from "@/assets/hero-coolsculpting-gen.jpg";
import heroSkinGen from "@/assets/hero-skin-gen.jpg";
import heroBotoxGen from "@/assets/hero-botox-gen.jpg";
import heroBridalGen from "@/assets/hero-bridal-gen.jpg";
import heroSpaGen from "@/assets/hero-spa-gen.jpg";
import heroSalonGen from "@/assets/hero-salon-gen.jpg";
import heroMicrodermGen from "@/assets/hero-microderm-gen.jpg";
import heroResurfxGen from "@/assets/hero-resurfx-gen.jpg";

// AI-generated service images
import serviceLaserGen from "@/assets/service-laser-gen.jpg";
import serviceCoolGen from "@/assets/service-cool-gen.jpg";
import serviceSkinGen from "@/assets/service-skin-gen.jpg";
import serviceBotoxGen from "@/assets/service-botox-gen.jpg";
import serviceBridalGen from "@/assets/service-bridal-gen.jpg";
import serviceSpaGen from "@/assets/service-spa-gen.jpg";
import serviceSalonGen from "@/assets/service-salon-gen.jpg";
import serviceMicrodermGen from "@/assets/service-microderm-gen.jpg";
import serviceResurfxGen from "@/assets/service-resurfx-gen.jpg";

const heroImages: Record<string, string> = {
  laser: heroLaserGen,
  coolsculpting: heroCoolGen,
  skin: heroSkinGen,
  botox: heroBotoxGen,
  bridal: heroBridalGen,
  spa: heroSpaGen,
  salon: heroSalonGen,
  microdermabrasion: heroMicrodermGen,
  resurfx: heroResurfxGen,
};

const serviceImages: Record<string, string> = {
  laser: serviceLaserGen,
  coolsculpting: serviceCoolGen,
  skin: serviceSkinGen,
  botox: serviceBotoxGen,
  bridal: serviceBridalGen,
  spa: serviceSpaGen,
  salon: serviceSalonGen,
  microdermabrasion: serviceMicrodermGen,
  resurfx: serviceResurfxGen,
};

interface ServicePageProps {
  service: string;
}

const ServicePage = ({ service }: ServicePageProps) => {
  const data = servicesData[service];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!data) return null;

  const heroImg = heroImages[service] || data.heroImage;
  const secondaryImg = serviceImages[service] || data.secondaryImage;
  const processImg = heroImages[service] || data.processImage;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt={data.title + " " + data.accent}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${data.heroOverlay}`} />
          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
                <data.icon size={14} className="text-primary" />
                <span className="text-xs font-sans uppercase tracking-[0.2em] text-primary">{data.badge}</span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-[0.95] mb-2">
                {data.title}
              </h1>
              <h1 className="font-serif text-5xl md:text-7xl italic text-primary leading-[0.95] mb-6">
                {data.accent}
              </h1>

              {/* Subtitle */}
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-foreground/60 mb-6">
                {data.subtitle}
              </p>

              {/* Description */}
              <p className="text-foreground/80 text-lg max-w-xl mb-8 leading-relaxed">
                {data.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="gold-shimmer text-primary-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  Book Free Consultation <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:+919811157787"
                  className="border border-foreground/30 backdrop-blur-sm text-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:border-primary hover:text-primary transition-colors"
                >
                  <Phone size={16} /> Call Now
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-4 mt-12 pt-8 border-t border-foreground/10">
                {data.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-center"
                  >
                    <p className="font-serif text-2xl md:text-3xl text-primary">{stat.value}</p>
                    <p className="text-xs uppercase tracking-[0.15em] text-foreground/60 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hero Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-foreground/10 shadow-2xl">
                  <img
                    src={secondaryImg}
                    alt={data.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-md border border-border rounded-xl p-6 shadow-xl max-w-xs">
                  <p className="font-serif text-lg text-primary mb-1">Free Consultation</p>
                  <p className="text-sm text-muted-foreground">Book to get a personalized quote</p>
                </div>
                {/* Decorative frame */}
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="eyebrow mb-4">About This Treatment</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                Why Choose <em className="text-primary">{data.title} {data.accent}</em>?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {data.longDescription}
              </p>
              <ul className="space-y-3">
                {data.whyChooseUs.slice(0, 4).map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-foreground/80"
                  >
                    <Check size={18} className="text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={processImg}
                  alt={`${data.title} treatment`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-primary/40" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-primary/40" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Benefits</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Why Clients <em className="text-primary">Love</em> This Treatment
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">How It Works</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Your Journey to <em className="text-primary">Results</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {data.processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                {/* Connector line */}
                {i < data.processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gradient-to-r from-primary/40 to-transparent" />
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
                    <span className="font-serif text-xl text-primary-foreground">{step.number}</span>
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Areas Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Treatment Options</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
                Areas We <em className="text-primary">Treat</em>
              </h2>
              
              <div className="space-y-4">
                {data.treatmentAreas.map((area, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-5 bg-card rounded-xl border border-border hover:border-primary/40 transition-all group"
                  >
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{area.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{area.description}</p>
                    </div>
                    {area.duration && (
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full whitespace-nowrap">
                        {area.duration}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {data.galleryImages.map((img, i) => (
                <div
                  key={i}
                  className={`rounded-xl overflow-hidden ${i === 0 ? 'col-span-2 aspect-video' : 'aspect-square'}`}
                >
                  <img
                    src={img}
                    alt={`${data.title} gallery ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      {data.comparison && data.comparison.length > 0 && (
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="eyebrow mb-4">Compare Methods</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                How It <em className="text-primary">Compares</em>
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-sm uppercase tracking-wider text-muted-foreground font-sans">Method</th>
                    <th className="text-left py-4 px-4 text-sm uppercase tracking-wider text-muted-foreground font-sans">Duration</th>
                    <th className="text-left py-4 px-4 text-sm uppercase tracking-wider text-muted-foreground font-sans">Pain Level</th>
                    <th className="text-left py-4 px-4 text-sm uppercase tracking-wider text-muted-foreground font-sans">Results</th>
                    <th className="text-left py-4 px-4 text-sm uppercase tracking-wider text-muted-foreground font-sans">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {data.comparison.map((item, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`border-b border-border ${item.recommended ? 'bg-primary/5' : ''}`}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          {item.recommended && <div className="w-2 h-2 rounded-full bg-primary" />}
                          <span className={`font-semibold ${item.recommended ? 'text-primary' : 'text-foreground'}`}>{item.method}</span>
                          {item.recommended && <span className="text-[10px] bg-primary text-primary-foreground px-2 py-0.5 rounded-full uppercase">Recommended</span>}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">{item.duration}</td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">{item.pain}</td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">{item.results}</td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">{item.cost}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Detailed Sections */}
      {data.detailedSections && data.detailedSections.length > 0 && (
        <section className={`py-24 ${data.comparison ? 'bg-background' : 'bg-secondary'}`}>
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-16">
              {data.detailedSections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Info size={24} className="text-primary flex-shrink-0 mt-1" />
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground">{section.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-10">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Packages Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Our Packages</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Investment in <em className="text-primary">Yourself</em>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Every treatment is customized to your needs. Contact us for a personalized quote tailored to your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {data.pricing.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative p-8 rounded-2xl border ${
                  tier.popular
                    ? 'bg-card border-primary shadow-xl shadow-primary/10'
                    : 'bg-card border-border'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <h3 className="font-serif text-2xl text-foreground mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                
                <div className="mb-6">
                  <span className="font-serif text-lg text-primary uppercase tracking-wider">Ask for Quote</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-foreground/80">
                      <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3.5 rounded-full text-sm font-sans uppercase tracking-[0.1em] inline-flex items-center justify-center gap-2 transition-all ${
                    tier.popular
                      ? 'gold-shimmer text-primary-foreground hover:scale-105'
                      : 'border border-border text-foreground hover:border-primary hover:text-primary'
                  }`}
                >
                  Get Quote <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Success Stories</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              What Our <em className="text-primary">Clients</em> Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-card rounded-2xl border border-border relative"
              >
                <Quote size={40} className="text-primary/10 absolute top-6 right-6" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-primary fill-primary" />
                  ))}
                </div>

                <p className="text-foreground/80 mb-6 italic leading-relaxed">"{testimonial.text}"</p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="font-serif text-primary text-lg">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.treatment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="eyebrow mb-4">Common Questions</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                Frequently Asked <em className="text-primary">Questions</em>
              </h2>
              <p className="text-muted-foreground mb-8">
                Have questions? We've got answers. If you don't find what you're looking for, feel free to contact us.
              </p>
              <Link
                to="/contact"
                className="border border-border text-foreground px-6 py-3 text-sm font-sans uppercase tracking-[0.1em] rounded-full inline-flex items-center gap-2 hover:border-primary hover:text-primary transition-colors"
              >
                Contact Us <ArrowRight size={14} />
              </Link>
            </div>

            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-border rounded-xl overflow-hidden bg-card"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                  >
                    <span className="font-medium text-foreground pr-4">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`text-primary flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/80" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-6xl text-primary-foreground mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Book your free consultation today and take the first step towards {data.tagline.toLowerCase()}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary-foreground text-primary px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
              >
                Book Free Consultation <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+919811157787"
                className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all"
              >
                <Phone size={16} /> Call 9811157787
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
