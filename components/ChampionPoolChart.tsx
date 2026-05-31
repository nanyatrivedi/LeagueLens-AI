"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { champion: "Ahri", games: 52 },
  { champion: "Azir", games: 44 },
  { champion: "Orianna", games: 37 },
  { champion: "Sylas", games: 31 },
  { champion: "LeBlanc", games: 25 },
];

export default function ChampionPoolChart() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <h2 className="mb-6 text-3xl font-bold">
        Champion Pool Analysis
      </h2>

      <div className="h-[350px]">

        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="champion" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="games" />
          </BarChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}