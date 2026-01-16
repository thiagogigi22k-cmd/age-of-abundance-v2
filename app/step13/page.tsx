import { Suspense } from "react"
import Step13Content from "./step13-content"

export default function Step13Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <Step13Content />
    </Suspense>
  )
}
