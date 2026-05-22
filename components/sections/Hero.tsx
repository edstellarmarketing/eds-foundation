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
            "radial-gradient(ellipse 60% 80% at 72% 50%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.45) 20%, rgba(255,255,255,0.18) 38%, transparent 55%, rgba(35,50,85,0.08) 80%, rgba(35,50,85,0.16) 100%)",
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
        <div className="max-w-[650px] space-y-7">
          {/* H1 — larger, ~3 lines of display text */}
          <div className="h-52 rounded border border-dashed border-gray-400" />
          {/* Subtext — ~2 lines of body */}
          <div className="h-24 rounded border border-dashed border-gray-400" />
          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="h-14 w-56 rounded border border-dashed border-gray-400 bg-lime/30" />
            <div className="h-14 w-56 rounded border border-dashed border-gray-400" />
          </div>
          {/* Scroll indicator */}
          <div className="h-4 w-28 rounded border border-dashed border-gray-400" />
        </div>
      </div>

      {/* Impact strip — sits at bottom of hero fold */}
      <div className="relative z-[2] mx-auto w-full max-w-[1280px]">
        <div className="rounded-xl border border-gray-200 bg-white shadow-[0_12px_36px_rgba(27,43,101,0.08)]">
          <div className="grid grid-cols-2 divide-y divide-gray-200 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3 p-[22px]">
                <div className="h-[38px] w-[38px] rounded-lg border border-dashed border-gray-300" />
                <div className="flex flex-col gap-1">
                  <div className="h-5 w-16 rounded border border-dashed border-gray-300" />
                  <div className="h-3 w-32 rounded border border-dashed border-gray-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
