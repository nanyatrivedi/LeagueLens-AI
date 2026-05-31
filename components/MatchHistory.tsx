export default function MatchHistory() {
  const matches = [
    {
      champion: "Ahri",
      kda: "8.2",
      result: "Win",
    },
    {
      champion: "Azir",
      kda: "6.1",
      result: "Win",
    },
    {
      champion: "Orianna",
      kda: "4.5",
      result: "Loss",
    },
  ];

  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <h2 className="mb-6 text-3xl font-bold">
        Recent Matches
      </h2>

      <div className="space-y-4">

        {matches.map((match, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-2xl bg-black/30 p-4"
          >
            <span>{match.champion}</span>

            <span>{match.kda} KDA</span>

            <span
              className={
                match.result === "Win"
                  ? "text-green-400"
                  : "text-red-400"
              }
            >
              {match.result}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}