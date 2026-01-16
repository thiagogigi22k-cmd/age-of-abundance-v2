import { Suspense } from "react"
import Step2Content from "./step2-content"

export default function Step2Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen w-full flex items-center justify-center bg-black">
          <div className="text-[#D4AF37] text-lg">Loading...</div>
        </div>
      }
    >
      <Step2Content />
    </Suspense>
  )
}
