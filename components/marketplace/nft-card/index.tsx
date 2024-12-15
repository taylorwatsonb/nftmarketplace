import { NFT } from "@/types/nft";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { NFTImage } from "./nft-image";
import { NFTInfo } from "./nft-info";
import { BuyButton } from "./buy-button";

interface NFTCardProps {
  nft: NFT;
}

export function NFTCard({ nft }: NFTCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <NFTImage src={nft.image} alt={nft.name} />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2">{nft.name}</CardTitle>
        <NFTInfo creator={nft.creator} price={nft.price} />
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <BuyButton
          tokenId={nft.id}
          name={nft.name}
          price={nft.price}
        />
      </CardFooter>
    </Card>
  );
}