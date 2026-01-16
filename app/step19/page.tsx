import { Suspense } from "react"
import Step19Content from "./step19-content"

export default function Step19Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen w-full bg-black flex items-center justify-center">
          <div className="animate-pulse text-[#D4AF37]">Loading...</div>
        </div>
      }
    >
      <Step19Content />
    </Suspense>
  )
}
