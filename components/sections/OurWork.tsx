export default function OurWork() {
  return (
    <section id="work" className="bg-white px-6 pb-10 pt-20 sm:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-dashed border-gray-300 bg-gray-50"
            >
              {/* Card image slot */}
              <div className="h-[260px] border-b border-dashed border-gray-300 bg-gray-100" />
              {/* Card body */}
              <div className="space-y-4 p-8">
                <div className="h-10 w-3/4 rounded bg-gray-200" />
                <div className="h-16 rounded bg-gray-100" />
                <div className="h-6 w-40 rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
