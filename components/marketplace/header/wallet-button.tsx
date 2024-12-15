"use client";

import { Button } from "@/components/ui/button";
import { useWallet } from "@/lib/hooks/use-wallet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { WalletIcon, LogOutIcon, CopyIcon, ExternalLinkIcon } from "lucide-react";
import { useState } from "react";
import { formatAddress, formatEther } from "@/lib/utils/format";

export function WalletButton() {
  const { isConnected, address, balance, connectWallet, disconnectWallet } = useWallet();
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    if (address) {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const openEtherscan = () => {
    if (address) {
      window.open(`https://etherscan.io/address/${address}`, '_blank');
    }
  };

  if (!isConnected) {
    return (
      <Button 
        variant="outline" 
        className="gap-2" 
        onClick={connectWallet}
      >
        <WalletIcon className="w-4 h-4" />
        Connect Wallet
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <WalletIcon className="w-4 h-4" />
          {formatAddress(address)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="p-2">
          <p className="text-sm font-medium">Balance</p>
          <p className="text-xs text-muted-foreground">
            {balance ? formatEther(parseFloat(balance)) : '0.0000 ETH'}
          </p>
        </div>
        <DropdownMenuItem className="gap-2 cursor-pointer" onClick={copyAddress}>
          <CopyIcon className="w-4 h-4" />
          {copied ? "Copied!" : "Copy Address"}
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2 cursor-pointer" onClick={openEtherscan}>
          <ExternalLinkIcon className="w-4 h-4" />
          View on Etherscan
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2 cursor-pointer text-destructive" onClick={disconnectWallet}>
          <LogOutIcon className="w-4 h-4" />
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}