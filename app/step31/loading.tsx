export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden bg-black">
      <div className="relative z-10 w-full flex flex-col items-center px-4 pt-6 pb-8">
        {/* Header skeleton */}
        <div className="w-20 h-20 bg-gray-800 rounded-full mb-4 animate-pulse" />
        <div className="w-48 h-6 bg-gray-800 rounded mb-3 animate-pulse" />
        <div className="w-24 h-4 bg-gray-800 rounded mb-1 animate-pulse" />
        <div className="w-40 h-8 bg-gray-800 rounded mb-4 animate-pulse" />

        {/* Progress bar skeleton */}
        <div className="w-full max-w-md mb-4">
          <div className="w-full h-2 bg-gray-800 rounded-full animate-pulse" />
        </div>

        {/* Cards skeleton */}
        <div className="w-full max-w-md mb-4">
          <div className="flex gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-[72px] h-20 bg-gray-800 rounded-lg animate-pulse" />
            ))}
          </div>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-[72px] h-20 bg-gray-800 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>

        {/* Quiz skeleton */}
        <div className="w-full max-w-md bg-gray-900 rounded-xl p-5 animate-pulse">
          <div className="w-24 h-6 bg-gray-800 rounded-full mx-auto mb-4" />
          <div className="w-full h-16 bg-gray-800 rounded mb-4" />
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-full h-12 bg-gray-800 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
