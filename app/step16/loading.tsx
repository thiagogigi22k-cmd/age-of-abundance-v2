export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden bg-black">
      <div className="relative z-10 w-full flex flex-col items-center px-4 pt-6 pb-8">
        <div className="w-20 h-20 bg-gray-800 rounded-full animate-pulse mb-4" />
        <div className="w-64 h-6 bg-gray-800 rounded animate-pulse mb-3" />
        <div className="w-32 h-4 bg-gray-800 rounded animate-pulse mb-1" />
        <div className="w-40 h-8 bg-gray-800 rounded animate-pulse mb-4" />
        <div className="w-full max-w-md h-2 bg-gray-800 rounded animate-pulse mb-4" />
        <div className="w-full max-w-md flex gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-20 h-24 bg-gray-800 rounded-lg animate-pulse" />
          ))}
        </div>
        <div className="w-full max-w-md h-80 bg-gray-800 rounded-xl animate-pulse" />
      </div>
    </div>
  )
}
