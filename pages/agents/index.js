export const getStaticProps = async () => {
  const res = await fetch('https://valorant-api.com/v1/agents')
  const data = await res.json()
  const list = data.data
  const sovas = list.filter(agent => agent.displayName === 'Sova')
  const agents = list.filter(item => item.uuid !== 'ded3520f-4264-bfed-162d-b080e2abccf9')

  return {
    props: {
      agents,
      sovas,
    },
    revalidate: 600,
  }
}

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export default function Home({ agents , sovas}) {
  console.log(sovas)
  return (
    <>
      <Head>
        <title>Valorant Agents</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto text-white leading-none">

        <div className="row row-cols-2 md:row-cols-5 g-3">
          {
            agents.map((agent) => {
              let role = { ...agent.role }
              if (agent.displayName === 'KAY/O') {
                agent.displayName = 'KAY-O'
              }
              return (
                <div className="col" key={agent.uuid}>
                  <Link href={`/agents/${agent.displayName}`}>
                    <a>
                      <div className="bg-rose-600 border-4 border-rose-800 rounded-lg shadow-lg shadow-rose-600/50 p-3 hover:scale-105 transition">
                        <div className="!border-4 !border-rose-800">
                          <Image src={agent.displayIconSmall} width={256} height={256} alt={agent.displayName} />
                        </div>
                        <div className="mt-3 flex items-center gap-2">
                          <Image src={role.displayIcon} width={18} height={18} alt={agent.displayName} />
                          <span>{agent.displayName}</span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
