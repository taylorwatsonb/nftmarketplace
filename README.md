# NFT Marketplace

A modern, user-friendly NFT marketplace built with Next.js, TypeScript, and Tailwind CSS. This platform enables users to discover, browse, and purchase NFTs in a secure and intuitive environment.



## Features

- 🎨 **Browse NFTs**: Explore a curated collection of digital art, gaming assets, and photography NFTs
- 🔍 **Search & Filter**: Find NFTs by name or category
- 👛 **Wallet Integration**: Connect your MetaMask wallet seamlessly
- 💳 **Secure Transactions**: Purchase NFTs with a streamlined buying process
- 📊 **Market Statistics**: View real-time trading volume and sales data
- 🌓 **Responsive Design**: Optimized for all devices and screen sizes

## Tech Stack

- **Frontend Framework**: Next.js 13 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Web3**: MetaMask Integration
- **State Management**: React Hooks

## Project Structure

```
├── app/                    # Next.js app directory
├── components/            
│   ├── marketplace/       # Marketplace-specific components
│   │   ├── categories/    # Category filtering components
│   │   ├── header/       # Marketplace header components
│   │   ├── nft-card/     # NFT display components
│   │   └── stats/        # Statistics components
│   └── ui/               # Reusable UI components
├── lib/
│   ├── constants/        # Application constants
│   ├── hooks/           # Custom React hooks
│   └── utils/           # Utility functions
├── types/               # TypeScript type definitions
└── public/             # Static assets
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nft-marketplace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Development Best Practices

### Code Organization
- Components are modular and follow the Single Responsibility Principle
- Reusable logic is extracted into custom hooks
- Constants are centralized in the `lib/constants` directory
- Types are properly defined and shared across the application

### Component Structure
- Components are split into smaller, focused files
- UI logic is separated from business logic
- Props are properly typed with TypeScript interfaces
- Client-side components are marked with "use client" directive

### State Management
- React hooks are used for local state management
- Custom hooks encapsulate complex state logic
- Context is used for global state when necessary

### Styling
- Tailwind CSS classes are used for styling
- UI components from shadcn/ui are customized as needed
- Responsive design principles are followed

## Web3 Integration

The marketplace integrates with MetaMask for wallet connectivity and transactions:

- Wallet connection status management
- ETH balance display
- Transaction handling for NFT purchases
- Error handling for failed transactions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
