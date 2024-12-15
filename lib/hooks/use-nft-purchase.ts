"use client";

import { useState } from 'react';
import { useWallet } from './use-wallet';

interface PurchaseState {
  isPending: boolean;
  error: string | null;
}

export function useNFTPurchase() {
  const { isConnected, address } = useWallet();
  const [purchaseState, setPurchaseState] = useState<PurchaseState>({
    isPending: false,
    error: null,
  });

  const purchaseNFT = async (tokenId: string, price: number) => {
    if (!isConnected) {
      setPurchaseState({ isPending: false, error: 'Please connect your wallet first' });
      return;
    }

    setPurchaseState({ isPending: true, error: null });

    try {
      // Convert price to Wei (1 ETH = 10^18 Wei)
      const priceInWei = BigInt(price * 1e18).toString(16);

      const transaction = await window.ethereum?.request({
        method: 'eth_sendTransaction',
        params: [{
          from: address,
          // In a real app, this would be the NFT contract address
          to: '0x1234567890123456789012345678901234567890',
          value: '0x' + priceInWei,
          data: '0x' // Contract interaction data would go here
        }],
      });

      setPurchaseState({ isPending: false, error: null });
      return transaction;
    } catch (error) {
      setPurchaseState({ 
        isPending: false, 
        error: error instanceof Error ? error.message : 'Failed to purchase NFT' 
      });
    }
  };

  return {
    ...purchaseState,
    purchaseNFT,
  };
}