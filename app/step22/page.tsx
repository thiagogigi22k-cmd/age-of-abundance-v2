import { Suspense } from "react"
import Step22Content from "./step22-content"

export default function Step22Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen w-full flex items-center justify-center bg-black">
          <div className="text-[#D4AF37]">Loading...</div>
        </div>
      }
    >
      <Step22Content />
    </Suspense>
  )
}
