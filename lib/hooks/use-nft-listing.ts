"use client";

import { useState } from 'react';
import { NFT } from '@/types/nft';
import { Category } from '@/types/marketplace';

interface NFTListingState {
  searchTerm: string;
  selectedCategory: Category;
}

export function useNFTListing(nfts: NFT[]) {
  const [state, setState] = useState<NFTListingState>({
    searchTerm: "",
    selectedCategory: "all"
  });

  const setSearchTerm = (searchTerm: string) => {
    setState(prev => ({ ...prev, searchTerm }));
  };

  const setSelectedCategory = (selectedCategory: Category) => {
    setState(prev => ({ ...prev, selectedCategory }));
  };

  const filteredNFTs = nfts.filter(nft => {
    const matchesSearch = nft.name.toLowerCase().includes(state.searchTerm.toLowerCase());
    const matchesCategory = state.selectedCategory === "all" || nft.category === state.selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return {
    searchTerm: state.searchTerm,
    selectedCategory: state.selectedCategory,
    filteredNFTs,
    setSearchTerm,
    setSelectedCategory,
  };
}