const CARDS = [
  {
    title: "Practical skills for real lives",
    body: "We deliver hands-on, community-based training for people who need it most, women, youth, small business owners, and first-time job seekers.",
    image: "/work/practical-skills.jpg",
    imageAlt: "Woman learning tailoring on a sewing machine in a community workshop",
    cta: { label: "View all 22 courses", href: "#courses" },
  },
  {
    title: "Training where people already gather",
    body: "We work through Self-Help Groups, community centres, schools, and ITIs, reaching people in spaces they already trust and learn in.",
    image: "/work/community-training.jpg",
    imageAlt: "Trainer presenting Our Community Our Future poster to a circle of women in a community session",
    cta: { label: "Partner with us", href: "#partner" },
  },
];

export default function OurWork() {
  return (
    <section id="work" className="scroll-mt-[80px] bg-white px-6 pb-10 pt-20 sm:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 transition-all hover:border-gray-300 hover:shadow-[0_8px_24px_rgba(27,43,101,0.06)]"
            >
              {/* Card image */}
              <img
                src={card.image}
                alt={card.imageAlt}
                className="h-[260px] w-full object-cover"
              />

              {/* Body */}
              <div className="flex flex-col gap-5 p-10">
                <h3 className="font-serif text-[clamp(24px,2.6vw,30px)] font-bold leading-[1.2] tracking-[-0.3px] text-navy">
                  {card.title}
                </h3>
                <p className="text-[15.5px] font-normal leading-[1.65] text-[#5a6573]">
                  {card.body}
                </p>
                <a
                  href={card.cta.href}
                  className="group inline-flex items-center gap-2 text-[14px] font-bold uppercase tracking-[0.6px] text-navy transition-colors hover:text-lime-deep"
                >
                  {card.cta.label}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
