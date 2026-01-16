import { Suspense } from "react"
import Step15Content from "./step15-content"

export default function Step15Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen w-full flex items-center justify-center bg-black">
          <div className="w-8 h-8 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <Step15Content />
    </Suspense>
  )
}
