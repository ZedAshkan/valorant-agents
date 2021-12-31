import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function NotFoundPage() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 5000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [count, setCount] = useState(6)

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setCount(count - 1)
    // }, 1000)
    // return () => clearInterval(interval)
    setTimeout(() => {
      setCount(count - 1)
    }, 1000)
  }, [count])

  return (
    <div className="text-white text-center text-3xl">
      <span className="block text-6xl font-extrabold m-5">404</span>
      <div>
        this page is not exist
      </div>
      <div className="text-xl font-thin mt-4">
        you will be redirected to home page in {count} seconds
      </div>
    </div>
  )
}
