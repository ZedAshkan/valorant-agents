const getData = async () => {
  const res = await fetch('https://valorant-api.com/v1/agents')
  const data = await res.json()
  const list = data.data
  const agents = list.filter(item => item.uuid !== 'ded3520f-4264-bfed-162d-b080e2abccf9')
  return agents
}

export const getStaticPaths = async () => {
  const agents = await getData()
  const paths = agents.map(item => {
    if (item.displayName === 'KAY/O') {
      item.displayName = 'KAY-O'
    }
    return { params: { agent: item.displayName } }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }) => {
  const agents = await getData()
  const agent = agents.filter(item => {
    if (item.displayName === 'KAY/O') {
      item.displayName = 'KAY-O'
    }
    return item.displayName === params.agent
  })

  if (agent.length === 0) {
    return { notFound: true }
  }

  return {
    props: {
      agent: agent[0],
    }
  }
}

import Image from "next/image"
import Head from "next/head"

export default function AgentInfoPage({ agent }) {
  return (
    <>
      <Head>
        <title>{agent.displayName}</title>
        <meta name="keywords" content={`valorant, valorant info, valorant agents, valorant ${agent.displayName}, agent ${agent.displayName}, ${agent.displayName}`} />
        <link rel="icon" href={agent.role.displayIcon} />
      </Head>
      <div className="container mx-auto">
        <div>
          <div className="text-center text-5xl mb-5">
            {agent.displayName}
          </div>
        </div>

        <div className="row row-cols-1 md:row-cols-2">

          <div className="col">
            <div className="flex flex-col">
              <Image src={agent.bustPortrait} width={2048} height={2048} alt={agent.displayName} />
              <div className="mt-1">
                <div className="mb-3 mx-3">
                  <span className="font-bold">Agent description : </span>
                  {agent.description}
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="flex flex-col">

              <div>
                <div className="text-center text-3xl font-bold">

                  <span className="mx-auto">Agent Abilities</span>
                </div>

                <div className="row row-cols-1 mx-3">
                  {agent.abilities.map(item => (
                    <div className="col flex mb-4" key={item.slot}>
                      <div className="flex flex-col text-center">
                        {
                          item.displayIcon &&
                          <Image src={item.displayIcon} width={100} height={100} alt={item.displayName} />
                        }
                        <span className="font-bold min-w-[100px]">{item.displayName}</span>
                      </div>
                      <span className="m-3">{item.description}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
