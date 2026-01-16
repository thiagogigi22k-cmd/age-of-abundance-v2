export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black">
      <div className="w-full max-w-sm bg-[#0d0d1a]/95 rounded-2xl border-2 border-[#D4AF37]/30 p-6 animate-pulse">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20" />
          <div className="h-6 w-32 bg-[#D4AF37]/20 rounded" />
          <div className="w-7 h-7 bg-[#D4AF37]/20 rounded" />
        </div>
        <div className="flex justify-center mb-6">
          <div className="w-36 h-36 rounded-xl bg-[#1a1a2e] border-2 border-[#D4AF37]/30" />
        </div>
        <div className="h-6 w-40 bg-[#D4AF37]/20 rounded mx-auto mb-3" />
        <div className="h-4 w-56 bg-gray-700/50 rounded mx-auto mb-6" />
        <div className="h-14 bg-[#F9D423]/30 rounded-lg" />
      </div>
    </div>
  )
}
