import { Input } from "@/components/ui/input";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <Input
      placeholder="Search NFTs..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-64"
    />
  );
}