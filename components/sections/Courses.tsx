"use client";

import { useEffect, useState } from "react";

type Course = {
  name: string;
  target: string;
  hoursRange: string;
  sessions: string;
};

type Category = {
  name: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  hoursRange: string;
  courses: Course[];
};

const CATEGORIES: Category[] = [
  {
    name: "Financial Empowerment",
    description: "Savings, banking, credit, and accessing government schemes.",
    icon: "₹",
    color: "#2ECC71",
    bgColor: "rgba(46,204,113,0.14)",
    hoursRange: "12-15 hrs",
    courses: [
      {
        name: "Financial Literacy for Women",
        target: "Women (18-60), SHG members, homemakers",
        hoursRange: "10-12 hrs",
        sessions: "5 sessions",
      },
      {
        name: "Banking & Digital Payments",
        target: "First-time bank users, rural women, small vendors",
        hoursRange: "6-8 hrs",
        sessions: "4 sessions",
      },
      {
        name: "Understanding Debt & Credit",
        target: "Women, small business owners, farmers",
        hoursRange: "5-6 hrs",
        sessions: "3 sessions",
      },
      {
        name: "Government Schemes & Benefits",
        target: "Low-income families, women, senior citizens",
        hoursRange: "5-6 hrs",
        sessions: "3 sessions",
      },
    ],
  },
  {
    name: "Digital Literacy & Technology",
    description: "Smartphones, internet, Canva, Google Sheets, and AI tools.",
    icon: "◈",
    color: "#5B8DEF",
    bgColor: "rgba(91,141,239,0.14)",
    hoursRange: "18-25 hrs",
    courses: [
      {
        name: "Canva for Everyone",
        target: "SHG members, small vendors, students, job seekers",
        hoursRange: "5-6 hrs",
        sessions: "3 sessions",
      },
      {
        name: "Google & Internet for Daily Life",
        target: "Anyone with basic phone skills, rural populations",
        hoursRange: "5-6 hrs",
        sessions: "3 sessions",
      },
      {
        name: "WhatsApp for Personal & Business Use",
        target: "Small vendors, SHG members, youth",
        hoursRange: "3-4 hrs",
        sessions: "2 sessions",
      },
      {
        name: "Government Apps & Online Services",
        target: "General population needing government services",
        hoursRange: "5-6 hrs",
        sessions: "3 sessions",
      },
      {
        name: "Basic Computer Skills & MS Office",
        target: "Job seekers, students (Class 10+), unemployed youth",
        hoursRange: "12-15 hrs",
        sessions: "6 sessions",
      },
      {
        name: "Google Sheets & Data Basics",
        target: "SHG members, micro-entrepreneurs, students (Class 10+)",
        hoursRange: "6-8 hrs",
        sessions: "4 sessions",
      },
      {
        name: "AI Tools for Everyday Life",
        target: "General population, small business owners, students",
        hoursRange: "5-6 hrs",
        sessions: "3 sessions",
      },
    ],
  },
  {
    name: "Online Safety",
    description: "Cybersecurity, scam prevention, and teen digital safety.",
    icon: "◉",
    color: "#E85D50",
    bgColor: "rgba(232,93,80,0.14)",
    hoursRange: "8-10 hrs",
    courses: [
      {
        name: "Online Safety for Teens (Class 8–12)",
        target: "Students aged 13–18",
        hoursRange: "8-10 hrs",
        sessions: "5 sessions",
      },
      {
        name: "Cybersecurity for Women",
        target: "Women using smartphones and internet",
        hoursRange: "3-4 hrs",
        sessions: "2 sessions",
      },
      {
        name: "Spotting Scams & Digital Fraud",
        target: "Seniors and new internet users",
        hoursRange: "2-3 hrs",
        sessions: "1 session",
      },
    ],
  },
  {
    name: "Employability & Workplace Skills",
    description: "Communication, resume, interview skills, and workplace etiquette.",
    icon: "▣",
    color: "#A66DE8",
    bgColor: "rgba(166,109,232,0.16)",
    hoursRange: "10-14 hrs",
    courses: [
      {
        name: "Spoken English for Workplace",
        target: "Job seekers, entry-level employees",
        hoursRange: "12-15 hrs",
        sessions: "6 sessions",
      },
      {
        name: "Customer Service & Communication",
        target: "Youth seeking BPO, retail, hospitality jobs",
        hoursRange: "8-10 hrs",
        sessions: "5 sessions",
      },
      {
        name: "Interview Skills & Resume Building",
        target: "First-time job seekers, Class 12 and graduates",
        hoursRange: "5-6 hrs",
        sessions: "3 sessions",
      },
      {
        name: "Professional Workplace Etiquette",
        target: "First-time formal sector workers",
        hoursRange: "5-6 hrs",
        sessions: "3 sessions",
      },
    ],
  },
  {
    name: "Entrepreneurship & Income Generation",
    description: "Micro-business, digital marketing, and startup essentials.",
    icon: "△",
    color: "#F39C12",
    bgColor: "rgba(243,156,18,0.16)",
    hoursRange: "10-12 hrs",
    courses: [
      {
        name: "Starting Your Micro-Business",
        target: "SHG members, aspiring entrepreneurs, homemakers",
        hoursRange: "10-12 hrs",
        sessions: "5 sessions",
      },
      {
        name: "Digital Marketing for Small Businesses",
        target: "Small business owners, vendors, self-employed",
        hoursRange: "8-10 hrs",
        sessions: "4 sessions",
      },
      {
        name: "Basic Bookkeeping for Small Businesses",
        target: "Micro-entrepreneurs, shop owners, vendors",
        hoursRange: "8-10 hrs",
        sessions: "4 sessions",
      },
    ],
  },
  {
    name: "Career Guidance",
    description: "Academic and career path planning for students.",
    icon: "◇",
    color: "#3498DB",
    bgColor: "rgba(52,152,219,0.14)",
    hoursRange: "6-8 hrs",
    courses: [
      {
        name: "Career Planning for Class 10–12 Students",
        target: "Students in Class 10 to 12",
        hoursRange: "6-8 hrs",
        sessions: "5 sessions",
      },
    ],
  },
];

