import { Suspense } from "react"
import Step24Content from "./step24-content"

export default function Step24Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen w-full flex items-center justify-center bg-black">
          <div className="text-[#D4AF37]">Loading...</div>
        </div>
      }
    >
      <Step24Content />
    </Suspense>
  )
}
