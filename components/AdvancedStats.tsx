type Props = {
  stats: {
    avgKills: string;
    avgDeaths: string;
    avgAssists: string;
    avgCS: string;
    avgGold: string;
  };
};

export default function AdvancedStats({
  stats,
}: Props) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">

      <h2 className="mb-6 text-3xl font-bold">
        Advanced Stats
      </h2>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-5">

        <div>
          <p className="text-gray-400">
            Avg Kills
          </p>
          <p className="text-3xl font-bold">
            {stats.avgKills}
          </p>
        </div>

        <div>
          <p className="text-gray-400">
            Avg Deaths
          </p>
          <p className="text-3xl font-bold">
            {stats.avgDeaths}
          </p>
        </div>

        <div>
          <p className="text-gray-400">
            Avg Assists
          </p>
          <p className="text-3xl font-bold">
            {stats.avgAssists}
          </p>
        </div>

        <div>
          <p className="text-gray-400">
            Avg CS
          </p>
          <p className="text-3xl font-bold">
            {stats.avgCS}
          </p>
        </div>

        <div>
          <p className="text-gray-400">
            Avg Gold
          </p>
          <p className="text-3xl font-bold">
            {stats.avgGold}
          </p>
        </div>

      </div>

    </div>
  );
}