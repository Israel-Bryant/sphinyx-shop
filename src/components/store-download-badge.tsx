type StoreDownloadBadgeProps = {
  platform: "play" | "apple" | "web";
  href: string;
  ready: boolean;
};

function PlayIcon() {
  return (
    <svg viewBox="0 0 28 28" className="h-8 w-8" aria-hidden="true">
      <path d="M4 3.5 17 16 4 24.5Z" fill="#00D0FF" />
      <path d="M17 16 21.7 11.8 25 14.2c1.2.9 1.2 2.6 0 3.4L21.7 20 17 16Z" fill="#FFD84D" />
      <path d="M4 3.5 21.7 11.8 17 16Z" fill="#6DDB61" />
      <path d="M4 24.5 17 16 21.7 20Z" fill="#FF6D6D" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.7 12.8c0-2 1.6-3 1.7-3.1-.9-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7s-1.6-.7-2.7-.7c-1.4 0-2.7.8-3.4 2.1-1.5 2.5-.4 6.3 1 8.3.7 1 1.6 2.1 2.8 2 .9 0 1.3-.6 2.5-.6s1.6.6 2.6.6c1.1 0 1.8-1 2.5-2 .8-1.2 1.2-2.4 1.2-2.5 0 0-2.3-.9-2.3-3.2Z" />
      <path d="M14.8 6.8c.6-.8 1-1.8.9-2.8-.9 0-2 .6-2.6 1.4-.6.7-1.1 1.8-.9 2.8 1 .1 2-.5 2.6-1.4Z" />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3.8 12h16.4M12 3.8c2.2 2.4 3.3 5.1 3.3 8.2S14.2 17.8 12 20.2M12 3.8C9.8 6.2 8.7 8.9 8.7 12s1.1 5.8 3.3 8.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StoreDownloadBadge({
  platform,
  href,
  ready,
}: StoreDownloadBadgeProps) {
  const eyebrow =
    platform === "play"
      ? "Disponivel no"
      : platform === "apple"
        ? "Baixar na"
        : "Acessar no";
  const label =
    platform === "play"
      ? "Google Play"
      : platform === "apple"
        ? "App Store"
        : "Web";
  const icon =
    platform === "play"
      ? <PlayIcon />
      : platform === "apple"
        ? <AppleIcon />
        : <WebIcon />;

  const content = (
    <div className="group inline-flex min-h-[84px] w-full min-w-0 items-center gap-4 rounded-[22px] border border-white/12 bg-black px-5 py-4 text-white shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 sm:min-w-[228px] sm:w-auto">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/4 text-white">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="text-[0.68rem] uppercase tracking-[0.18em] text-white/55">
          {ready ? eyebrow : "Em breve"}
        </span>
        <span className="mt-1 text-2xl font-semibold tracking-tight">
          {label}
        </span>
      </span>
    </div>
  );

  if (!ready) {
    return (
      <div aria-disabled="true" className="opacity-95">
        {content}
      </div>
    );
  }

  return <a href={href}>{content}</a>;
}
