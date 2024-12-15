"use client";

import { useState, useCallback } from 'react';

export interface WalletState {
  isConnected: boolean;
  address: string | null;
  balance: string | null;
}

export function useWallet() {
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
    address: null,
    balance: null,
  });

  const connectWallet = useCallback(async () => {
    if (typeof window.ethereum === 'undefined') {
      alert('Please install MetaMask to connect your wallet');
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      const balance = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [accounts[0], 'latest'],
      });

      setWalletState({
        isConnected: true,
        address: accounts[0],
        balance: (parseInt(balance, 16) / 1e18).toFixed(4),
      });
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  }, []);

  const disconnectWallet = useCallback(() => {
    setWalletState({
      isConnected: false,
      address: null,
      balance: null,
    });
  }, []);

  return {
    ...walletState,
    connectWallet,
    disconnectWallet,
  };
}