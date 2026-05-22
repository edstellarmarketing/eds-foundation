export default function Footer() {
  return (
    <footer className="border-t-[3px] border-lime bg-navy-deep px-6 py-12 sm:px-10">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        {/* Brand block */}
        <div className="space-y-3">
          <div className="h-8 w-44 rounded border border-dashed border-white/30" />
          <div className="h-4 w-64 rounded border border-dashed border-white/20" />
        </div>

        {/* Right block — socials + contact + copy */}
        <div className="flex flex-col items-start gap-3 md:items-end">
          <div className="flex gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-9 w-9 rounded-full border border-dashed border-white/30"
              />
            ))}
          </div>
          <div className="h-4 w-56 rounded border border-dashed border-white/20" />
          <div className="h-4 w-40 rounded border border-dashed border-white/10" />
        </div>
      </div>
    </footer>
  );
}
