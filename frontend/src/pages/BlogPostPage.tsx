import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Calendar, Tag, User } from "lucide-react";
import { blogPosts } from "@/data/blogData";
import { servicesData } from "@/data/serviceData";
import BlogImage from "@/components/blog/BlogImage";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .slice(0, 3);

  const serviceRoutes: Record<string, string> = {
    laser: "/laser-hair-removal",
    coolsculpting: "/coolsculpting",
    skin: "/skin-treatments",
    resurfx: "/resurfx",
    botox: "/botox-fillers",
    microdermabrasion: "/microdermabrasion",
    bridal: "/bridal-packages",
    spa: "/spa-services",
    salon: "/salon-services",
  };

  // Simple markdown-like renderer
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let inTable = false;
    let tableRows: string[][] = [];
    let tableKey = 0;

    const flushTable = () => {
      if (tableRows.length > 0) {
        elements.push(
          <div key={`table-${tableKey++}`} className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-primary/10">
                  {tableRows[0].map((cell, j) => (
                    <th key={j} className="px-4 py-3 text-left text-foreground font-semibold border-b border-border">
                      {cell.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(2).map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-secondary"}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3 text-muted-foreground border-b border-border">
                        {cell.trim()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
      }
      inTable = false;
    };

    lines.forEach((line, i) => {
      // Table detection
      if (line.trim().startsWith("|")) {
        inTable = true;
        const cells = line.split("|").filter(Boolean);
        tableRows.push(cells);
        return;
      } else if (inTable) {
        flushTable();
      }

      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={i} className="font-serif text-3xl text-foreground mt-10 mb-4">
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={i} className="font-serif text-2xl text-foreground mt-8 mb-3">
            {line.replace("### ", "")}
          </h3>
        );
      } else if (line.startsWith("- ✅") || line.startsWith("- ❌")) {
        elements.push(
          <li key={i} className="flex items-start gap-2 text-muted-foreground mb-2 ml-4">
            <span>{line.startsWith("- ✅") ? "✅" : "❌"}</span>
            <span>{line.replace(/^- [✅❌] /, "")}</span>
          </li>
        );
      } else if (line.startsWith("- **")) {
        const match = line.match(/^- \*\*(.+?)\*\*\s*[—–-]?\s*(.*)/);
        if (match) {
          elements.push(
            <li key={i} className="flex items-start gap-2 text-muted-foreground mb-2 ml-4">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-foreground">{match[1]}</strong> {match[2] ? `— ${match[2]}` : ""}</span>
            </li>
          );
        }
      } else if (line.startsWith("- ")) {
        elements.push(
          <li key={i} className="flex items-start gap-2 text-muted-foreground mb-2 ml-4">
            <span className="text-primary mt-1">•</span>
            <span>{line.replace("- ", "")}</span>
          </li>
        );
      } else if (line.match(/^\d+\.\s/)) {
        elements.push(
          <li key={i} className="flex items-start gap-3 text-muted-foreground mb-2 ml-4">
            <span className="font-serif text-primary font-semibold">{line.match(/^(\d+)\./)?.[1]}.</span>
            <span dangerouslySetInnerHTML={{ __html: line.replace(/^\d+\.\s/, "").replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
          </li>
        );
      } else if (line.startsWith("**") && line.endsWith("**")) {
        elements.push(
          <p key={i} className="text-foreground font-semibold my-4 text-lg">
            {line.replace(/\*\*/g, "")}
          </p>
        );
      } else if (line.trim() === "") {
        // skip empty lines
      } else {
        elements.push(
          <p
            key={i}
            className="text-muted-foreground leading-relaxed mb-4"
            dangerouslySetInnerHTML={{
              __html: line
                .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                .replace(/\*(.+?)\*/g, '<em>$1</em>')
            }}
          />
        );
      }
    });

    if (inTable) flushTable();

    return elements;
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative">
        <div className="aspect-[21/9] md:aspect-[3/1] overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-6 pb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link to="/blog" className="text-primary text-sm flex items-center gap-2 mb-4 hover:underline">
                <ArrowLeft size={14} /> Back to Blog
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">{post.category}</span>
                <span className="text-xs text-foreground/60 flex items-center gap-1">
                  <Clock size={12} /> {post.readTime}
                </span>
              </div>
              <h1 className="font-serif text-3xl md:text-5xl text-foreground max-w-4xl leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 mt-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <User size={14} /> {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />{" "}
                  {new Date(post.date).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* Article Body */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl"
            >
              {renderContent(post.content)}

              {/* CTA */}
              <div className="mt-12 p-8 bg-primary/10 rounded-2xl border border-primary/20">
                <h3 className="font-serif text-2xl text-foreground mb-3">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Book a free consultation at Empathy Laser Clinic and let our experts create a personalized treatment plan for you.
                </p>
                <Link
                  to="/contact"
                  className="gold-shimmer text-primary-foreground px-6 py-3 rounded-full text-sm font-sans uppercase tracking-wider inline-flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  Book Free Consultation <ArrowRight size={14} />
                </Link>
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-card border border-border px-3 py-1.5 rounded-full text-muted-foreground flex items-center gap-1"
                  >
                    <Tag size={10} /> {tag}
                  </span>
                ))}
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Related Services */}
              {post.relatedServices.length > 0 && (
                <div className="bg-card rounded-2xl border border-border p-6">
                  <h4 className="font-serif text-lg text-foreground mb-4">Related Services</h4>
                  <div className="space-y-3">
                    {post.relatedServices.map((svc) => {
                      const data = servicesData[svc];
                      if (!data) return null;
                      return (
                        <Link
                          key={svc}
                          to={serviceRoutes[svc] || "#"}
                          className="block p-3 bg-secondary rounded-lg hover:bg-primary/10 transition-colors group"
                        >
                          <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                            {data.title} {data.accent}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{data.tagline}</p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Quick Contact */}
              <div className="bg-primary/10 rounded-2xl border border-primary/20 p-6">
                <h4 className="font-serif text-lg text-foreground mb-3">Free Consultation</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Have questions? Get personalized advice from our experts.
                </p>
                <Link
                  to="/contact"
                  className="block text-center bg-primary text-primary-foreground py-2.5 rounded-full text-sm hover:shadow-lg hover:shadow-primary/30 transition-all"
                >
                  Book Now
                </Link>
                <a
                  href="tel:+919811157787"
                  className="block text-center text-primary text-sm mt-3 hover:underline"
                >
                  Or call: 9811157787
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-3xl text-foreground mb-8">
              Related <em className="text-primary">Articles</em>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link key={related.id} to={`/blog/${related.slug}`} className="group">
                  <article className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/40 transition-all">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full">{related.category}</span>
                      <h3 className="font-serif text-lg text-foreground mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock size={12} /> {related.readTime}
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPostPage;
