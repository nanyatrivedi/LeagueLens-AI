export default function AIInsights() {
  const insights = [
    "Highest win rate on Ahri (64%).",
    "Performs best in matches longer than 30 minutes.",
    "Prefers control mages over assassins.",
    "Average KDA is 5.8 across recent games.",
    "Win rate increases significantly when ahead at 15 minutes.",
  ];

  return (
    <div className="rounded-[32px] border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl">

      <h2 className="mb-6 text-3xl font-bold text-cyan-300">
        AI Insights
      </h2>

      <div className="space-y-4">

        {insights.map((insight, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-black/30 p-4"
          >
            <p className="text-gray-200">
              {insight}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}