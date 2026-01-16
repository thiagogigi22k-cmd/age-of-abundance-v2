export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden bg-black">
      <div className="relative z-10 w-full flex flex-col items-center px-4 pt-6 pb-8">
        {/* Skeleton Header */}
        <div className="w-20 h-20 bg-gray-800 rounded-full mb-4 animate-pulse" />
        <div className="w-64 h-6 bg-gray-800 rounded mb-3 animate-pulse" />
        <div className="w-32 h-4 bg-gray-800 rounded mb-1 animate-pulse" />
        <div className="w-48 h-8 bg-gray-800 rounded mb-4 animate-pulse" />

        {/* Skeleton Progress */}
        <div className="w-full max-w-md mb-4">
          <div className="w-full h-2 bg-gray-800 rounded-full animate-pulse" />
        </div>

        {/* Skeleton Cards */}
        <div className="w-full max-w-md mb-4">
          <div className="flex gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-[72px] h-[90px] bg-gray-800 rounded-lg animate-pulse" />
            ))}
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-[72px] h-[90px] bg-gray-800 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>

        {/* Skeleton Quiz */}
        <div className="w-full max-w-md bg-gray-900 rounded-xl p-5">
          <div className="w-32 h-8 bg-gray-800 rounded-full mx-auto mb-4 animate-pulse" />
          <div className="w-full h-20 bg-gray-800 rounded mb-4 animate-pulse" />
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-full h-14 bg-gray-800 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
