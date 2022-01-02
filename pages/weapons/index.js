export const getStaticProps = async () => {
  const res = await fetch('https://valorant-api.com/v1/weapons')
  const data = await res.json()
  const list = data.data
  return {
    props: {
      list,
    },
  }
}

import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function WeaponsList({ list }) {
  return (
    <>
      <Head>
        <title>Valorant Weapons</title>
        <meta name="keywords" content="valorant, valorant info, valorant weapons" />
        <link rel="icon" href="/valorant.png" />
      </Head>
      <div className="container mx-auto text-center text-white">
        <div className="row row-cols-1 md:row-cols-2 lg:row-cols-3 g-3">
          {list.map((weapon) => {
            return (
              <div className="col" key={weapon.uuid}>
                <Link href={`/weapons/${weapon.displayName}`}>
                  <a>
                    <div className=" bg-rose-600 border-4 border-rose-800 rounded-lg shadow-lg shadow-rose-600/50 p-3 hover:scale-[103%] transition ">
                      <div className="!border-4 !border-rose-800">
                        <Image className="mx-auto h-[100px] p-2 object-contain" src={weapon.displayIcon} alt={weapon.displayName} width={350} height={100} />
                        {/* <img className="mx-auto h-[100px] p-2 object-contain" src={weapon.displayIcon} alt={weapon.displayName} /> */}
                      </div>
                      <div className="mt-2">
                        {weapon.displayName}
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
