import { Suspense } from "react"
import Step12Content from "./step12-content"

export default function Step12Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <Step12Content />
    </Suspense>
  )
}
