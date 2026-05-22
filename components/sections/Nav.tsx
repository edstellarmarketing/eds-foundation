const NAV_LINKS = [
  { label: "Impact", href: "#impact" },
  { label: "Our Work", href: "#work" },
  { label: "Courses", href: "#courses" },
  { label: "Partner With Us", href: "#partner" },
];

export default function Nav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 h-[68px] border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-10">
        {/* Brand: logo | Foundation */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/66c2ce6ee9d04908dc5e7eea_139%20x%2050%20(1).svg"
            alt="Edstellar"
            className="h-8 w-auto"
          />
          <div className="h-6 w-px bg-gray-300" />
          <span className="font-serif text-[15px] font-semibold text-navy">
            Foundation
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-wide text-gray-600 transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#partner"
          className="rounded bg-navy px-6 py-[10px] text-[12px] font-medium uppercase tracking-[0.5px] text-white transition-colors hover:bg-navy-deep"
        >
          Get Involved
        </a>
      </div>
    </nav>
  );
}
