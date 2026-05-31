"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function PerformanceChart({
  data,
}: {
  data: any[];
}) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">

      <h2 className="mb-6 text-3xl font-bold">
        KDA Trend
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