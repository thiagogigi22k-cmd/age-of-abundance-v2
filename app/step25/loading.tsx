export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden bg-black">
      <div className="relative z-10 w-full flex flex-col items-center px-4 pt-6 pb-8">
        <div className="w-20 h-20 bg-gray-800 rounded-full mb-4 animate-pulse" />
        <div className="w-64 h-6 bg-gray-800 rounded mb-3 animate-pulse" />
        <div className="w-32 h-4 bg-gray-800 rounded mb-2 animate-pulse" />
        <div className="w-48 h-8 bg-gray-800 rounded mb-4 animate-pulse" />
        <div className="w-full max-w-md h-2 bg-gray-800 rounded mb-4 animate-pulse" />
        <div className="w-full max-w-md flex flex-wrap gap-2 mb-4">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-[72px] h-[90px] bg-gray-800 rounded-lg animate-pulse" />
          ))}
        </div>
        <div className="w-full max-w-md h-64 bg-gray-800 rounded-xl animate-pulse" />
      </div>
    </div>
  )
}
