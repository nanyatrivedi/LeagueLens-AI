"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function PerformanceTrend({
  matches,
}: {
  matches: any[];
}) {
  const data = matches.map(
    (match, index) => ({
      game: `Game ${index + 1}`,
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

  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
      <h2 className="mb-6 text-3xl font-bold">
        Performance Trend
      </h2>

      <div className="h-[350px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart data={data}>
            <XAxis dataKey="game" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="kda"
              stroke="#22d3ee"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}