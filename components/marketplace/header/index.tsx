"use client";

import { SearchInput } from "./search-input";
import { WalletButton } from "./wallet-button";
import { ThemeToggle } from "@/components/theme-toggle";

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function MarketplaceHeader({ searchTerm, onSearchChange }: HeaderProps) {
  return (
    <div className="flex flex-col items-center mb-12 space-y-4">
      <div className="w-full flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <h1 className="text-4xl font-bold text-center">NFT Marketplace</h1>
      <p className="text-muted-foreground text-center max-w-2xl">
        Discover, collect, and sell extraordinary NFTs from creators worldwide
      </p>
      <div className="flex items-center gap-4">
        <WalletButton />
        <SearchInput value={searchTerm} onChange={onSearchChange} />
      </div>
    </div>
  );
}