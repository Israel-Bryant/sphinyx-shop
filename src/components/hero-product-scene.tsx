"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type HeroProductSceneProps = {
  heroShot: {
    imageSrc: string;
    alt: string;
  };
  chatShot: {
    imageSrc: string;
    alt: string;
  };
  reportShot: {
    imageSrc: string;
    alt: string;
  };
  trialDays: number;
  price: string;
  cadence: string;
};

function WireLayer() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 780 760"
      className="absolute inset-0 h-full w-full opacity-80"
    >
      <defs>
        <linearGradient id="hero-wire-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(214,170,67,0.02)" />
          <stop offset="45%" stopColor="rgba(214,170,67,0.72)" />
          <stop offset="100%" stopColor="rgba(214,170,67,0.06)" />
        </linearGradient>
      </defs>

      {[
        "M82 154C150 56 306 24 432 74c120 47 212 151 241 284",
        "M132 524c74 88 215 134 339 94 98-31 180-108 225-211",
        "M171 228c40-36 100-54 162-47 74 8 143 52 183 117",
      ].map((path, index) => (
        <motion.path
          key={path}
          d={path}
          fill="none"
          stroke="url(#hero-wire-gradient)"
          strokeWidth={index === 2 ? 1.2 : 1.4}
          initial={{ pathLength: 0.1, opacity: 0.15 }}
          animate={{ pathLength: 1, opacity: [0.18, 0.75, 0.25] }}
          transition={{
            duration: 3.8 + index * 0.7,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}

      {[
        { cx: 148, cy: 134, r: 8 },
        { cx: 628, cy: 336, r: 7 },
        { cx: 506, cy: 610, r: 6 },
      ].map((node, index) => (
        <motion.circle
          key={`${node.cx}-${node.cy}`}
          cx={node.cx}
          cy={node.cy}
          r={node.r}
          fill="rgba(214,170,67,0.9)"
          initial={{ opacity: 0.35, scale: 0.92 }}
          animate={{ opacity: [0.3, 0.95, 0.35], scale: [0.92, 1.15, 0.92] }}
          transition={{
            duration: 2.8 + index * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

function FloatingDevice({
  imageSrc,
  alt,
  className,
  tintClassName,
  motionY,
  motionRotate,
  priority = false,
}: {
  imageSrc: string;
  alt: string;
  className: string;
  tintClassName: string;
  motionY: number[];
  motionRotate: number[];
  priority?: boolean;
}) {
  return (
    <motion.figure
      className={className}
      animate={{ y: motionY, rotate: motionRotate }}
      transition={{
        duration: 7.2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      <div className={`absolute inset-0 rounded-[40px] blur-3xl ${tintClassName}`} />
      <div className="relative overflow-hidden rounded-[inherit] border border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(18,18,18,0.98),rgba(7,7,7,0.96))] p-2 shadow-[0_32px_100px_rgba(0,0,0,0.38)]">
        <Image
          src={imageSrc}
          alt={alt}
          width={1080}
          height={1920}
          priority={priority}
          className="h-auto w-full rounded-[28px]"
        />
      </div>
    </motion.figure>
  );
}

function FloatingBadge({
  title,
  value,
  className,
}: {
  title: string;
  value: string;
  className: string;
}) {
  return (
    <motion.aside
      className={className}
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 5.6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
        {title}
      </p>
      <p className="mt-2 text-2xl text-[var(--foreground)]">{value}</p>
    </motion.aside>
  );
}

export function HeroProductScene({
  heroShot,
  chatShot,
  reportShot,
  trialDays,
  price,
  cadence,
}: HeroProductSceneProps) {
  return (
    <div className="relative min-h-[520px] sm:min-h-[680px] lg:min-h-[820px]">
      <div className="absolute inset-0 rounded-[44px] bg-[radial-gradient(circle_at_40%_20%,_rgba(214,170,67,0.12),_transparent_40%),radial-gradient(circle_at_60%_80%,_rgba(255,244,214,0.06),_transparent_24%)]" />
      <WireLayer />

      <FloatingDevice
        imageSrc={chatShot.imageSrc}
        alt={chatShot.alt}
        className="absolute left-[1%] top-[18%] z-10 w-[35%] rounded-[28px] sm:left-[2%] sm:top-[14%] sm:w-[31%] sm:rounded-[34px]"
        tintClassName="bg-[radial-gradient(circle,_rgba(214,170,67,0.16),_transparent_70%)]"
        motionY={[10, -6, 12]}
        motionRotate={[-2, 0, -1]}
      />

      <FloatingDevice
        imageSrc={heroShot.imageSrc}
        alt={heroShot.alt}
        className="absolute right-[1%] top-[3%] z-20 w-[58%] rounded-[32px] sm:right-[4%] sm:top-[4%] sm:w-[46%] sm:rounded-[42px]"
        tintClassName="bg-[radial-gradient(circle,_rgba(214,170,67,0.24),_transparent_72%)]"
        motionY={[-8, 10, -10]}
        motionRotate={[1.5, -1, 1]}
        priority
      />

      <FloatingDevice
        imageSrc={reportShot.imageSrc}
        alt={reportShot.alt}
        className="absolute bottom-[7%] left-[18%] z-10 w-[36%] rounded-[28px] sm:bottom-[8%] sm:left-[22%] sm:w-[30%] sm:rounded-[34px]"
        tintClassName="bg-[radial-gradient(circle,_rgba(255,241,196,0.2),_transparent_72%)]"
        motionY={[8, -10, 8]}
        motionRotate={[1, -1.2, 0.6]}
      />

      <FloatingBadge
        title="Booking publico"
        value="Link e QR code prontos"
        className="absolute right-[3%] top-[56%] z-30 max-w-[180px] rounded-[22px] border border-[var(--border-soft)] bg-[rgba(9,9,9,0.86)] px-4 py-4 text-sm shadow-[0_18px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:right-[8%] sm:top-[54%] sm:max-w-[250px] sm:rounded-[26px] sm:px-5 sm:py-5 sm:text-base"
      />

      <FloatingBadge
        title="Entrada"
        value={`${trialDays} dias`}
        className="absolute left-[5%] top-[66%] z-30 rounded-[20px] border border-[var(--border-strong)] bg-[rgba(214,170,67,0.12)] px-4 py-3 text-sm backdrop-blur-xl sm:left-[7%] sm:top-[62%] sm:rounded-[24px] sm:px-5 sm:py-4 sm:text-base"
      />

      <FloatingBadge
        title="Preco"
        value={`R$ ${price}${cadence}`}
        className="absolute bottom-[12%] right-[8%] z-30 rounded-[20px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.06)] px-4 py-3 text-sm backdrop-blur-xl sm:bottom-[14%] sm:right-[10%] sm:rounded-[24px] sm:px-5 sm:py-4 sm:text-base"
      />
    </div>
  );
}
