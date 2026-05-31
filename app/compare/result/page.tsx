import {
  getAccountByRiotId,
  getRecentMatches,
  getChampionPoolData,
  getPrimaryRole
} from "../../../lib/riot";

function getStats(matches: any[]) {
  const wins =
    matches.filter(
      (m) => m.win
    ).length;

  const winRate =
    Math.round(
      (wins / matches.length) * 100
    );

  const totalKills =
    matches.reduce(
      (sum, m) => sum + m.kills,
      0
    );

  const totalDeaths =
    matches.reduce(
      (sum, m) => sum + m.deaths,
      0
    );

  const totalAssists =
    matches.reduce(
      (sum, m) => sum + m.assists,
      0
    );

  const totalCS =
    matches.reduce(
      (sum, m) => sum + m.cs,
      0
    );

  const avgKDA =
    (
      (totalKills + totalAssists) /
      Math.max(totalDeaths, 1)
    ).toFixed(2);

  const avgCS =
    Math.round(
      totalCS / matches.length
    );

  return {
    winRate,
    avgKDA,
    avgCS,
  };
}

export default async function CompareResultPage({
  searchParams,
}: {
  searchParams: Promise<{
    player1: string;
    player2: string;
  }>;
}) {

  const {
    player1,
    player2,
  } = await searchParams;

  const [gameName1, tag1] =
    decodeURIComponent(player1).split("#");

  const [gameName2, tag2] =
    decodeURIComponent(player2).split("#");

  const account1 =
    await getAccountByRiotId(
      gameName1,
      tag1
    );

  const account2 =
    await getAccountByRiotId(
      gameName2,
      tag2
    );

  const matches1 =
    await getRecentMatches(
      account1.puuid
    );

  const matches2 =
    await getRecentMatches(
      account2.puuid
    );

  const stats1 =
    getStats(matches1);

  const stats2 =
    getStats(matches2);

  const championData1 =
    await getChampionPoolData(
      account1.puuid
    );

  const championData2 =
    await getChampionPoolData(
      account2.puuid
    );

  const role1 =
    getPrimaryRole(championData1);

  const role2 =
    getPrimaryRole(championData2);

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="mx-auto max-w-6xl px-6 py-12 backdrop-blur-xl">

        <h1 className="mb-10 text-center text-5xl font-bold">
          Player Comparison
        </h1>

        <div className="overflow-hidden rounded-3xl border border-white/10">

          <table className="w-full">

            <thead className="bg-white/5">

              <tr>

                <th className="p-4 text-left">
                  Stat
                </th>

                <th className="p-4">
                  {account1.gameName}
                </th>

                <th className="p-4">
                  {account2.gameName}
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-t border-white/10">
                <td className="p-4">
                  Win Rate
                </td>

                <td
  className={`p-4 text-center ${
    stats1.winRate >
    stats2.winRate
      ? "text-green-400 font-bold"
      : ""
  }`}
>
  {stats1.winRate}%
</td>

<td
  className={`p-4 text-center ${
    stats2.winRate >
    stats1.winRate
      ? "text-green-400 font-bold"
      : ""
  }`}
>
  {stats2.winRate}%
</td>
              </tr>

              <tr className="border-t border-white/10">
                <td className="p-4">
                  Avg KDA
                </td>

                <td className="p-4 text-center">
                  {stats1.avgKDA}
                </td>

                <td className="p-4 text-center">
                  {stats2.avgKDA}
                </td>
              </tr>

              <tr className="border-t border-white/10">
                <td className="p-4">
                  Avg CS
                </td>

                <td className="p-4 text-center">
                  {stats1.avgCS}
                </td>

                <td className="p-4 text-center">
                  {stats2.avgCS}
                </td>
              </tr>

              <tr className="border-t border-white/10">
                <td className="p-4">
                  Main Role
                </td>

                <td className="p-4 text-center">
                  {role1}
                </td>

                <td className="p-4 text-center">
                  {role2}
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}