export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/70" />
      <div className="relative z-10 w-full flex flex-col items-center px-4 pt-6 pb-8">
        <div className="w-20 h-20 rounded-full bg-gray-800 animate-pulse mb-4" />
        <div className="h-6 w-48 bg-gray-800 rounded animate-pulse mb-3" />
        <div className="h-4 w-32 bg-gray-800 rounded animate-pulse mb-2" />
        <div className="h-8 w-40 bg-gray-800 rounded animate-pulse mb-4" />
        <div className="w-full max-w-md h-2 bg-gray-800 rounded animate-pulse mb-4" />
        <div className="w-full max-w-md flex flex-wrap gap-2 mb-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-[72px] h-24 bg-gray-800 rounded-lg animate-pulse" />
          ))}
        </div>
        <div className="w-full max-w-md h-72 bg-gray-800 rounded-xl animate-pulse" />
      </div>
    </div>
  )
}
