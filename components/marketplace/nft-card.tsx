import { NFT } from "@/types/nft";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface NFTCardProps {
  nft: NFT;
}

export function NFTCard({ nft }: NFTCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <img
          src={nft.image}
          alt={nft.name}
          className="w-full h-64 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2">{nft.name}</CardTitle>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Creator</span>
          <span className="text-sm font-medium">{nft.creator}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div>
          <span className="text-sm text-muted-foreground">Price</span>
          <p className="font-bold">{nft.price} ETH</p>
        </div>
        <Button>Buy Now</Button>
      </CardFooter>
    </Card>
  );
}