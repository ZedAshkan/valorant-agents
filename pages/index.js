import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Valorant Info</title>
        <meta name="description" content="Valorant agents weapons and maps info" />
        {/* valorant icon */}
      </Head>
      <div className="container mx-auto text-white">
        <div className="mt-5 row row-cols-1 md:row-cols-2 g-4">
          <div className="col">
            <Link href='/agents'>
              <a>
                <div className="overflow-hidden rounded-lg border-2 border-white relative hover:border-rose-600 transition duration-700">
                  <img className="h-[150px] w-full md:h-[300px] object-cover" src="/agents.jpg" alt="agents" />
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 text-6xl">AGENTS</span>
                </div>
              </a>
            </Link>
          </div>
          <div className="col">
            <Link href='/weapons'>
              <a>
                <div className="overflow-hidden rounded-lg border-2 border-white relative hover:border-rose-600 transition duration-700">
                  <img className="h-[150px] w-full md:h-[300px] object-cover" src="/weapons.webp" alt="agents" />
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 text-6xl">WEAPONS</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
