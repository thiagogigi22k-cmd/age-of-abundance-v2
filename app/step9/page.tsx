import { Suspense } from "react"
import Step9Content from "./step9-content"
import Loading from "./loading"

export default function Step9Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Step9Content />
    </Suspense>
  )
}
