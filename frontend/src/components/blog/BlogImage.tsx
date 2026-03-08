import heroLaser from "@/assets/hero-laser-new.jpg";
import heroCool from "@/assets/hero-cool-new.jpg";
import heroSkin from "@/assets/hero-skin-new.jpg";
import heroBotox from "@/assets/hero-botox-new.jpg";
import heroBridal from "@/assets/hero-bridal-new.jpg";
import heroSalon from "@/assets/hero-salon-new.jpg";

import type { ImgHTMLAttributes } from "react";

interface BlogImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  src?: string;
  alt: string;
  category?: string;
}

const categoryFallbacks: Record<string, string> = {
  "Laser Hair Removal": heroLaser,
  CoolSculpting: heroCool,
  "Weight Loss": heroCool,
  Skincare: heroSkin,
  "Botox & Fillers": heroBotox,
  Bridal: heroBridal,
  "Anti-Aging": heroBotox,
  "Hair Treatments": heroSalon,
  Acne: heroSkin,
  "Body Contouring": heroCool,
  Guides: heroSkin,
};

const BlogImage = ({ src, alt, category, loading = "lazy", ...props }: BlogImageProps) => {
  const fallback = categoryFallbacks[category || ""] || heroSkin;

  return (
    <img
      {...props}
      src={src || fallback}
      alt={alt}
      loading={loading}
      onError={(event) => {
        const target = event.currentTarget;

        if (target.dataset.fallbackApplied === "true") return;

        target.dataset.fallbackApplied = "true";
        target.src = fallback;
      }}
    />
  );
};

export default BlogImage;
