import { useRouter } from "next/router"
import { useEffect } from "react"

export default function AgentsPage() {
  const router = useRouter()
  useEffect(() => {
    router.push("/")
  }, [])

  return (
    <div className="text-white text-center text-3xl">
      this page is not exist
    </div>
  )
}
