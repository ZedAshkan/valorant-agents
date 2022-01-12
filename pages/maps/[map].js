export const getStaticPaths = async () => {
  const res = await fetch('https://valorant-api.com/v1/maps')
  const data = await res.json()
  const list = data.data
  const paths = list.map(item => {
    return { params: { map: item.displayName } }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch('https://valorant-api.com/v1/maps')
  const data = await res.json()
  const list = data.data
  const lists = list.filter(item => item.displayName === params.map)
  const map = {
    uuid: lists[0].uuid,
    displayName: lists[0].displayName,
    displayIcon: lists[0].displayIcon,
    listViewIcon: lists[0].listViewIcon,
    splash: lists[0].splash,
    coordinates: lists[0].coordinates,
  }
  if (map.length === 0) {
    return { notFound: true }
  }

  return {
    props: {
      map,
    }
  }
}

import Head from "next/head"


export default function MapInfoPage({ map }) {
  console.log(map)
  return (
    <>
      <Head>
        <title>{map.displayName}</title>
      </Head>
      <div className="container mx-auto text-center">
        <div className="relative flex mx-3">
          <span className=" font-bold text-4xl absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 ">{map.displayName}</span>
          <img className="inline mx-auto rounded-2xl" src={map.listViewIcon} alt={map.displayName} />
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 font-bold">
            {map.coordinates}
          </div>
        </div>
        <div>
          {map.displayIcon && <img className="mx-auto" src={map.displayIcon} alt={map.displayName} />
          }
        </div>
      </div>
    </>
  )
}
