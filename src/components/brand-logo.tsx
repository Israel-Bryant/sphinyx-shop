import Image from "next/image";

type BrandLogoProps = {
  variant: "wordmark" | "mark";
  className?: string;
  priority?: boolean;
};

const variants = {
  wordmark: {
    src: "/brand/sphynix-wordmark.svg",
    alt: "Sphynix",
    width: 420,
    height: 124,
    sizes: "(max-width: 768px) 190px, 240px",
  },
  mark: {
    src: "/brand/sphynix-mark.svg",
    alt: "Sphynix mark",
    width: 144,
    height: 144,
    sizes: "64px",
  },
} as const;

export function BrandLogo({
  variant,
  className = "",
  priority = false,
}: BrandLogoProps) {
  const asset = variants[variant];

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      priority={priority}
      sizes={asset.sizes}
      className={`brand-logo brand-logo--${variant} ${className}`.trim()}
    />
  );
}
