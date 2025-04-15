export const getStaticProps = async () => {
  const res = await fetch("https://valorant-api.com/v1/maps");
  const data = await res.json();
  const list = data.data;
  const maps = list.map(item => {
    return {
      uuid: item.uuid,
      displayName: item.displayName,
      splash: item.splash,
      coordinates: item.coordinates,
    };
  });
  return {
    props: {
      maps,
    },
    revalidate: 1800,
  };
};

import Link from "next/link";
import Image from "next/image";

export default function MapsList({ maps }) {
  return (
    <div className="container mx-auto">
      <div className="row row-cols-1 md:row-cols-2 g-3">
        {maps.map(map => {
          return (
            <div className="col" key={map.uuid}>
              <Link href={`/maps/${map.displayName}`}>
                <a>
                  <div className="overflow-hidden rounded-lg border-2 border-white relative hover:border-rose-600 transition duration-700">
                    <Image
                      className="h-[150px] w-full md:h-[300px] object-cover"
                      src={map.splash}
                      alt="agents"
                      width={800}
                      height={400}
                    />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 text-6xl bg-neutral-800/40 w-[50%] text-center py-4 rounded-full shadow-md shadow-black/50">
                      {map.displayName}
                    </span>
                    <span className="font-light absolute top-2 md:top-5 right-5">
                      {map.coordinates}
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
