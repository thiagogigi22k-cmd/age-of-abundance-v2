import { Suspense } from "react"
import UnlockedContent from "./unlocked-content"

export default function UnlockedPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-[#D4AF37] text-lg">Loading...</div>
        </div>
      }
    >
      <UnlockedContent />
    </Suspense>
  )
}
