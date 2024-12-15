import { NFT } from "@/types/nft";
import { NFTCard } from "../nft-card";

interface NFTGridProps {
  nfts: NFT[];
}

export function NFTGrid({ nfts }: NFTGridProps) {
  if (nfts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No NFTs found matching your criteria</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {nfts.map((nft) => (
        <NFTCard key={nft.id} nft={nft} />
      ))}
    </div>
  );
}