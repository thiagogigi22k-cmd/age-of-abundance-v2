import { Suspense } from "react"
import Step5Content from "./step5-content"

export default function Step5Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      }
    >
      <Step5Content />
    </Suspense>
  )
}
