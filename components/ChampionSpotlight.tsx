import Image from "next/image";

export default function ChampionSpotlight() {
  const champions = [
    {
      name: "Ahri",
      image: "/champions/ahri.jpg",
      role: "Mage",
      winRate: "64%",
      color: "text-pink-400",
    },
    {
      name: "Jinx",
      image: "/champions/jinx.jpg",
      role: "ADC",
      winRate: "61%",
      color: "text-cyan-400",
    },
    {
      name: "Yasuo",
      image: "/champions/yasuo.jpg",
      role: "Fighter",
      winRate: "58%",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl py-24 px-6">
      <div className="mb-16 text-center">
        <h2 className="text-6xl font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]">
          Champion Spotlight
        </h2>

        <p className="mt-4 text-lg text-white/70">
          Analyze the strongest champions in the current meta.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
        {champions.map((champion) => (
          <div
            key={champion.name}
            className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
          >
            <div className="relative h-72 overflow-hidden">
              <Image
                src={champion.image}
                alt={champion.name}
                fill
                className="object-cover object-top transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className={`text-3xl font-bold ${champion.color}`}>
                {champion.name}
              </h3>

              <p className="mt-2 text-gray-400">
                {champion.role}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-300">
                  Win Rate
                </span>

                <span className="font-bold text-white">
                  {champion.winRate}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}