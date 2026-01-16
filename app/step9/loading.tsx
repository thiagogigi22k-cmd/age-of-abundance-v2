export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden bg-black">
      {/* Background skeleton */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-black/95 to-black/80" />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center px-4 pt-6 pb-8">
        {/* Header with Logo skeleton */}
        <div className="w-full max-w-md flex items-center justify-center mb-4">
          <div className="flex flex-col items-center">
            <div className="w-[60px] h-[60px] bg-zinc-800 rounded-lg animate-pulse" />
            <div className="w-16 h-3 bg-zinc-800 rounded animate-pulse mt-1" />
            <div className="w-16 h-3 bg-zinc-800 rounded animate-pulse mt-0.5" />
          </div>
        </div>

        {/* Greeting skeleton */}
        <div className="w-64 h-6 bg-zinc-800 rounded animate-pulse mb-3" />

        {/* Account Balance skeleton */}
        <div className="w-32 h-4 bg-zinc-800 rounded animate-pulse mb-1" />
        <div className="w-28 h-10 bg-zinc-800 rounded animate-pulse mb-4" />

        {/* Progress Bar skeleton */}
        <div className="w-full max-w-md mb-4">
          <div className="flex justify-end mb-1">
            <div className="w-10 h-4 bg-zinc-800 rounded animate-pulse" />
          </div>
          <div className="w-full h-[6px] bg-[#1a2744] rounded-full" />
        </div>

        {/* Achievement Cards skeleton */}
        <div className="w-full max-w-md overflow-x-auto mb-4">
          <div className="flex gap-2 pb-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex-shrink-0 w-20 h-24 bg-zinc-800 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>

        {/* Question Card skeleton */}
        <div className="w-full max-w-md bg-[#0d0d1a]/95 rounded-xl border-2 border-zinc-700 p-5">
          <div className="flex justify-center mb-4">
            <div className="w-40 h-8 bg-zinc-800 rounded-full animate-pulse" />
          </div>
          <div className="w-full h-16 bg-zinc-800 rounded animate-pulse mb-5" />
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-full h-14 bg-zinc-800 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
