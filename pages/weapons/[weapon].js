const getData = async () => {
  const res = await fetch('https://valorant-api.com/v1/weapons')
  const data = await res.json()
  const weapons = data.data
  return weapons
}

export const getStaticPaths = async () => {
  const weapons = await getData()
  const paths = weapons.map(item => {
    return { params: { weapon: item.displayName } }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const weapons = await getData()
  const list = weapons.filter(item => item.displayName === params.weapon)
  const skins = list[0].skins
    .filter(skin => skin.themeUuid !== '5a629df4-4765-0214-bd40-fbb96542941f')
    .map(skin => {
      return {
        uuid: skin.uuid,
        displayName: skin.displayName,
        displayIcon: skin.levels[0].displayIcon,
        levels: skin.levels,
      }
    })
  let weapon = {}
  if (params.weapon === 'Melee') {
    weapon = {
      uuid: list[0].uuid,
      displayName: list[0].displayName,
      displayIcon: list[0].displayIcon,
      skins,
    }
  } else {
    weapon = {
      uuid: list[0].uuid,
      displayName: list[0].displayName,
      displayIcon: list[0].displayIcon,
      shopData: {
        categoryText: list[0].shopData.categoryText,
        cost: list[0].shopData.cost,
      },
      weaponStats: {
        fireRate: list[0].weaponStats.fireRate,
        firstBulletAccuracy: list[0].weaponStats.firstBulletAccuracy,
        reloadTimeSeconds: list[0].weaponStats.reloadTimeSeconds,
        runSpeedMultiplier: list[0].weaponStats.runSpeedMultiplier,
      },
      skins,
    }
  }

  if (list.length === 0) {
    return { notFound: true }
  }

  return {
    props: {
      weapon,
    },
    revalidate: 1800,
  }
}

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export default function WeaponInfoPage({ weapon }) {
  return (
    <>
      <Head>
        <title>{weapon.displayName}</title>
        <meta name="keywords" content={`valorant, valorant info, valorant agents, valorant ${weapon.displayName}, agent ${weapon.displayName}, ${weapon.displayName}`} />
      </Head>
      <div className="container mx-auto">
        <div className="text-center">
          <span className="text-5xl mb-5 font-bold">
            {weapon.displayName}
          </span>
        </div>

        <div className="row row-cols-1 md:row-cols-2 items-center">
          <div className="col">
            <div className="mx-8 mt-3">
              <img className="mx-auto w-full" src={weapon.displayIcon} alt={weapon.displayName} />
            </div>
          </div>
          <div className="col">
            {weapon.displayName === 'Melee' && (
              <div className="text-center">
                <span className="text-3xl">WOW</span>
              </div>
            )}
            {weapon.displayName !== 'Melee' && (
              <div className="flex flex-col">
                <div className="text-center mb-3">
                  <span className="text-3xl font-bold">Weapon State</span>
                </div>
                <div className="flex flex-col mx-5 text-xl gap-2">
                  <span>Weapon Category : {weapon.shopData.categoryText}</span>
                  <span>Weapon Cost : {weapon.shopData.cost}$</span>
                  <span>Weapon FireRate : {weapon.weaponStats.fireRate} per/s</span>
                  <span>Weapon Rirst Bullet Accuracy : {weapon.weaponStats.firstBulletAccuracy}</span>
                  <span>Weapon Reload Time : {weapon.weaponStats.reloadTimeSeconds}s</span>
                  <span>Weapon Run Speed : {weapon.weaponStats.runSpeedMultiplier * 100}%</span>
                </div>
              </div>

            )}
          </div>
        </div>
        <div className="text-center my-3">
          <span className="text-4xl font-bold">Skins</span>
        </div>
        <div className="row row-cols-1 md:row-cols-2 lg:row-cols-3 g-3 text-center">
          {weapon.skins.map(skin => {
            if (skin.levels.length >= 2) {
              return (
                <div className="col" key={skin.uuid}>
                  <Link href={`/skins/${skin.uuid}`}>
                    <a>
                      <div className="bg-rose-600 border border-white rounded-lg shadow-lg shadow-rose-600/50 p-3 hover:scale-[103%] transition">
                        <div className="!border !border-white p-4 relative">
                          <Image className="!mx-auto h-[100px] object-contain" src={skin.displayIcon} alt={skin.displayName} width={350} height={100} />
                          <div className=" absolute bottom-0 left-1/2 -translate-x-1/2 flex">
                            {skin.levels.map(level => (
                              <img className="w-6" key={level.uuid} src="/dot.svg" alt="." />
                            ))}
                          </div>
                        </div>
                        <div className="text-center mt-2">
                          <span>
                            {skin.displayName}
                          </span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              )
            }
            return (
              <div className="col" key={skin.uuid}>
                <div className="bg-rose-600 border border-white rounded-lg shadow-lg shadow-rose-600/50 p-3 hover:scale-[103%] transition">
                  <div className="!border !border-white p-4">
                    <Image className="!mx-auto h-[100px] object-contain" src={skin.displayIcon} alt={skin.displayName} width={350} height={100} />
                  </div>
                  <div className="text-center mt-2">
                    <span>
                      {skin.displayName}
                    </span>
                  </div>
                </div>
              </div>

            )
          })}
        </div>
      </div>
    </>
  )
}
