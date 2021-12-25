export const getStaticPaths = async () => {
  const res = await fetch('https://valorant-api.com/v1/agents')
  const data = await res.json()
  const list = data.data
  const agents = list.filter(item => item.uuid !== 'ded3520f-4264-bfed-162d-b080e2abccf9')
  const paths = agents.map(item => ({ params: { uuid: item.uuid } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://valorant-api.com/v1/agents/${params.uuid}`)
  const data = await res.json()
  const agent = data.data
  return {
    props: {
      agent,
    },
  }
}

import Image from "next/image"

export default function AgentInfoPage({ agent }) {
  return (
    <div className="container mx-auto text-white">

      <div className="row row-cols-2">
        <div className="col">
          <Image src={agent.bustPortrait} width={2048} height={2048} />
        </div>
        <div className="col">
          <div className="flex flex-col">
            <div className="text-center text-5xl mb-5">
              {agent.displayName}
            </div>
            <div className="mb-3">
              <span className="font-bold">Agent description : </span>

              {agent.description}
            </div>
            <div>
              <span className="font-bold">Agent Role : </span>
              {agent.role.description}
            </div>
            <div>
              <div className="text-center text-3xl font-bold">

              <span className="mx-auto">Agent Abilities</span>
              </div>

              <div className="row row-cols-1">
                {agent.abilities.map(item => (
                  <div className="col flex mb-4" key={item.uuid}>
                    <div className="flex flex-col text-center">
                      <Image src={item.displayIcon} width={100} height={100} />
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
  )
}