import type { FlowProductClientProfile } from "@/lib/flow-products";

type ClientProfileMarqueeProps = {
  profiles: FlowProductClientProfile[];
};

function ProfileIcon({
  icon,
}: {
  icon: FlowProductClientProfile["icon"];
}) {
  switch (icon) {
    case "shop":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M4 10h16" />
          <path d="M6 10V7.8c0-.7.3-1.4.8-1.9l1-1c.5-.5 1.2-.9 1.9-.9h4.6c.7 0 1.4.3 1.9.8l1 1c.5.5.8 1.2.8 1.9V10" />
          <path d="M6 10v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8" />
          <path d="M10 20v-5h4v5" />
        </svg>
      );
    case "crown":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="m4 8 4 4 4-6 4 6 4-4-2 10H6L4 8Z" />
          <path d="M8 18h8" />
        </svg>
      );
    case "team":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M16 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="M3.5 19a4.5 4.5 0 0 1 9 0" />
          <path d="M13 19a3.5 3.5 0 0 1 7 0" />
        </svg>
      );
    case "solo":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 19a7 7 0 0 1 14 0" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18" />
          <path d="M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    case "queue":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
          <rect x="4" y="6" width="16" height="4" rx="2" />
          <rect x="4" y="14" width="11" height="4" rx="2" />
          <path d="M19 16h1" />
        </svg>
      );
  }
}

export function ClientProfileMarquee({
  profiles,
}: ClientProfileMarqueeProps) {
  const items = [...profiles, ...profiles];

  return (
    <div className="profile-rail">
      <ul className="profile-rail-track">
        {items.map((profile, index) => (
          <li
            key={`${profile.title}-${index}`}
            className="flex min-w-[250px] items-start gap-4 rounded-[22px] border border-[var(--border-soft)] bg-[rgba(255,255,255,0.04)] px-4 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:min-w-[280px] sm:rounded-[24px] sm:px-5"
          >
            <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--border-strong)] bg-[rgba(214,170,67,0.1)] text-[var(--accent)]">
              <ProfileIcon icon={profile.icon} />
            </span>

            <div className="space-y-1">
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">
                Cliente
              </p>
              <p className="text-lg text-[var(--foreground)]">{profile.title}</p>
              <p className="text-sm leading-7 text-[var(--muted)]">
                {profile.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
