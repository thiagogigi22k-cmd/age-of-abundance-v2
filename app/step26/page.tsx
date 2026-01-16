import { Suspense } from "react"
import Step26Content from "./step26-content"

export default function Step26Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <Step26Content />
    </Suspense>
  )
}
