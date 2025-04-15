export default function Footer() {
  return (
    <div className="my-5 place-items-end container mx-auto">
      <footer className=" row row-cols-1 md:row-cols-2 items-start mt-3  bg-rose-600  rounded-lg">
        <div className="col">
          <div className="m-3">
            <span className="font-bold text-xl">About Valorant</span>
            <p className="text-justify mt-3">
              Valorant is a free-to-play first-person hero shooter developed and
              published by Riot Games, for Microsoft Windows. First teased under
              the codename Project A in October 2019, the game began a closed
              beta period with limited access on April 7, 2020, followed by an
              official release on June 2, 2020. The development of the game
              started in 2014. Valorant takes inspiration from the
              Counter-strike series of tactical shooters.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="flex flex-col items-start m-3">
            <span className="font-bold text-xl">Subscribe To Newsletter</span>
            <div className="bg-white overflow-hidden rounded-xl mt-3 md:mt-12 self-center mb-5 md:self-start">
              <form className="flex">
                <input
                  className="outline-none px-3 py-2 text-slate-600 font-medium w-[250px]"
                  type="email"
                  placeholder="email"
                />
                <button className="bg-slate-600 hover:bg-slate-800 py-3 px-3 transition duration-300">
                  subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
