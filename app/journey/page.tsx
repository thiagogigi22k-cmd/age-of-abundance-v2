import { Suspense } from "react"
import JourneyContent from "./journey-content"

export default function JourneyPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      }
    >
      <JourneyContent />
    </Suspense>
  )
}
