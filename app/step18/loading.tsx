export default function Loading() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center px-4 pt-6">
      {/* Skeleton Header */}
      <div className="w-20 h-20 bg-gray-800 rounded-full animate-pulse mb-4" />
      <div className="w-48 h-6 bg-gray-800 rounded animate-pulse mb-3" />
      <div className="w-24 h-4 bg-gray-800 rounded animate-pulse mb-2" />
      <div className="w-32 h-8 bg-gray-800 rounded animate-pulse mb-4" />

      {/* Progress bar skeleton */}
      <div className="w-full max-w-md mb-4">
        <div className="flex justify-end mb-1">
          <div className="w-8 h-4 bg-gray-800 rounded animate-pulse" />
        </div>
        <div className="w-full h-2 bg-gray-800 rounded-full animate-pulse" />
      </div>

      {/* Cards skeleton - 2 rows */}
      <div className="w-full max-w-md mb-4">
        <div className="flex gap-2 mb-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-20 h-24 bg-gray-800 rounded-lg animate-pulse flex-shrink-0" />
          ))}
        </div>
        <div className="flex gap-2">
          <div className="w-20 h-24 bg-gray-800 rounded-lg animate-pulse flex-shrink-0" />
        </div>
      </div>

      {/* Quiz card skeleton */}
      <div className="w-full max-w-md bg-gray-900 rounded-xl p-5">
        <div className="flex justify-center mb-4">
          <div className="w-32 h-6 bg-gray-800 rounded-full animate-pulse" />
        </div>
        <div className="w-full h-16 bg-gray-800 rounded animate-pulse mb-5" />
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-full h-12 bg-gray-800 rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  )
}
