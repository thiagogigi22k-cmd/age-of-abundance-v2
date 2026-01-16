export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden bg-black">
      <div className="relative z-10 w-full flex flex-col items-center px-4 pt-6 pb-8">
        <div className="w-20 h-20 bg-gray-800 rounded-full animate-pulse mb-4" />
        <div className="h-6 w-48 bg-gray-800 rounded animate-pulse mb-3" />
        <div className="h-4 w-32 bg-gray-800 rounded animate-pulse mb-1" />
        <div className="h-8 w-40 bg-gray-800 rounded animate-pulse mb-4" />
        <div className="w-full max-w-md h-2 bg-gray-800 rounded animate-pulse mb-4" />
        <div className="w-full max-w-md flex gap-2 mb-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-[72px] h-24 bg-gray-800 rounded-lg animate-pulse" />
          ))}
        </div>
        <div className="w-full max-w-md flex gap-2 mb-4">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="w-[72px] h-24 bg-gray-800 rounded-lg animate-pulse" />
          ))}
        </div>
        <div className="w-full max-w-md h-80 bg-gray-800 rounded-xl animate-pulse" />
      </div>
    </div>
  )
}
