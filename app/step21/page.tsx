import { Suspense } from "react"
import Step21Content from "./step21-content"

export default function Step21Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen w-full bg-black flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <Step21Content />
    </Suspense>
  )
}
