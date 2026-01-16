import { Suspense } from "react"
import Step18Content from "./step18-content"

export default function Step18Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-[#D4AF37]">Loading...</div>
        </div>
      }
    >
      <Step18Content />
    </Suspense>
  )
}
