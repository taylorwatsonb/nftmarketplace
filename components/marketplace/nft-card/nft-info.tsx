interface NFTInfoProps {
  creator: string;
  price: number;
}

export function NFTInfo({ creator, price }: NFTInfoProps) {
  return (
    <>
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">Creator</span>
        <span className="text-sm font-medium">{creator}</span>
      </div>
      <div className="mt-2">
        <span className="text-sm text-muted-foreground">Price</span>
        <p className="font-bold">{price} ETH</p>
      </div>
    </>
  );
}