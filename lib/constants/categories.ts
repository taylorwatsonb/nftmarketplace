import { CategoryOption } from "@/types/marketplace";

export const CATEGORIES: CategoryOption[] = [
  { value: "all", label: "All" },
  { value: "art", label: "Art" },
  { value: "gaming", label: "Gaming" },
  { value: "photography", label: "Photography" },
] as const;