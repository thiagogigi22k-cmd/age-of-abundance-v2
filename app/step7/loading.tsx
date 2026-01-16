import Image from "next/image"

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden bg-black">
      {/* Background - positioned at bottom */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/design-20sem-20nome-20-281-29.png"
          alt="Background"
          fill
          className="object-cover object-bottom"
          priority
        />
        {/* Dark overlay for top section */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-transparent"
          style={{ height: "60%" }}
        />
      </div>

      {/* Content skeleton */}
      <div className="relative z-10 w-full flex flex-col items-center px-4 pt-6 pb-8">
        {/* Header skeleton */}
        <div className="w-full max-w-md flex items-center justify-between mb-4">
          <div className="w-8" />
          <div className="flex flex-col items-center">
            <div className="w-[60px] h-[60px] rounded-full bg-[#1a1a2e] animate-pulse" />
            <div className="w-16 h-3 bg-[#1a1a2e] rounded mt-2 animate-pulse" />
            <div className="w-14 h-3 bg-[#1a1a2e] rounded mt-1 animate-pulse" />
          </div>
          <div className="w-8 h-8 rounded-md bg-[#1a1a2e] animate-pulse" />
        </div>

        {/* Greeting skeleton */}
        <div className="w-64 h-6 bg-[#1a1a2e] rounded mb-3 animate-pulse" />

        {/* Balance skeleton */}
        <div className="w-32 h-4 bg-[#1a1a2e] rounded mb-1 animate-pulse" />
        <div className="w-28 h-8 bg-[#1a1a2e] rounded mb-4 animate-pulse" />

        {/* Progress bar skeleton */}
        <div className="w-full max-w-md mb-4">
          <div className="flex justify-end mb-1">
            <div className="w-8 h-4 bg-[#1a1a2e] rounded animate-pulse" />
          </div>
          <div className="w-full h-[6px] bg-[#1a2744] rounded-full" />
        </div>

        {/* Cards skeleton */}
        <div className="w-full max-w-md overflow-hidden mb-4">
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex-shrink-0 w-20 h-24 bg-[#1a1a2e] rounded-lg animate-pulse" />
            ))}
          </div>
        </div>

        {/* Quiz card skeleton */}
        <div className="w-full max-w-md bg-[#0d0d1a]/95 rounded-xl border-2 border-[#D4AF37]/30 p-5">
          <div className="flex justify-center mb-4">
            <div className="w-32 h-8 bg-[#2a2a3e] rounded-full animate-pulse" />
          </div>
          <div className="w-full h-16 bg-[#2a2a3e] rounded mb-5 animate-pulse" />
          <div className="space-y-3">
            <div className="w-full h-12 bg-[#F9D423]/30 rounded-lg animate-pulse" />
            <div className="w-full h-12 bg-[#F9D423]/30 rounded-lg animate-pulse" />
            <div className="w-full h-12 bg-[#F9D423]/30 rounded-lg animate-pulse" />
            <div className="w-full h-12 bg-[#F9D423]/30 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}
