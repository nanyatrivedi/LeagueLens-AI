import PlayerHeader from "../../../components/PlayerHeader";
import ChampionPoolCards from "../../../components/ChampionPoolCards";
import PerformanceChart from "../../../components/PerformanceChart";
import PerformanceTrend from "../../../components/PerformanceTrend";
import AdvancedStats from "../../../components/AdvancedStats";
import RecentMatches from "../../../components/RecentMatches";
import ExportReport
from "../../../components/ExportReport";

import {
  getAccountByRiotId,
  getRecentMatches,
  getSummonerByPuuid,
  getChampionPool,
  getChampionPoolData,
  generateInsights,
  getRankedData,
  getChampionStats,
  calculatePerformanceScore,
  getChampionSpotlight,
  getPrimaryRole,
  getPlaystyle,
  getAdvancedStats,
  getChampionRecommendations,
} from "../../../lib/riot";

export default async function PlayerPage({
  params,
}: {
  params: Promise<{ riotId: string }>;
}) {
  const { riotId } = await params;

  const decodedRiotId = decodeURIComponent(
    riotId
  );

  if (
  typeof window !== "undefined"
) {

  const existing =
    JSON.parse(
      localStorage.getItem(
        "recentSearches"
      ) || "[]"
    );

  const updated = [
    decodedRiotId,
    ...existing.filter(
      (x: string) =>
        x !== decodedRiotId
    ),
  ].slice(0, 5);

  localStorage.setItem(
    "recentSearches",
    JSON.stringify(updated)
  );
}

  const [gameName, tagLine] =
    decodedRiotId.split("#");

  const account = await getAccountByRiotId(
    gameName,
    tagLine
  );

  const summoner = await getSummonerByPuuid(
    account.puuid
  );

  const rankedData = await getRankedData(
    summoner.id
  );

  const soloQueue =
  rankedData.find(
    (queue: any) =>
      queue.queueType ===
      "RANKED_SOLO_5x5"
  );

  const matches = await getRecentMatches(
    account.puuid
  );

  const championData = await getChampionPoolData(
    account.puuid
  );

  const championPool = getChampionStats(
    championData
  );

  const spotlight =
  getChampionSpotlight(
    championPool
  );

  const insights = await generateInsights(matches);

  const advancedStats =
  getAdvancedStats(matches);

  const playstyle =
  getPlaystyle(matches);

  const primaryRole =
  getPrimaryRole(matches);

  const recommendations =
  getChampionRecommendations(
    primaryRole
  );

  const chartData = matches.map(
  (match, index) => ({
    game: `G${index + 1}`,
    kda:
      (
        (match.kills +
          match.assists) /
        Math.max(
          match.deaths,
          1
        )
      ).toFixed(2),
  })
);

  const performanceScore =
  calculatePerformanceScore(
    matches,
    soloQueue
  );

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <h1 className="mb-10 text-center text-5xl font-bold">
          {decodedRiotId}
        </h1>

        <PlayerHeader 
            playerName={account.gameName}
            level={summoner.summonerLevel}
            profileIconId={summoner.profileIconId}
            role={primaryRole}
        />

        <div className="mt-12 rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 text-center">

  <p className="text-gray-400 text-lg">
    Performance Score
  </p>

  <h2 className="mt-2 text-8xl font-bold text-cyan-400">
    {performanceScore}
  </h2>


  <p className="mt-4 text-xl text-gray-300">
    {performanceScore >= 90
      ? "Elite Player"
      : performanceScore >= 80
      ? "S Tier"
      : performanceScore >= 70
      ? "A Tier"
      : performanceScore >= 60
      ? "B Tier"
      : "Needs Improvement"}
  </p>

  <div className="mt-6 flex justify-center">

  <ExportReport
    playerName={account.gameName}
    role={primaryRole}
    score={performanceScore}
  />

</div>

  <p className="mt-4 text-xl text-cyan-300">
  {playstyle}
</p>

</div>

        <div className="mt-12 rounded-[32px] border border-white/10 bg-white/5 p-8">
            <div className="mt-12">
  <PerformanceChart
    data={chartData}
  />
</div>

<div className="mt-12">
  <AdvancedStats
    stats={advancedStats}
  />
</div>

            <h2 className="mb-6 text-3xl font-bold">
              Ranked Overview
            </h2>
            
            {soloQueue ? (
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <p className="text-gray-400">
                    Tier
                  </p>
                <p className="text-2xl font-bold">
                  {soloQueue.tier}
                </p>
              </div>
            <div>
              <p className="text-gray-400">
                Rank
              </p>
              <p className="text-2xl font-bold">
                {soloQueue.rank}
              </p>
            </div>
            <div>
              <p className="text-gray-400">
                LP
              </p>
              <p className="text-2xl font-bold">
                {soloQueue.leaguePoints}
              </p>
            </div>

            <div>
              <p className="text-gray-400">
                Win Rate
              </p>

              <p className="text-2xl font-bold">
                {Math.round(
                  (soloQueue.wins /
                    (soloQueue.wins +
                      soloQueue.losses)) *
                    100
                )}
                %
              </p>
            </div>
          </div>
        ) : (
      <p>
        No ranked data found.
      </p>
    )}
</div>

        <RecentMatches
  matches={matches}
/>

        </div>

        <div className="mt-12 rounded-[32px] border border-white/10 bg-white/5 p-8">
        <h2 className="mb-6 text-3xl font-bold">
          Champion Pool
        </h2>


        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {championPool.map((champ) => (
            <div
            key={champ.champion}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
            >
              <div className="p-6">
              <div className="flex items-center gap-4">
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/13.6.1/img/champion/${champ.champion}.png`}
                  alt={champ.champion}
                  className="h-20 w-20 rounded-2xl shadow-lg"
                />
                <div> <h3 className="text-2xl font-bold">
                  {champ.champion}
                </h3>
                <p className="text-gray-400">
                  {champ.games} Games
                </p>
              </div>
              </div>

            <div className="mt-6 flex items-center justify-between">
              <span className={`text-2xl font-bold ${
                champ.winRate >= 60 
                ? "text-green-400" 
                : champ.winRate >= 50 
                ? "text-cyan-400" 
                : "text-red-400"
                }`}
                >
                {champ.winRate}%
              </span>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-12 rounded-[32px] border border-white/10 bg-white/5 p-8">

  <h2 className="mb-6 text-3xl font-bold">
    Champion Recommendations
  </h2>

  <div className="grid gap-4 md:grid-cols-3">

    {recommendations.map(
      (champion) => (
        <div
          key={champion}
          className="rounded-2xl bg-black/30 p-4 text-center"
        >
          {champion}
        </div>
      )
    )}

  </div>

</div>

    <PerformanceTrend
  matches={matches}
/>
    
      <div className="mt-12 rounded-[32px] border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            AI Insights
          </h2>

          <div className="space-y-4">
            {insights.map((insight) => (
              <div
              key={insight}
              className="rounded-xl bg-black/30 p-4"
              >
                {insight}
                </div>
              ))}
          </div>
              
        </div>
        </main>
  );
}