const PILLS = ["All Courses", ...CATEGORIES.map((c) => c.name)];

const CARD_WIDTH = 280;
const GAP = 16;
const STEP = CARD_WIDTH + GAP;

function CategoryCard({ cat }: { cat: Category }) {
  return (
    <div className="flex-none w-[280px] rounded-xl border border-gray-200 bg-white transition-all hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_8px_20px_rgba(27,43,101,0.08)]">
      <div className="flex flex-col gap-3 p-6">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-md text-[18px] font-bold leading-none"
          style={{ backgroundColor: cat.bgColor, color: cat.color }}
        >
          {cat.icon}
        </div>
        <h3 className="font-serif text-[15px] font-bold leading-[1.3] text-navy">
          {cat.name}
        </h3>
        <p className="text-[12.5px] leading-[1.5] text-gray-500">
          {cat.description}
        </p>
        <div className="mt-1 border-t border-gray-100 pt-3">
          <div className="flex items-center gap-1.5 text-[11.5px] font-semibold text-navy">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
            </svg>
            {cat.courses.length} {cat.courses.length === 1 ? "Course" : "Courses"}
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[11.5px] text-gray-400">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              {cat.hoursRange}
            </div>
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full"
              style={{ backgroundColor: cat.bgColor, color: cat.color }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CourseCard({ course, cat }: { course: Course; cat: Category }) {
  return (
    <div className="flex-none w-[280px] rounded-xl border border-gray-200 bg-white transition-all hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_8px_20px_rgba(27,43,101,0.08)]">
      <div className="flex flex-col gap-3 p-6">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-md text-[18px] font-bold leading-none"
          style={{ backgroundColor: cat.bgColor, color: cat.color }}
        >
          {cat.icon}
        </div>
        <h3 className="font-serif text-[15px] font-bold leading-[1.3] text-navy">
          {course.name}
        </h3>
        <p className="text-[12.5px] leading-[1.5] text-gray-500">
          {course.target}
        </p>
        <div className="mt-1 border-t border-gray-100 pt-3">
          <div className="flex items-center gap-1.5 text-[11.5px] font-semibold text-navy">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
            </svg>
            {course.sessions}
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[11.5px] text-gray-400">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              {course.hoursRange}
            </div>
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full"
              style={{ backgroundColor: cat.bgColor, color: cat.color }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Arrow({
  direction,
  disabled,
  onClick,
}: {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={direction === "left" ? "Previous courses" : "Next courses"}
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-[0_4px_14px_rgba(27,43,101,0.15)] transition-all hover:bg-navy hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-navy ${
        direction === "left" ? "left-2 lg:-left-5" : "right-2 lg:-right-5"
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        {direction === "left" ? (
          <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

export default function Courses() {
  const [visible, setVisible] = useState(4);
  const [index, setIndex] = useState(0);
  const [activePill, setActivePill] = useState(0);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w >= 1280) setVisible(4);
      else if (w >= 1024) setVisible(3);
      else if (w >= 640) setVisible(2);
      else setVisible(1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // Reset carousel position when pill changes
  useEffect(() => {
    setIndex(0);
  }, [activePill]);

  // What's currently in the carousel
  const isAllCourses = activePill === 0;
  const activeCategory = !isAllCourses ? CATEGORIES[activePill - 1] : null;
  const totalCards = isAllCourses ? CATEGORIES.length : activeCategory!.courses.length;
  const maxIndex = Math.max(0, totalCards - visible);

  // Clamp index when totalCards/visible shrinks
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section id="courses" className="scroll-mt-[80px] bg-beige px-6 py-[90px] sm:px-10">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="relative mb-10 text-center">
          <a
            href="https://www.edstellarfoundation.org/edstellar_course_catalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-0 top-2 hidden items-center gap-2.5 rounded border-[1.5px] border-navy bg-white px-5 py-3 text-[11.5px] font-semibold uppercase tracking-[0.4px] text-navy transition-all hover:bg-navy hover:text-white lg:inline-flex"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download Catalog (PDF)
          </a>
          <h2 className="mx-auto mb-4 max-w-[640px] font-serif text-[clamp(28px,3.4vw,40px)] font-bold leading-[1.15] tracking-[-0.5px] text-navy">
            22 courses, ready to deploy
          </h2>
          <p className="mx-auto max-w-[640px] text-[15px] leading-[1.65] text-gray-500">
            Industry-relevant training programs across 6 pillars of community
            skilling. Choose a category to explore courses and build in-demand
            skills.
          </p>
        </div>

        <a
          href="https://www.edstellarfoundation.org/edstellar_course_catalog.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mb-6 flex w-full max-w-xs items-center justify-center gap-2.5 rounded border-[1.5px] border-navy bg-white px-5 py-3 text-[11.5px] font-semibold uppercase tracking-[0.4px] text-navy transition-all hover:bg-navy hover:text-white lg:hidden"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Download Catalog (PDF)
        </a>

        {/* Pills row */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {PILLS.map((pill, i) => (
            <button
              key={pill}
              onClick={() => setActivePill(i)}
              className={`rounded border px-4 py-2 text-[12.5px] font-medium transition-all ${
                activePill === i
                  ? "border-navy bg-navy text-white"
                  : "border-gray-300 bg-transparent text-gray-600 hover:border-navy hover:text-navy"
              }`}
            >
              {pill}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div
          className="relative"
          role="region"
          aria-label="Course catalog carousel"
        >
          <Arrow direction="left" disabled={index === 0} onClick={prev} />
          <Arrow direction="right" disabled={index === maxIndex} onClick={next} />

          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * STEP}px)` }}
            >
              {isAllCourses
                ? CATEGORIES.map((cat) => <CategoryCard key={cat.name} cat={cat} />)
                : activeCategory!.courses.map((course) => (
                    <CourseCard
                      key={course.name}
                      course={course}
                      cat={activeCategory!}
                    />
                  ))}
            </div>
          </div>

          {/* Dot indicator */}
          {maxIndex > 0 && (
            <div className="mt-5 flex justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-navy" : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* CTA banner */}
        <div className="mt-10 flex flex-col items-stretch justify-between gap-6 rounded-2xl border border-[rgba(126,217,87,0.35)] bg-gradient-to-r from-[#f0fae8] to-[#e6f7d8] p-8 lg:flex-row lg:items-center">
          <div className="flex items-center gap-5">
            <div className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-full bg-lime/20 text-navy">
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
              <p className="text-[14px] leading-[1.55] text-[#5a6573]">
                Our courses are designed with communities, for communities, creating real impact that lasts.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <button
              onClick={() => {
                setActivePill(0);
                setIndex(0);
                document
                  .getElementById("courses")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="inline-flex items-center gap-2.5 rounded bg-lime px-7 py-3.5 text-[12.5px] font-bold uppercase tracking-[0.7px] text-navy transition-all hover:-translate-y-0.5 hover:bg-lime-deep hover:shadow-[0_6px_18px_rgba(126,217,87,0.35)]"
            >
              Explore All Courses
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <a
              href="https://www.edstellarfoundation.org/edstellar_course_catalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[12.5px] font-bold uppercase tracking-[0.7px] text-lime-deep underline-offset-4 transition-opacity hover:opacity-80"
            >
              Download Catalog
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
