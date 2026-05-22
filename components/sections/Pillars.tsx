export default function Pillars() {
  return (
    <section className="bg-navy px-6 pb-[60px] pt-[80px] sm:px-10">
      <div className="mx-auto max-w-[1280px]">
        {/* Section heading */}
        <div className="mb-10 text-center">
          <div className="mx-auto h-12 w-[420px] max-w-full rounded border border-dashed border-white/30" />
        </div>

        {/* 3x2 grid of pillar cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="grid min-h-[240px] grid-cols-[1.05fr_1fr] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
            >
              <div className="flex flex-col justify-between p-6">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-lg border border-dashed border-white/30" />
                  <div className="h-7 w-4/5 rounded border border-dashed border-white/30" />
                  <div className="h-14 rounded border border-dashed border-white/30" />
                </div>
                <div className="mt-4 h-7 w-28 rounded border border-dashed border-white/30" />
              </div>
              {/* Pillar image slot */}
              <div className="border-l border-dashed border-white/20 bg-white/[0.04]" />
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-10 flex flex-col items-stretch justify-between gap-6 rounded-2xl border border-white/15 bg-white/[0.05] p-8 lg:flex-row lg:items-center">
          <div className="flex items-center gap-5">
            <div className="h-[50px] w-[50px] rounded-full border border-dashed border-white/30" />
            <div className="space-y-3">
              <div className="h-8 w-72 max-w-full rounded border border-dashed border-white/30" />
              <div className="h-5 w-96 max-w-full rounded border border-dashed border-white/30" />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <div className="h-12 w-52 rounded border border-dashed border-white/30 bg-lime/30" />
            <div className="h-6 w-36 rounded border border-dashed border-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
