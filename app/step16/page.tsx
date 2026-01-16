import { Suspense } from "react"
import Step16Content from "./step16-content"

export default function Step16Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <Step16Content />
    </Suspense>
  )
}
