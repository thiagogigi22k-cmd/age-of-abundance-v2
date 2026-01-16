"use client"

import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import { useState } from "react"

export default function Step25Content() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const name = searchParams.get("name") || "A"
  const balance = searchParams.get("balance") || "2000101.00"
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Format balance with commas for display
  const formatBalance = (value: string) => {
    const num = Number.parseFloat(value.replace(/,/g, "")) || 0
    return num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }

  const handleOptionClick = (index: number) => {
    setSelectedOption(index)
    setIsLoading(true)

    setTimeout(() => {
      router.push(`/step26?name=${encodeURIComponent(name)}&balance=${encodeURIComponent(balance)}`)
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
        {/* Header with Logo - NO TEXT */}
        <div className="w-full max-w-md flex items-center justify-center mb-4">
          <div className="flex flex-col items-center">
            <Image
              src="/images/sem-20nome-20-281080-20x-201080-20px-29-20-281-29.png"
              alt="Logo"
              width={80}
              height={80}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Greeting */}
        <h1 className="text-[#D4AF37] text-xl font-bold text-center mb-3">Hello, {name} Your Journey has begun...</h1>

        {/* Account Balance Section */}
        <p className="text-gray-400 text-sm tracking-wider mb-1">ACCOUNT BALANCE</p>
        <p className="text-[#D4AF37] text-3xl font-bold mb-4 animate-pulse-gold">${formatBalance(balance)}</p>

        {/* Progress Bar Section - 76% */}
        <div className="w-full max-w-md mb-4">
          <div className="flex justify-end mb-1">
            <span className="text-gray-400 text-sm">76%</span>
          </div>
          <div className="relative w-full h-[6px] bg-[#1a2744] rounded-full">
            {/* Yellow indicator pill on left */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-3 bg-[#F9D423] rounded-full z-10" />
            {/* Yellow progress fill */}
            <div className="absolute left-4 top-0 h-full bg-[#F9D423] rounded-r-full" style={{ width: "76%" }} />
          </div>
        </div>

        {/* Achievement Cards - 9 cards: 5 on first row, 4 on second row */}
        <div className="w-full max-w-md mb-4 px-2">
          {/* First row - 5 cards */}
          <div className="grid grid-cols-5 gap-1.5 mb-2">
            {/* First card - I Choose My Future */}
            <div className="bg-[#0d0d1a] rounded-lg border border-[#D4AF37] p-1 flex flex-col items-center">
              <div className="w-10 h-10 rounded-lg overflow-hidden mb-1 border border-[#D4AF37]">
                <Image
                  src="/images/man-silhouette-stars.jpg"
                  alt="I Choose My Future"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-[#D4AF37] text-[8px] font-bold text-center leading-tight min-h-[24px]">
                I Choose
                <br />
                My Future
              </span>
            </div>

            {/* Second card - Faith Decision */}
            <div className="bg-[#0d0d1a] rounded-lg border border-[#D4AF37] p-1 flex flex-col items-center">
              <div className="w-10 h-10 rounded-lg overflow-hidden mb-1 border border-[#D4AF37]">
                <Image
                  src="/images/praying-hands.jpg"
                  alt="Faith Decision"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-[#D4AF37] text-[8px] font-bold text-center leading-tight min-h-[24px]">
                Faith
                <br />
                Decision
              </span>
            </div>

            {/* Third card - Dream Home */}
            <div className="bg-[#0d0d1a] rounded-lg border border-[#D4AF37] p-1 flex flex-col items-center">
              <div className="w-10 h-10 rounded-lg overflow-hidden mb-1 border border-[#D4AF37]">
                <Image
                  src="/images/dream-home.jpg"
                  alt="Dream Home"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-[#D4AF37] text-[8px] font-bold text-center leading-tight min-h-[24px]">
                Dream
                <br />
                Home
              </span>
            </div>

            {/* Fourth card - Dream Car */}
            <div className="bg-[#0d0d1a] rounded-lg border border-[#D4AF37] p-1 flex flex-col items-center">
              <div className="w-10 h-10 rounded-lg overflow-hidden mb-1 border border-[#D4AF37]">
                <Image
                  src="/images/dream-car.jpg"
                  alt="Dream Car"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-[#D4AF37] text-[8px] font-bold text-center leading-tight min-h-[24px]">
                Dream Car
              </span>
            </div>

            {/* Fifth card - Happy Family */}
            <div className="bg-[#0d0d1a] rounded-lg border border-[#D4AF37] p-1 flex flex-col items-center">
              <div className="w-10 h-10 rounded-lg overflow-hidden mb-1 border border-[#D4AF37]">
                <Image
                  src="/images/happy-family.jpg"
                  alt="Happy Family"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-[#D4AF37] text-[8px] font-bold text-center leading-tight min-h-[24px]">
                Happy
                <br />
                Family
              </span>
            </div>
          </div>

          {/* Second row - 4 cards */}
          <div className="grid grid-cols-5 gap-1.5">
            {/* Sixth card - Perfect Health */}
            <div className="bg-[#0d0d1a] rounded-lg border border-[#D4AF37] p-1 flex flex-col items-center">
              <div className="w-10 h-10 rounded-lg overflow-hidden mb-1 border border-[#D4AF37]">
                <Image
                  src="/images/perfect-health.jpg"
                  alt="Perfect Health"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-[#D4AF37] text-[8px] font-bold text-center leading-tight min-h-[24px]">
                Perfect
                <br />
                Health
              </span>
            </div>

            {/* Seventh card - Abundance */}
            <div className="bg-[#0d0d1a] rounded-lg border border-[#D4AF37] p-1 flex flex-col items-center">
              <div className="w-10 h-10 rounded-lg overflow-hidden mb-1 border border-[#D4AF37]">
                <Image
                  src="/images/abundance.jpg"
                  alt="Abundance"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-[#D4AF37] text-[8px] font-bold text-center leading-tight min-h-[24px]">
                Abundance
              </span>
            </div>

            {/* Eighth card - 100x Boost */}
            <div className="bg-[#0d0d1a] rounded-lg border border-[#D4AF37] p-1 flex flex-col items-center">
              <div className="w-10 h-10 rounded-lg overflow-hidden mb-1 border border-[#D4AF37]">
                <Image
                  src="/images/100x-boost.jpg"
                  alt="100x Boost"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-[#D4AF37] text-[8px] font-bold text-center leading-tight min-h-[24px]">
                100x
                <br />
                Boost
              </span>
            </div>

            {/* Ninth card - 100x Multiplication */}
            <div className="bg-[#0d0d1a] rounded-lg border border-[#D4AF37] p-1 flex flex-col items-center">
              <div className="w-10 h-10 rounded-lg overflow-hidden mb-1 border border-[#D4AF37]">
                <Image
                  src="/mystical-golden-river-with-gold-coins-and-magical-.jpg"
                  alt="100x Multiplication"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-[#D4AF37] text-[8px] font-bold text-center leading-tight min-h-[24px]">
                100x
                <br />
                Multiplication
              </span>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="w-full max-w-md bg-[#0d0d1a]/95 rounded-xl border-2 border-[#D4AF37] p-5">
          {/* Breaking Blocks Badge */}
          <div className="flex justify-center mb-4">
            <span className="bg-[#2a2a3e] text-gray-300 text-sm px-4 py-1.5 rounded-full">Breaking Blocks</span>
          </div>

          {isLoading ? (
            <div className="flex flex-col items-center py-8">
              <div className="w-12 h-12 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-[#D4AF37] text-base font-medium mb-2">Processing your answer...</p>
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
                Do you feel there's something spiritual or emotional blocking you?
              </p>

              {/* Answer Options - 3 options */}
              <div className="space-y-3">
                {["Yes, a weight I can't explain", "Sometimes I feel this", "No"].map((option, index) => (
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
