import { Suspense } from "react"
import Step8Content from "./step8-content"

export default function Step8Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen w-full flex items-center justify-center bg-black">
          <div className="text-[#D4AF37]">Loading...</div>
        </div>
      }
    >
      <Step8Content />
    </Suspense>
  )
}
