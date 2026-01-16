import { Suspense } from "react"
import Step32Content from "./step32-content"

export default function Step32Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen w-full bg-black flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <Step32Content />
    </Suspense>
  )
}
