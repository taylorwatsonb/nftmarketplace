"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WalletIcon } from "lucide-react";

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function MarketplaceHeader({ searchTerm, onSearchChange }: HeaderProps) {
  return (
    <div className="flex flex-col items-center mb-12 space-y-4">
      <h1 className="text-4xl font-bold text-center">NFT Marketplace</h1>
      <p className="text-muted-foreground text-center max-w-2xl">
        Discover, collect, and sell extraordinary NFTs from creators worldwide
      </p>
      <div className="flex items-center gap-4">
        <Button variant="outline" className="gap-2">
          <WalletIcon className="w-4 h-4" />
          Connect Wallet
        </Button>
        <Input
          placeholder="Search NFTs..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-64"
        />
      </div>
    </div>
  );
}