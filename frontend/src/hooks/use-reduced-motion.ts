import { useMemo } from "react";

/**
 * Detects if the device is low-end and should use reduced/simplified animations.
 * Checks: OS-level prefers-reduced-motion, hardware concurrency, device memory, and screen width.
 */
export function useReducedMotion(): boolean {
  return useMemo(() => {
    if (typeof window === "undefined") return false;

    // Respect OS-level reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;

    const nav = navigator as Navigator & { deviceMemory?: number; hardwareConcurrency?: number };

    // Low CPU cores
    if (nav.hardwareConcurrency && nav.hardwareConcurrency <= 4) return true;

    // Low device memory (Chrome-only API)
    if (nav.deviceMemory && nav.deviceMemory <= 2) return true;

    // Small screen likely = mobile
    if (window.innerWidth <= 768) return true;

    return false;
  }, []);
}

/**
 * Quick non-hook check for use outside React components (e.g. canvas loops).
 */
export function isLowEndDevice(): boolean {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
  const nav = navigator as Navigator & { deviceMemory?: number; hardwareConcurrency?: number };
  if (nav.hardwareConcurrency && nav.hardwareConcurrency <= 4) return true;
  if (nav.deviceMemory && nav.deviceMemory <= 2) return true;
  if (window.innerWidth <= 768) return true;
  return false;
}
