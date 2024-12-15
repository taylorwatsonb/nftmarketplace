interface MarketplaceContainerProps {
  children: React.ReactNode;
}

export function MarketplaceContainer({ children }: MarketplaceContainerProps) {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </main>
  );
}