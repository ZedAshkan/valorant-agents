import { useRouter } from "next/router"
import { useEffect } from "react"

export default function AgentsPage() {
  const router = useRouter()
  useEffect(() => {
    router.push("/")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="text-white text-center text-3xl">
      this page is not exist
    </div>
  )
}
