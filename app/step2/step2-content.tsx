"use client"

import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import { useState } from "react"

export default function Step2Content() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const name = searchParams.get("name") || "Friend"
  const balance = searchParams.get("balance") || "0.00"
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleOptionClick = (index: number) => {
    setSelectedOption(index)
    setIsLoading(true)

    setTimeout(() => {
      router.push(`/step3?name=${encodeURIComponent(name)}&balance=${encodeURIComponent(balance)}`)
    }, 1000)
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
          style={{ height: "60%" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center px-4 pt-6 pb-8">
        {/* Logo - small */}
        <div className="mb-4">
          <Image
            src="/images/sem-20nome-20-281080-20x-201080-20px-29-20-281-29.png"
            alt="Logo"
            width={60}
            height={60}
            className="object-contain"
            priority
          />
        </div>

        {/* Greeting */}
        <h1 className="text-[#D4AF37] text-xl font-bold text-center mb-3">Hello, {name} Your Journey has begun...</h1>

        {/* Account Balance Section */}
        <p className="text-gray-400 text-sm tracking-wider mb-1">ACCOUNT BALANCE</p>
        <p className="text-[#D4AF37] text-3xl font-bold mb-4 animate-pulse-gold">${balance}</p>

        {/* Progress Bar Section */}
        <div className="w-full max-w-md mb-4">
          <p className="text-[#D4AF37] text-sm italic animate-pulse-gold mb-2">
            Your energy is aligning with the divine...
          </p>
          <div className="flex justify-end mb-1">
            <span className="text-gray-400 text-sm">10%</span>
          </div>
          <div className="relative w-full h-[6px] bg-[#1a2744] rounded-full">
            {/* Yellow indicator pill on left */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-3 bg-[#F9D423] rounded-full z-10" />
            {/* Yellow progress fill */}
            <div className="absolute left-4 top-0 h-full bg-[#F9D423] rounded-r-full" style={{ width: "10%" }} />
          </div>
        </div>

        {/* Achievement Cards Row */}
        <div className="w-full max-w-md overflow-x-auto mb-4">
          <div className="flex gap-2 pb-2">
            {/* First card - Unlocked (100x Multiplication) */}
            <div className="flex-shrink-0 w-20 bg-[#0d0d1a] rounded-lg border border-[#D4AF37] p-1.5 flex flex-col items-center">
              <div className="w-14 h-14 rounded-lg overflow-hidden mb-1 border border-[#D4AF37]">
                <Image
                  src="/mystical-golden-river-with-gold-coins-and-magical-.jpg"
                  alt="100x Multiplication"
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-[#D4AF37] text-[10px] font-bold text-center leading-tight">
                100x
                <br />
                Multiplication
              </span>
            </div>

            {/* Locked cards */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex-shrink-0 w-20 bg-[#1a1a2e] rounded-lg border border-gray-600 p-1.5 flex flex-col items-center justify-center"
              >
                <div className="w-14 h-14 rounded-lg bg-[#2a2a3e] flex items-center justify-center mb-1">
                  {/* Lock icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-500">
                    <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 11V7a4 4 0 118 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-gray-500 text-[10px] font-medium">Locked</span>
              </div>
            ))}
          </div>
        </div>

        {/* Question Card */}
        <div className="w-full max-w-md bg-[#0d0d1a]/95 rounded-xl border-2 border-[#D4AF37] p-5">
          {/* Financial Awakening Badge */}
          <div className="flex justify-center mb-4">
            <span className="bg-[#2a2a3e] text-gray-300 text-sm px-4 py-1.5 rounded-full">Financial Awakening</span>
          </div>

          {isLoading ? (
            <div className="flex flex-col items-center py-8">
              {/* Spinning circle */}
              <div className="w-12 h-12 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mb-4" />
              {/* Processing text */}
              <p className="text-[#D4AF37] text-base font-medium mb-2">Processing your answer...</p>
              {/* Animated dots */}
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span
                  className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          ) : (
            <>
              {/* Question */}
              <p className="text-white text-lg font-bold text-center mb-5 leading-relaxed">
                {name}, do you feel like you're living the life God dreamed for you?
              </p>

              {/* Answer Options */}
              <div className="space-y-3">
                {[
                  "Yes, but I know I can live more",
                  "No, I feel I'm far from it",
                  "Sometimes I wonder about this...",
                ].map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    className={`w-full bg-[#F9D423] text-black font-medium py-3.5 px-4 rounded-lg text-left transition-all ${
                      selectedOption === index
                        ? "ring-4 ring-[#D4AF37] ring-offset-2 ring-offset-[#0d0d1a] scale-[1.02]"
                        : "hover:bg-[#E5C31F]"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Custom CSS for pulsing gold animation */}
      <style jsx global>{`
        @keyframes pulseGold {
          0%,
          100% {
            color: #d4af37;
          }
          50% {
            color: #8b7520;
          }
        }
        .animate-pulse-gold {
          animation: pulseGold 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
