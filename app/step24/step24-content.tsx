"use client"

import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"

export default function Step24Content() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const name = searchParams.get("name") || "A"
  const balance = searchParams.get("balance") || "2000101.00"

  const handleContinue = () => {
    router.push(`/step25?name=${encodeURIComponent(name)}&balance=${encodeURIComponent(balance)}`)
  }

  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/design-20sem-20nome-20-281-29.png"
          alt="Background"
          fill
          className="object-cover object-bottom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Unlocked Card */}
        <div className="w-full max-w-sm bg-[#0d0d1a]/95 rounded-2xl border-2 border-[#D4AF37] p-6 shadow-2xl shadow-[#D4AF37]/20">
          {/* UNLOCKED! Header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            {/* Pulsing Checkmark Icon */}
            <div className="w-8 h-8 rounded-full border-2 border-[#D4AF37] flex items-center justify-center animate-pulse-check">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#D4AF37]">
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* UNLOCKED! Text */}
            <h1 className="text-[#D4AF37] text-2xl font-bold tracking-wide">UNLOCKED!</h1>

            {/* Spinning Star Icon */}
            <div className="animate-spin-slow">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#D4AF37]">
                <path
                  d="M12 2L14.09 8.26L20.18 8.63L15.54 12.74L16.91 18.72L12 15.27L7.09 18.72L8.46 12.74L3.82 8.63L9.91 8.26L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Achievement Image - 100x Boost */}
          <div className="flex justify-center mb-6">
            <div className="w-36 h-36 rounded-xl border-2 border-[#D4AF37] overflow-hidden bg-[#1a1a2e]">
              <Image
                src="/images/100x-boost.jpg"
                alt="100x Boost"
                width={144}
                height={144}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Achievement Title */}
          <h2 className="text-[#D4AF37] text-2xl font-bold text-center mb-3">100x Boost</h2>

          {/* Achievement Description */}
          <p className="text-gray-300 text-base text-center mb-6 leading-relaxed">
            ⚡ Your Manifestation Power Just Multiplied by 100x
          </p>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            className="w-full bg-[#F9D423] hover:bg-[#E5C31F] text-black font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-black">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" />
            </svg>
            <span className="text-lg">Continue Evolution</span>
          </button>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spinSlow 3s linear infinite;
        }
        @keyframes pulseCheck {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.8;
          }
        }
        .animate-pulse-check {
          animation: pulseCheck 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
