"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNFTPurchase } from "@/lib/hooks/use-nft-purchase";
import { useWallet } from "@/lib/hooks/use-wallet";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface BuyButtonProps {
  tokenId: string;
  name: string;
  price: number;
}

export function BuyButton({ tokenId, name, price }: BuyButtonProps) {
  const { isConnected, connectWallet } = useWallet();
  const { isPending, error, purchaseNFT } = useNFTPurchase();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const { toast } = useToast();

  const handlePurchase = async () => {
    if (!isConnected) {
      await connectWallet();
      return;
    }
    setShowConfirmDialog(true);
  };

  const handleConfirmPurchase = async () => {
    try {
      const transaction = await purchaseNFT(tokenId, price);
      setShowConfirmDialog(false);
      
      if (transaction) {
        toast({
          title: "Purchase successful!",
          description: `You have successfully purchased ${name}`,
        });
      }
    } catch (err) {
      toast({
        title: "Purchase failed",
        description: error || "Failed to complete the purchase",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Button 
        className="w-full" 
        onClick={handlePurchase}
        disabled={isPending}
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          'Buy Now'
        )}
      </Button>

      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Purchase</DialogTitle>
            <DialogDescription>
              You are about to purchase {name} for {price} ETH
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Please confirm the transaction in your wallet after clicking confirm.
            </p>
            {error && (
              <p className="text-sm text-destructive">
                {error}
              </p>
            )}
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowConfirmDialog(false)}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirmPurchase}
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Confirming...
                </>
              ) : (
                'Confirm Purchase'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}