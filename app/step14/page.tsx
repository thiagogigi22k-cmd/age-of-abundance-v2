import { Suspense } from "react"
import Step14Content from "./step14-content"

export default function Step14Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <Step14Content />
    </Suspense>
  )
}
