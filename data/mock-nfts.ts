import { NFT } from "@/types/nft";

export const MOCK_NFTS: NFT[] = [
  {
    id: "1",
    name: "Cosmic Dreamer #1",
    image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=500&h=500&fit=crop",
    price: 0.5,
    creator: "0x1234...5678",
    category: "art"
  },
  {
    id: "2",
    name: "Digital Warrior",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=500&fit=crop",
    price: 1.2,
    creator: "0x8765...4321",
    category: "gaming"
  },
  {
    id: "3",
    name: "Abstract Thoughts",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=500&h=500&fit=crop",
    price: 0.8,
    creator: "0x2468...1357",
    category: "art"
  },
  {
    id: "4",
    name: "Cyber Punk City",
    image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=500&h=500&fit=crop",
    price: 2.5,
    creator: "0x1357...2468",
    category: "photography"
  }
] as const;