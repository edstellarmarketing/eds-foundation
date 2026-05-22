const SOCIALS = [
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14M8.34 17V10H6v7zM7.17 8.83a1.34 1.34 0 100-2.68 1.34 1.34 0 000 2.68M18 17v-3.86c0-2.07-1.34-2.83-2.5-2.83-1.1 0-1.86.65-2.16 1.13H13.3V10h-2.23v7h2.34v-3.78c0-.95.62-1.5 1.36-1.5.72 0 1.23.42 1.23 1.47V17z" />
    ),
    fill: true,
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </>
    ),
    fill: false,
  },
  {
    label: "Twitter",
    href: "#",
    svg: (
      <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.12-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 00.497-3.753c0-.249 1.51-2.772 1.818-4.013z" />
    ),
    fill: true,
  },
  {
    label: "YouTube",
    href: "#",
    svg: (
      <path d="M21.58 7.19a2.5 2.5 0 00-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42a2.5 2.5 0 00-1.76 1.77C2 8.76 2 12 2 12s0 3.24.42 4.81a2.5 2.5 0 001.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 001.76-1.77C22 15.24 22 12 22 12s0-3.24-.42-4.81zM10 15V9l5.2 3z" />
    ),
    fill: true,
  },
];

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-lime bg-navy-deep px-6 py-12 sm:px-10">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        {/* Brand block */}
        <div>
          <div className="mb-2 flex items-center gap-2.5">
            <img
              src="https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/66c2ce6ee9d04908dc5e7eea_139%20x%2050%20(1).svg"
              alt="Edstellar"
              className="h-6 w-auto brightness-0 invert"
            />
            <span className="font-serif text-[14px] font-semibold text-white/60">
              Foundation
            </span>
          </div>
          <p className="text-[13px] font-light text-white/80">
            Skilling Communities. Building Futures.
          </p>
        </div>

        {/* Right block — socials + contact + copy */}
        <div className="flex flex-col items-start gap-3 md:items-end">
          <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] text-white/50 transition-colors hover:bg-lime hover:text-navy"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill={s.fill ? "currentColor" : "none"}
                  stroke={s.fill ? "none" : "currentColor"}
                  strokeWidth="2"
                >
                  {s.svg}
                </svg>
              </a>
            ))}
          </div>
          <a
            href="mailto:hello@edstellarfoundation.org"
            className="text-[13px] font-light text-white/85 transition-colors hover:text-lime"
          >
            hello@edstellarfoundation.org
          </a>
          <p className="text-[12px] font-light text-white/60">
            &copy; 2026 Edstellar Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
