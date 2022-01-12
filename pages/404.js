import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Head from "next/head"

export default function NotFoundPage() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 7000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [count, setCount] = useState(7)

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setCount(count - 1)
    // }, 1000)
    // return () => clearInterval(interval)
    setTimeout(() => {
      if (count > 0) {
        setCount(count - 1)
      }
    }, 1000)
  }, [count])

  return (
    <>
      <Head>
        <title>Not Found</title>

      </Head>
      <div className="text-center text-3xl mb-64">
        <span className="block text-6xl font-extrabold m-5">404</span>
        <div>
          this page is not exist
        </div>
        <div className="text-xl font-thin mt-4">
          you will be redirected to home page in {count} seconds
        </div>
      </div>
    </>
  )
}
