type Pillar = {
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  courseCount: number;
};

const PILLARS: Pillar[] = [
  {
    title: "Financial Empowerment",
    description: "Savings, banking, credit, and accessing government schemes.",
    icon: "₹",
    color: "#2ECC71",
    bgColor: "rgba(46,204,113,0.14)",
    courseCount: 4,
  },
  {
    title: "Digital Literacy & Technology",
    description: "Smartphones, internet, Canva, Google Sheets, and AI tools.",
    icon: "◈",
    color: "#5B8DEF",
    bgColor: "rgba(91,141,239,0.14)",
    courseCount: 7,
  },
  {
    title: "Online Safety",
    description: "Cybersecurity, scam prevention, and teen digital safety.",
    icon: "◉",
    color: "#E85D50",
    bgColor: "rgba(232,93,80,0.14)",
    courseCount: 3,
  },
  {
    title: "Employability & Workplace Skills",
    description: "Communication, resume, interview skills, and workplace etiquette.",
    icon: "▣",
    color: "#A66DE8",
    bgColor: "rgba(166,109,232,0.14)",
    courseCount: 4,
  },
  {
    title: "Entrepreneurship & Income Generation",
    description: "Micro-business, digital marketing, and startup essentials.",
    icon: "△",
    color: "#F39C12",
    bgColor: "rgba(243,156,18,0.14)",
    courseCount: 3,
  },
  {
    title: "Career Guidance",
    description: "Academic and career path planning for students.",
    icon: "◇",
    color: "#3498DB",
    bgColor: "rgba(52,152,219,0.14)",
    courseCount: 1,
  },
];

export default function Pillars() {
  return (
    <section className="bg-cream px-6 pb-[80px] pt-[80px] sm:px-10">
      <div className="mx-auto max-w-[1280px]">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-[clamp(30px,3.6vw,42px)] font-bold leading-[1.15] tracking-[-0.5px] text-navy">
            6 pillars of community skilling
          </h2>
        </div>

        {/* 3x2 grid of pillar cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_8px_24px_rgba(27,43,101,0.06)]"
            >
              <div className="space-y-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-[18px] font-bold leading-none"
                  style={{
                    backgroundColor: pillar.bgColor,
                    color: pillar.color,
                  }}
                >
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-[18px] font-bold leading-[1.25] text-navy">
                  {pillar.title}
                </h3>
                <p className="text-[13px] font-normal leading-[1.55] text-[#5a6573]">
                  {pillar.description}
                </p>
              </div>
              <span
                className="mt-5 inline-flex w-fit items-center rounded px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.7px]"
                style={{
                  backgroundColor: pillar.bgColor,
                  color: pillar.color,
                }}
              >
                {pillar.courseCount} {pillar.courseCount === 1 ? "Course" : "Courses"}
              </span>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-10 flex flex-col items-stretch justify-between gap-6 rounded-2xl border border-gray-200 bg-beige p-8 lg:flex-row lg:items-center">
          <div className="flex items-center gap-5">
            <div className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-full bg-lime/20 text-lime-deep">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="space-y-1.5">
              <h4 className="font-serif text-[20px] font-bold leading-[1.25] text-navy">
                Skills today. Stronger communities tomorrow.
              </h4>
              <p className="text-[14px] font-normal leading-[1.55] text-[#5a6573]">
                Our programs are designed with communities, for communities, creating real impact that lasts.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#courses"
              className="inline-flex items-center gap-2.5 rounded bg-lime px-7 py-3.5 text-[12.5px] font-bold uppercase tracking-[0.7px] text-navy transition-all hover:-translate-y-0.5 hover:bg-lime-deep hover:shadow-[0_6px_18px_rgba(126,217,87,0.35)]"
            >
              Explore All Courses
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="/edstellar_course_catalog.pdf"
              download
              className="inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.7px] text-navy transition-opacity hover:opacity-80"
            >
              View Course Catalog
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
