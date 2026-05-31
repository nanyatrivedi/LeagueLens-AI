import { ins } from "framer-motion/client";
import { invalidateSegmentCacheEntries } from "next/dist/client/components/segment-cache/cache";

const API_KEY = process.env.RIOT_API_KEY;

export async function getAccountByRiotId(
  gameName: string,
  tagLine: string
) {
  const response = await fetch(
    `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`,
    {
      headers: {
        "X-Riot-Token": API_KEY!,
      },
    }
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `Riot API Error ${response.status}: ${text}`
    );
  }

  return response.json();
}

export async function getMatchIdsByPuuid(
  puuid: string
) {
  const response = await fetch(
    `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20`,
    {
      headers: {
        "X-Riot-Token": API_KEY!,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch match ids");
  }

  return response.json();
}

export async function getMatchDetails(
  matchId: string
) {
  const response = await fetch(
    `https://asia.api.riotgames.com/lol/match/v5/matches/${matchId}`,
    {
      headers: {
        "X-Riot-Token": API_KEY!,
      },
    }
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Match Error ${response.status}: ${text}`);
  }

  return response.json();
}

export async function getRecentMatches(puuid: string) {
  const matchIds = await getMatchIdsByPuuid(puuid);

  const matches = await Promise.all(
    matchIds.slice(0, 5).map((id: string) => getMatchDetails(id))
  );

  return matches.map((match) => {
    const player = match.info.participants.find(
      (p: any) => p.puuid === puuid
    );

    return {
      champion: player.championName,
      kills: player.kills,
      deaths: player.deaths,
      assists: player.assists,
      win: player.win,
      cs: player.totalMinionsKilled,
      gold: player.goldEarned,

      lane:
        player.teamPosition || 
        player.individualPosition ||
        "UNKNOWN",
    };
  });
}

export async function getSummonerByPuuid(
  puuid: string
) {
  const response = await fetch(
    `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`,
    {
      headers: {
        "X-Riot-Token": API_KEY!,
      },
    }
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `Riot API Error ${response.status}: ${text}`
    );
  }

  return response.json();
}

export function getChampionPool(
  matches: any[]
) {
  const counts: Record<string, number> = {};

  matches.forEach((match) => {
    counts[match.champion] =
      (counts[match.champion] || 0) + 1;
  });

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([champion, games]) => ({
      champion,
      games,
    }));
}

export async function getChampionPoolData(
  puuid: string
) {
  const matchIds =
    await getMatchIdsByPuuid(puuid);

  const matches = await Promise.all(
    matchIds.slice(0, 10).map((id: string) =>
      getMatchDetails(id)
    )
  );

  return matches.map((match) => {
    const player =
      match.info.participants.find(
        (p: any) => p.puuid === puuid
      );

    return {
      champion: player.championName,
      win: player.win,
    };
  });
}

export function generateInsights(
  matches: any[]
) {

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

    const avgKDA =
    Number(((totalKills + totalAssists) /
      Math.max(totalDeaths, 1)
    ).toFixed(2));

    const totalCS = matches.reduce(
      (sum, m) => sum + m.cs,
      0
    );

    const avgCS =
    Math.round(
      matches.reduce(
        (sum, m) => sum + m.cs,
        0
      ) / matches.length
    );

    const insights = [];

    if(winRate > 60) {
        insights.push(
          "Strong recent form with high win rate."
        );
    }

    if (winRate < 40) {
    insights.push(
      "Recent form has been struggling."
    );
  }

    if (avgKDA < 2) {
    insights.push(
      "Low KDA suggests risky engagements."
    );
  }

    if(avgKDA >= 4) {
        insights.push(
          "Excellent KDA indicating strong performance."
        );
    }
    if(avgCS<120) {
        insights.push(
          "CS numbers suggest farming can improve."
        );
    }

    if(avgCS>=180) {
        insights.push("Strong farming efficiency");
    }

    const aggresiveGames = matches.filter(
        (m) => m.kills >= 8
    ).length;

    if(aggresiveGames > matches.length /2) { insights.push(
        "Aggressive carry playstyle detected."
    )}

    insights.push(
      `Average KDA: ${avgKDA}`
    );

    insights.push(`Win Rate: ${winRate}%`);

    insights.push(`Average CS: ${avgCS}`);

  return insights;
}

export function getPlaystyle(
  matches: any[]
) {
  const avgKills =
    matches.reduce(
      (sum, m) => sum + m.kills,
      0
    ) / matches.length;

  const avgAssists =
    matches.reduce(
      (sum, m) => sum + m.assists,
      0
    ) / matches.length;

  const avgCS =
    matches.reduce(
      (sum, m) => sum + m.cs,
      0
    ) / matches.length;

  if (
    avgKills >= 8 &&
    avgCS >= 150
  ) {
    return "Aggressive Carry";
  }

  if (
    avgAssists >= 10
  ) {
    return "Teamfighter";
  }

  if (
    avgCS >= 180
  ) {
    return "Scaling Farmer";
  }

  return "Balanced Player";
}

export async function getRankedData(
  summonerId: string
) {
  const response = await fetch(
    `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}`,
    {
      headers: {
        "X-Riot-Token": API_KEY!,
      },
    }
  );

  if (!response.ok) {
    return [];
  }

  return response.json();
}

export function getChampionStats(
  matches: any[]
) {
  const stats: Record<
    string,
    {
      games: number;
      wins: number;
    }
  > = {};

  matches.forEach((match) => {
    if (!stats[match.champion]) {
      stats[match.champion] = {
        games: 0,
        wins: 0,
      };
    }

    stats[match.champion].games++;

    if (match.win) {
      stats[match.champion].wins++;
    }
  });

  return Object.entries(stats)
    .map(([champion, data]) => ({
      champion,
      games: data.games,
      winRate: Math.round(
        (data.wins / data.games) * 100
      ),
    }))
    .sort((a, b) => b.games - a.games);
}

export function calculatePerformanceScore(
  matches: any[],
  soloQueue: any
) {
  const wins = matches.filter(
    (m) => m.win
  ).length;

  const winRate =
    (wins / matches.length) * 100;

  const kills = matches.reduce(
    (sum, m) => sum + m.kills,
    0
  );

  const deaths = matches.reduce(
    (sum, m) => sum + m.deaths,
    0
  );

  const assists = matches.reduce(
    (sum, m) => sum + m.assists,
    0
  );

  const kda =
    (kills + assists) /
    Math.max(deaths, 1);

  let rankBonus = 0;

  if (soloQueue) {
    switch (soloQueue.tier) {
      case "CHALLENGER":
        rankBonus = 30;
        break;
      case "GRANDMASTER":
        rankBonus = 25;
        break;
      case "MASTER":
        rankBonus = 20;
        break;
      case "DIAMOND":
        rankBonus = 15;
        break;
      case "EMERALD":
        rankBonus = 10;
        break;
      default:
        rankBonus = 5;
    }
  }

  const score =
    Math.round(
      winRate * 0.4 +
      kda * 8 +
      rankBonus
    );

  return Math.min(score, 100);
}

export function getChampionSpotlight(
  championPool: any[]
) {
  if (!championPool.length) {
    return null;
  }

  return championPool.reduce(
    (best, current) =>
      current.games > best.games
        ? current
        : best
  );
}

export function getPrimaryRole(
  matches: any[]
) {
  const roles: Record<
    string,
    number
  > = {};

  matches.forEach((match) => {
    const role = match.lane;

    if (!role) return;

    roles[role] =
      (roles[role] || 0) + 1;
  });

  return Object.entries(roles)
    .sort(
      (a, b) => b[1] - a[1]
    )[0]?.[0];
}

export function getAdvancedStats(
  matches: any[]
) {
  const avgKills =
    matches.reduce(
      (sum, m) => sum + m.kills,
      0
    ) / matches.length;

  const avgDeaths =
    matches.reduce(
      (sum, m) => sum + m.deaths,
      0
    ) / matches.length;

  const avgAssists =
    matches.reduce(
      (sum, m) => sum + m.assists,
      0
    ) / matches.length;

  const avgCS =
    matches.reduce(
      (sum, m) => sum + m.cs,
      0
    ) / matches.length;

  const avgGold =
    matches.reduce(
      (sum, m) => sum + m.gold,
      0
    ) / matches.length;

  return {
    avgKills: avgKills.toFixed(1),
    avgDeaths: avgDeaths.toFixed(1),
    avgAssists: avgAssists.toFixed(1),
    avgCS: avgCS.toFixed(0),
    avgGold: avgGold.toFixed(0),
  };
}

export function getChampionRecommendations(
  role: string
) {

  const recommendations: Record<
    string,
    string[]
  > = {

    TOP: [
      "Camille",
      "Fiora",
      "Aatrox"
    ],

    JUNGLE: [
      "LeeSin",
      "Viego",
      "Kindred"
    ],

    MIDDLE: [
      "Ahri",
      "Sylas",
      "Orianna"
    ],

    BOTTOM: [
      "KaiSa",
      "Jinx",
      "Ezreal"
    ],

    SUPPORT: [
      "Thresh",
      "Nautilus",
      "Rakan"
    ],
  };

  return (
    recommendations[role] || []
  );
}