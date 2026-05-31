import Image from "next/image";

const champions = [
  {
    name: "Ahri",
    image: "/champions/ahri.jpg",
    games: 52,
    winRate: 64,
  },
  {
    name: "Jinx",
    image: "/champions/jinx.jpg",
    games: 44,
    winRate: 61,
  },
  {
    name: "Yasuo",
    image: "/champions/yasuo.jpg",
    games: 37,
    winRate: 58,
  },
];

export default function ChampionPoolCards() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <h2 className="mb-8 text-3xl font-bold">
        Champion Pool
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        {champions.map((champion) => (
          <div
            key={champion.name}
            className="overflow-hidden rounded-3xl border border-white/10 bg-black/30 transition hover:scale-105"
          >

            <div className="relative h-48 w-full">

              <Image
                src={champion.image}
                alt={champion.name}
                fill
                className="object-cover"
              />

            </div>

            <div className="p-5">

              <h3 className="text-2xl font-bold">
                {champion.name}
              </h3>

              <p className="mt-2 text-gray-400">
                {champion.games} games played
              </p>

              <div className="mt-4">

                <div className="mb-2 flex justify-between">
                  <span>Win Rate</span>
                  <span>{champion.winRate}%</span>
                </div>

                <div className="h-3 rounded-full bg-white/10">

                  <div
                    className="h-3 rounded-full bg-cyan-400"
                    style={{
                      width: `${champion.winRate}%`,
                    }}
                  />

                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}