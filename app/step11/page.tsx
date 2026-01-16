import { Suspense } from "react"
import Step11Content from "./step11-content"

export default function Step11Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen w-full flex items-center justify-center bg-black">
          <div className="w-8 h-8 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <Step11Content />
    </Suspense>
  )
}
