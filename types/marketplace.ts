import { type LucideIcon } from "lucide-react";

export type Category = "all" | "art" | "gaming" | "photography";

export interface MarketplaceStats {
  id: string;
  title: string;
  value: string;
  subtitle: string;
  iconType: keyof typeof import("@/lib/utils/icon-map").iconMap;
}

export interface CategoryOption {
  value: Category;
  label: string;
}