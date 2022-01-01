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

import Image from "next/image"

export default function WeaponsList({ list }) {
  console.log(list)
  return (
    <div className="container mx-auto text-center text-white">
      <div className="row row-cols-1 md:row-cols-3 g-3">
        {list.map((weapon) => {
          return (
            <div className="col" key={weapon.uuid}>
              <div className=" bg-rose-600 border-4 border-rose-800 rounded-lg shadow-lg shadow-rose-600/50 p-3 hover:scale-[103%] transition ">
                <div className="!border-4 !border-rose-800">
                  <img className="mx-auto h-[100px] p-2" src={weapon.displayIcon} alt={weapon.displayName} />
                </div>
                <div className="mt-2">
                  {weapon.displayName}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
