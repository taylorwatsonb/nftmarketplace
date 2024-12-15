interface NFTImageProps {
  src: string;
  alt: string;
}

export function NFTImage({ src, alt }: NFTImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-64 object-cover"
    />
  );
}