"use client"

import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"

export default function UnlockedContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const name = searchParams.get("name") || "Friend"
  const amount = searchParams.get("amount") || "0"

  // Calculate new balance (amount × 100)
  const calculatedBalance = Number.parseFloat(amount) * 100

  const displayBalance = calculatedBalance.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  // For URL, use simple format without commas to avoid parsing issues
  const urlBalance = calculatedBalance.toFixed(2)

  const handleContinue = () => {
    router.push(`/step2?name=${encodeURIComponent(name)}&balance=${encodeURIComponent(urlBalance)}`)
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
        {/* Dark overlay for top section */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-transparent"
          style={{ height: "70%" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center px-4 pt-8 pb-8">
        {/* Logo - small */}
        <div className="mb-6">
          <Image
            src="/images/sem-20nome-20-281080-20x-201080-20px-29-20-281-29.png"
            alt="Logo"
            width={70}
            height={70}
            className="object-contain"
            priority
          />
        </div>

        {/* Unlocked Card */}
        <div className="w-full max-w-sm bg-[#0d0d1a]/95 rounded-xl border-2 border-[#D4AF37] p-5">
          {/* UNLOCKED Header */}
          <div className="flex items-center justify-center gap-2 mb-5">
            {/* Checkmark icon */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#D4AF37]">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path
                d="M8 12l2.5 2.5L16 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="text-[#D4AF37] text-xl font-bold tracking-wide">UNLOCKED!</span>

            {/* Spinning 4-point star */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#D4AF37" className="animate-spin-slow">
              <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
            </svg>
          </div>

          {/* Golden river image */}
          <div className="flex justify-center mb-5">
            <div className="w-40 h-40 rounded-xl border-2 border-[#D4AF37] overflow-hidden">
              <Image
                src="/mystical-golden-river-with-gold-coins-and-magical-.jpg"
                alt="Golden abundance"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* 100x Multiplication title */}
          <h2 className="text-[#D4AF37] text-2xl font-bold text-center mb-3">100x Multiplication</h2>

          {/* Personalized message */}
          <p className="text-white text-center text-base mb-5 leading-relaxed">
            {name}, today I'm adding 100x more to your account — do you believe?
          </p>

          {/* New Balance box */}
          <div className="bg-[#1a1a2e] rounded-lg py-3 px-4 mb-4">
            <p className="text-center">
              <span className="text-[#D4AF37] font-bold text-lg">New Balance: </span>
              <span className="text-[#D4AF37] font-bold text-lg">${displayBalance}</span>
            </p>
          </div>

          {/* YES Button */}
          <button
            onClick={handleContinue}
            className="w-full bg-[#F9D423] text-black font-bold py-3.5 px-6 rounded-lg text-base hover:bg-[#E5C31F] transition-colors flex items-center justify-center gap-2"
          >
            {/* Lightning icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            YES! I receive 100x more!
          </button>
        </div>
      </div>

      {/* Custom CSS for slow spin animation */}
      <style jsx global>{`
        @keyframes spinStar {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spinStar 2s linear infinite;
        }
      `}</style>
    </div>
  )
}
