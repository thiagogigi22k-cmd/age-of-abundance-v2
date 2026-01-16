import { Suspense } from "react"
import Step10Content from "./step10-content"
import Loading from "./loading"

export default function Step10Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Step10Content />
    </Suspense>
  )
}
