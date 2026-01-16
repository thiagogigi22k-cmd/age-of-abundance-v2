export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden bg-black">
      {/* Content skeleton */}
      <div className="relative z-10 w-full flex flex-col items-center px-4 pt-6 pb-8 animate-pulse">
        {/* Logo skeleton */}
        <div className="w-full max-w-md flex items-center justify-center mb-4">
          <div className="w-20 h-20 bg-gray-800 rounded-full" />
        </div>

        {/* Greeting skeleton */}
        <div className="h-6 bg-gray-800 rounded w-64 mb-3" />

        {/* Balance skeleton */}
        <div className="h-4 bg-gray-800 rounded w-32 mb-1" />
        <div className="h-8 bg-gray-800 rounded w-28 mb-4" />

        {/* Progress bar skeleton */}
        <div className="w-full max-w-md mb-4">
          <div className="flex justify-end mb-1">
            <div className="h-4 bg-gray-800 rounded w-8" />
          </div>
          <div className="h-[6px] bg-[#1a2744] rounded-full w-full" />
        </div>

        {/* Cards skeleton */}
        <div className="w-full max-w-md overflow-x-auto mb-4">
          <div className="flex gap-2 pb-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex-shrink-0 w-20 h-24 bg-gray-800 rounded-lg" />
            ))}
          </div>
        </div>

        {/* Quiz card skeleton */}
        <div className="w-full max-w-md bg-[#0d0d1a]/95 rounded-xl border-2 border-gray-700 p-5">
          <div className="flex justify-center mb-4">
            <div className="h-8 bg-gray-800 rounded-full w-44" />
          </div>
          <div className="h-6 bg-gray-800 rounded w-full mb-2" />
          <div className="h-6 bg-gray-800 rounded w-3/4 mx-auto mb-5" />
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-800 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
