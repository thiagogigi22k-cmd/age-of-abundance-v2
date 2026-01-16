import { Suspense } from "react"
import Step17Content from "./step17-content"

export default function Step17Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <Step17Content />
    </Suspense>
  )
}
