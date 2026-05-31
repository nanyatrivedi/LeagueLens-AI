import {
  getAccountByRiotId,
  getSummonerByPuuid,
} from "../../lib/riot";

export default async function TestPage() {
  const account =
    await getAccountByRiotId(
      "Hide on bush",
      "KR1"
    );

  const summoner =
    await getSummonerByPuuid(
      account.puuid
    );

  return (
    <main className="p-10 bg-black text-white">
      <pre>
        {JSON.stringify(
          summoner,
          null,
          2
        )}
      </pre>
    </main>
  );
}