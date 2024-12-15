import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CATEGORIES } from "@/lib/constants/categories";
import { Category } from "@/types/marketplace";

interface CategoryTabsProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export function CategoryTabs({ selectedCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <Tabs defaultValue={selectedCategory} className="mb-12">
      <TabsList className="grid w-full grid-cols-4 lg:w-[400px] mx-auto">
        {CATEGORIES.map(({ value, label }) => (
          <TabsTrigger
            key={value}
            value={value}
            onClick={() => onCategoryChange(value)}
          >
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}