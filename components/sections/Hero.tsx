type Stat = {
  number: string;
  label: string;
  tone: "green" | "blue" | "purple" | "navy";
  icon: React.ReactNode;
};

const STATS: Stat[] = [
  {
    number: "100+",
    label: "Training Hours Delivered",
    tone: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    number: "5+",
    label: "Topics Covered",
    tone: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 5h7a3 3 0 013 3v12a2 2 0 00-2-2H2zM22 5h-7a3 3 0 00-3 3v12a2 2 0 012-2h8z" />
      </svg>
    ),
  },
  {
    number: "22",
    label: "Courses Designed",
    tone: "purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 10L12 4 2 10l10 6 10-6z" />
        <path d="M6 12v5c3 2 9 2 12 0v-5" />
      </svg>
    ),
  },
  {
    number: "175",
    label: "Total Curriculum Hours",
    tone: "navy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="12,2 22,8 12,14 2,8" />
        <polyline points="2,16 12,22 22,16" />
        <polyline points="2,12 12,18 22,12" />
      </svg>
    ),
  },
];

const TONE_BG: Record<Stat["tone"], string> = {
  green: "bg-[rgba(46,204,113,0.14)] text-[#2ECC71]",
  blue: "bg-[rgba(91,141,239,0.14)] text-[#5B8DEF]",
  purple: "bg-[rgba(166,109,232,0.16)] text-[#A66DE8]",
  navy: "bg-[rgba(27,43,101,0.12)] text-navy",
};

const TONE_NUMBER: Record<Stat["tone"], string> = {
  green: "text-[#2ECC71]",
  blue: "text-[#5B8DEF]",
  purple: "text-[#A66DE8]",
  navy: "text-navy",
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-cream px-6 pb-[30px] pt-[100px] sm:px-10">
      {/* Soft blue rounded backdrop shape — left side */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-48 -top-44 h-[620px] w-[880px]"
        style={{
          background:
            "linear-gradient(135deg, #d8e9f3 0%, #e6f0f7 45%, rgba(230,240,247,0.4) 75%, transparent 100%)",
          borderRadius: "50% 50% 60% 40% / 60% 50% 50% 40%",
        }}
      />

      {/* Spotlight focus on the image area — bright glow + soft vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 72% 50%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 25%, transparent 50%, rgba(35,50,85,0.06) 80%, rgba(35,50,85,0.12) 100%)",
        }}
      />

      {/* Dot pattern overlay — top-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[30px] top-[100px] z-[1] h-[140px] w-[200px]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(91,141,239,0.42) 1.6px, transparent 1.6px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Hero content — text on left only; image lives in background */}
      <div className="relative z-[2] mx-auto flex w-full max-w-[1280px] flex-1 items-center">
        <div className="max-w-[720px] space-y-8">
          <h1 className="font-serif text-[clamp(46px,6.6vw,82px)] font-bold leading-[1.06] tracking-[-1.5px] text-navy">
            Skilling
            <br />
            Communities.
            <br />
            <span className="relative inline-block text-[#6dc94a]">
              Building Futures.
              <span
                aria-hidden
                className="absolute bottom-0 left-0 right-0 h-[4px] rounded bg-[#6dc94a] opacity-40"
              />
            </span>
          </h1>

          <p className="max-w-[560px] text-[17px] font-normal leading-[1.6] text-[#5a6573] sm:text-[19px]">
            We bring practical, accessible training to underserved
            communities, equipping people with the skills to earn, grow, and
            lead.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#courses"
              className="inline-flex items-center gap-3 rounded bg-lime px-9 py-4 text-[14px] font-bold uppercase tracking-[0.6px] text-navy transition-all hover:-translate-y-0.5 hover:bg-lime-deep hover:shadow-[0_8px_24px_rgba(126,217,87,0.3)]"
            >
              Explore Courses
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#partner"
              className="inline-flex items-center gap-3 rounded border-[1.5px] border-gray-300 bg-white px-9 py-4 text-[14px] font-bold uppercase tracking-[0.6px] text-navy transition-all hover:border-navy hover:shadow-[0_4px_14px_rgba(27,43,101,0.08)]"
            >
              Request Training
            </a>
          </div>

        </div>
      </div>

      {/* Impact strip — sits at bottom of hero fold */}
      <div className="relative z-[2] mx-auto w-full max-w-[1280px]">
        <div className="rounded-xl border border-gray-200 bg-white shadow-[0_12px_36px_rgba(27,43,101,0.08)]">
          <div className="grid grid-cols-2 divide-y divide-gray-200 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 p-[22px]">
                <div
                  className={`flex h-[44px] w-[44px] flex-none items-center justify-center rounded-lg ${TONE_BG[stat.tone]}`}
                >
                  <span className="h-6 w-6">{stat.icon}</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <div
                    className={`font-serif text-[clamp(20px,2vw,26px)] font-bold leading-none ${TONE_NUMBER[stat.tone]}`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-[12px] font-normal text-gray-500">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
