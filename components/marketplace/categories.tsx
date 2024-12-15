"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function Categories({ selectedCategory, onCategoryChange }: CategoriesProps) {
  return (
    <Tabs defaultValue={selectedCategory} className="mb-12">
      <TabsList className="grid w-full grid-cols-4 lg:w-[400px] mx-auto">
        <TabsTrigger 
          value="all" 
          onClick={() => onCategoryChange("all")}
        >
          All
        </TabsTrigger>
        <TabsTrigger 
          value="art" 
          onClick={() => onCategoryChange("art")}
        >
          Art
        </TabsTrigger>
        <TabsTrigger 
          value="gaming" 
          onClick={() => onCategoryChange("gaming")}
        >
          Gaming
        </TabsTrigger>
        <TabsTrigger 
          value="photography" 
          onClick={() => onCategoryChange("photography")}
        >
          Photography
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}