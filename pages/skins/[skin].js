export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://valorant-api.com/v1/weapons/skins/${params.skin}`
  );
  const data = await res.json();
  const assets = data.data;
  const skin = {
    displayName: assets.displayName,
    displayIcon: assets.levels[0].displayIcon,
    levels: assets.levels,
  };
  return {
    props: {
      skin,
    },
  };
};

import Head from "next/head";

export default function SkinInfoPage({ skin }) {
  return (
    <>
      <Head>
        <title>{skin.displayName}</title>
      </Head>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-5xl mb-5 font-bold">{skin.displayName}</span>
        </div>

        <div className="row row-cols-1 md:row-cols-2 items-center justify-center g-5">
          {skin.levels.map(level => {
            if (!!level.streamedVideo) {
              return (
                <div key={level.uuid} className="col">
                  <div className="ring overflow-hidden  rounded-3xl ring-orange-300">
                    <div className="text-center py-5 bg-rose-600 text-black border-b-orange-300 border-b-2">
                      <span className="font-bold text-xl">
                        {level.displayName}
                      </span>
                    </div>
                    <div className="rounded-lg overflow-hidden border-2 border-white m-2">
                      <video
                        className="w-full md:h-[350px]"
                        muted
                        loop
                        poster={skin.displayIcon}
                        preload="none"
                        controls
                        src={level.streamedVideo}
                      ></video>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
