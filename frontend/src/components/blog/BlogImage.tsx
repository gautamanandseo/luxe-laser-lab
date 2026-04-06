import type { ImgHTMLAttributes } from "react";

interface BlogImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  src?: string;
  alt: string;
  category?: string;
}

const categoryFallbacks: Record<string, string> = {
  "Laser Hair Removal": "/images/blog-fallback-laser.jpg",
  CoolSculpting: "/images/blog-fallback-cool.jpg",
  "Weight Loss": "/images/blog-fallback-cool.jpg",
  Skincare: "/images/blog-fallback-skin.jpg",
  "Botox & Fillers": "/images/blog-fallback-botox.jpg",
  Bridal: "/images/blog-fallback-bridal.jpg",
  "Anti-Aging": "/images/blog-fallback-botox.jpg",
  "Hair Treatments": "/images/blog-fallback-salon.jpg",
  Acne: "/images/blog-fallback-skin.jpg",
  "Body Contouring": "/images/blog-fallback-cool.jpg",
  Guides: "/images/blog-fallback-skin.jpg",
};

const DEFAULT_FALLBACK = "/images/blog-fallback-skin.jpg";

const BlogImage = ({ src, alt, category, loading = "lazy", ...props }: BlogImageProps) => {
  const fallback = category ? categoryFallbacks[category] || DEFAULT_FALLBACK : DEFAULT_FALLBACK;
  const imgSrc = src || fallback;

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading={loading}
      decoding="async"
      onError={(e) => {
        const target = e.currentTarget;
        if (target.src !== fallback) {
          target.src = fallback;
        }
      }}
      {...props}
    />
  );
};

export default BlogImage;
