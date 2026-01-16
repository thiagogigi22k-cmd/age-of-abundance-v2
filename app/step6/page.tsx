import { Suspense } from "react"
import Step6Content from "./step6-content"

export default function Step6Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#D4AF37] border-t-transparent" />
        </div>
      }
    >
      <Step6Content />
    </Suspense>
  )
}
