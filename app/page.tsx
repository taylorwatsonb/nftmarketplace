"use client";

import { MOCK_NFTS } from "@/data/mock-nfts";
import { MarketplaceContainer } from "@/components/marketplace/layout/marketplace-container";
import { MarketplaceHeader } from "@/components/marketplace/header";
import { CategoryTabs } from "@/components/marketplace/categories/category-tabs";
import { NFTGrid } from "@/components/marketplace/nft-grid";
import { StatsSection } from "@/components/marketplace/stats-section";
import { useNFTListing } from "@/lib/hooks/use-nft-listing";

export default function Home() {
  const {
    searchTerm,
    selectedCategory,
    filteredNFTs,
    setSearchTerm,
    setSelectedCategory,
  } = useNFTListing(MOCK_NFTS);

  return (
    <MarketplaceContainer>
      <MarketplaceHeader
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      <CategoryTabs
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <NFTGrid nfts={filteredNFTs} />

      <StatsSection />
    </MarketplaceContainer>
  );
}