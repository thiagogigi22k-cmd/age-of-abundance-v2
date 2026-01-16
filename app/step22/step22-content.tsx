"use client"

import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"

export default function Step22Content() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const name = searchParams.get("name") || "A"
  const balance = searchParams.get("balance") || "101.00"

  const calculateNewBalance = () => {
    const currentBalance = Number.parseFloat(balance.replace(/,/g, "")) || 101
    const newBalance = currentBalance + 2000000
    return newBalance.toFixed(2).replace(/,/g, "")
  }

  const handleContinue = () => {
    const newBalance = calculateNewBalance()
    router.push(`/step23?name=${encodeURIComponent(name)}&balance=${encodeURIComponent(newBalance)}`)
  }

  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden bg-black">
      {/* Background - positioned at bottom */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/design-20sem-20nome-20-281-29.png"
          alt="Background"
          fill
          className="object-cover object-bottom"
          priority
        />
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Message Card */}
        <div className="w-full max-w-sm bg-[#0d0d1a]/95 rounded-2xl border-2 border-[#D4AF37] p-6 shadow-2xl shadow-[#D4AF37]/20">
          {/* Abundance Image */}
          <div className="flex justify-center mb-6">
            <div className="w-40 h-40 rounded-xl border-2 border-[#D4AF37] overflow-hidden bg-[#1a1a2e]">
              <Image
                src="/images/abundance.jpg"
                alt="Abundance"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* User Name */}
          <h2 className="text-[#D4AF37] text-2xl font-bold text-center mb-4">{name}</h2>

          {/* Motivational Text */}
          <p className="text-gray-300 text-base text-center mb-8 leading-relaxed">
            Your manifestation potential depends on your choice, think big to manifest big things, you are the size of
            your courage.
          </p>

          {/* Continue Journey Button */}
          <button
            onClick={handleContinue}
            className="w-full bg-[#F9D423] hover:bg-[#E5C31F] text-black font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            {/* Lightning Bolt Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-black">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" />
            </svg>
            <span className="text-lg">Continue Journey</span>
          </button>
        </div>
      </div>
    </div>
  )
}
