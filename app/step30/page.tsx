import { Suspense } from "react"
import Step30Content from "./step30-content"

export default function Step30Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <Step30Content />
    </Suspense>
  )
}
