export default function Partner() {
  return (
    <section
      id="partner"
      className="relative overflow-hidden bg-navy px-6 py-[100px] sm:px-10"
    >
      {/* Soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-lime/5 blur-3xl"
      />

      <div className="relative z-10 mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 lg:grid-cols-2">
        {/* Left column — copy + illustration card */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="h-14 w-3/4 rounded border border-dashed border-white/30" />
            <div className="h-14 w-2/3 rounded border border-dashed border-white/30" />
          </div>
          <div className="h-16 w-full max-w-[480px] rounded border border-dashed border-white/30" />

          <div className="mt-8 flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <div className="h-16 w-16 rounded border border-dashed border-white/30" />
            <div className="flex-1 space-y-3">
              <div className="h-5 w-3/4 rounded border border-dashed border-white/30" />
              <div className="h-10 rounded border border-dashed border-white/30" />
            </div>
          </div>
        </div>

        {/* Right column — form card */}
        <div className="space-y-4 rounded-2xl bg-white p-10">
          <div className="h-8 w-56 rounded border border-dashed border-gray-400" />
          <div className="mb-4 h-5 w-72 rounded border border-dashed border-gray-400" />
          <div className="h-14 rounded border border-dashed border-gray-400" />
          <div className="h-14 rounded border border-dashed border-gray-400" />
          <div className="h-14 rounded border border-dashed border-gray-400" />
          <div className="h-28 rounded border border-dashed border-gray-400" />
          <div className="h-14 rounded bg-lime/40" />
        </div>
      </div>
    </section>
  );
}
