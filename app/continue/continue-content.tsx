"use client"

import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"

export default function ContinueContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const name = searchParams.get("name") || "Friend"

  const handleContinue = () => {
    router.push(`/journey?name=${encodeURIComponent(name)}`)
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/design-20sem-20nome-20-281-29.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content wrapper - adjusted vertical centering and spacing */}
      <div className="relative z-10 w-full max-w-sm px-4 flex flex-col items-center">
        {/* Logo - smaller size like reference */}
        <div className="mb-4 flex justify-center">
          <div className="w-28 h-28 relative">
            <Image
              src="/images/sem-20nome-20-281080-20x-201080-20px-29-20-281-29.png"
              alt="Logo"
              width={112}
              height={112}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>

        {/* Dark card container - adjusted padding and background opacity */}
        <div className="w-full bg-[#0d0d1a]/95 rounded-xl border-2 border-[#D4AF37] p-5">
          {/* Name heading with spinning star - star positioned to the right */}
          <div className="flex items-start justify-between mb-5">
            <h2 className="text-xl font-bold text-white leading-tight">{name}, before we continue...</h2>
            {/* Spinning star - 4-point star like reference */}
            <svg
              className="w-5 h-5 text-[#D4AF37] flex-shrink-0 ml-2 animate-spin"
              style={{ animationDuration: "2s" }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
            </svg>
          </div>

          {/* Inner card with quote - matching border and spacing */}
          <div className="w-full bg-transparent rounded-lg border border-[#D4AF37] p-4 mb-5">
            <p className="text-[#D4AF37] font-semibold text-center mb-3 text-sm">Repeat this phrase out loud:</p>
            <p className="text-white italic text-center text-base leading-relaxed">
              "The life of my dreams begins
              <br />
              with my choice."
            </p>
          </div>

          {/* Instruction - matching gray color and size */}
          <p className="text-gray-500 text-xs text-center mb-5">Only click continue after repeating it out loud.</p>

          <button
            onClick={handleContinue}
            className="w-full bg-[#F9D423] text-black font-bold py-3.5 px-6 rounded-lg text-base flex items-center justify-center gap-2 hover:bg-[#E5C31F] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            Continue Journey
          </button>
        </div>
      </div>
    </div>
  )
}
