import { Suspense } from "react"
import Step27Content from "./step27-content"

export default function Step27Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="animate-pulse text-[#D4AF37]">Loading...</div>
        </div>
      }
    >
      <Step27Content />
    </Suspense>
  )
}
