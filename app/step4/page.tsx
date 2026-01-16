import { Suspense } from "react"
import Step4Content from "./step4-content"

export default function Step4Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen w-full flex items-center justify-center bg-black">
          <div className="w-12 h-12 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <Step4Content />
    </Suspense>
  )
}
