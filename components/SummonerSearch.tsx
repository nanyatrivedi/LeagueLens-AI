"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SummonerSearch() {
  const [riotId, setRiotId] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!riotId.trim()) return;

    router.push(`/player/${encodeURIComponent(riotId)}`);
  };

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20">

      <div className="rounded-[32px] border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl">

        <h2 className="text-center text-4xl font-bold text-white">
          Player Search
        </h2>

        <p className="mt-3 text-center text-white/70">
          Look up ranks, match history, champion mastery, and AI-powered insights.
        </p>

        <div className="mt-8 flex gap-4">

          <input
            value={riotId}
            onChange={(e) => setRiotId(e.target.value)}
            placeholder="Enter Riot ID (e.g. Faker#KR1)"
            className="flex-1 rounded-2xl border border-white/10 bg-black/40 px-6 py-4 text-white outline-none transition focus:border-cyan-400"
          />

          <button
            onClick={handleSearch}
            className="flex items-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-4 text-cyan-300 transition hover:bg-cyan-400/20"
          >
            <Search size={20} />
            Search
          </button>

        </div>

      </div>

    </section>
  );
}