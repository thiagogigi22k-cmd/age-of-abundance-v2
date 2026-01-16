import { Suspense } from "react"
import Step23Content from "./step23-content"

export default function Step23Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <Step23Content />
    </Suspense>
  )
}
