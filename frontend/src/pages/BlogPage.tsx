import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Search } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blogData";
import BlogImage from "@/components/blog/BlogImage";
import AuroraMesh from "@/components/effects/AuroraMesh";
import Tilt3DCard from "@/components/effects/Tilt3DCard";
import GlowDivider from "@/components/effects/GlowDivider";
import ParticleField from "@/components/effects/ParticleField";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredPost = blogPosts[0];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-secondary relative overflow-hidden scanlines">
        <AuroraMesh intensity="subtle" />
        <ParticleField count={12} className="opacity-20" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow mb-4">Knowledge & Insights</p>
            <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-4">
              The Empathy <em className="holographic-text" style={{ fontStyle: "italic" }}>Blog</em>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Expert articles on skincare, laser treatments, body contouring, and wellness — written for the Indian context by our clinical team.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary depth-shadow"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <GlowDivider variant="gold" />

      {/* Featured Article */}
      <section className="py-16 bg-background relative overflow-hidden">
        <AuroraMesh intensity="subtle" />
        <div className="relative z-10 container mx-auto px-6">
          <Link to={`/blog/${featuredPost.slug}`} className="group">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/10 overflow-hidden hover:border-primary/40 transition-all depth-shadow"
            >
              <div className="aspect-video lg:aspect-auto overflow-hidden">
                <BlogImage src={featuredPost.image} category={featuredPost.category} alt={featuredPost.title} loading="eager" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full uppercase tracking-wider">Featured</span>
                  <span className="text-xs text-muted-foreground">{featuredPost.category}</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 group-hover:text-primary transition-colors">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock size={14} /> {featuredPost.readTime}</span>
                  <span>{new Date(featuredPost.date).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}</span>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-4 bg-background border-b border-primary/10 sticky top-16 z-30 backdrop-blur-xl bg-background/80">
        <div className="container mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {blogCategories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_hsl(38,45%,60%,0.3)]"
                    : "bg-card/50 border border-primary/10 text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="relative z-10 container mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              <button onClick={() => { setActiveCategory("All"); setSearchQuery(""); }} className="mt-4 text-primary hover:underline">Clear filters</button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, i) => (
                <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <Tilt3DCard maxTilt={6} className="h-full">
                    <Link to={`/blog/${post.slug}`} className="group block h-full">
                      <article className="bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/10 overflow-hidden hover:border-primary/40 transition-all h-full flex flex-col depth-shadow relative shimmer-sweep">
                        <div className="aspect-video overflow-hidden">
                          <BlogImage src={post.image} category={post.category} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-6 flex flex-col flex-1 relative z-10">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full">{post.category}</span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                          </div>
                          <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}</span>
                            <span className="text-sm text-primary flex items-center gap-1 group-hover:gap-2 transition-all">Read More <ArrowRight size={14} /></span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </Tilt3DCard>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <GlowDivider variant="multi" />

      {/* Newsletter CTA */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <AuroraMesh intensity="medium" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="eyebrow mb-4">Stay Updated</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Get Expert <em className="holographic-text" style={{ fontStyle: "italic" }}>Insights</em> Delivered
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of readers who get our latest articles on skincare, treatments, and wellness tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="gold-shimmer text-primary-foreground px-6 py-3 rounded-full text-sm font-sans uppercase tracking-wider shadow-[0_0_20px_hsl(38,45%,60%,0.25)]">
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
