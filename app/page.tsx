"use client";

import { motion } from "framer-motion";
import ChampionSpotlight from "../components/ChampionSpotlight";
import SummonerSearch from "../components/SummonerSearch";
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />

      {/* Massive Glow Effects */}
      <div className="animate-pulse absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/30 blur-[150px]" />

      <div className="animate-pulse absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/30 blur-[150px]" />

      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[120px]" />

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-10 py-6">

        <h1 className="text-2xl font-bold tracking-wide">
          LeagueLens AI
        </h1>

        <div className="flex gap-8 text-sm text-gray-300">

          <button className="transition hover:text-cyan-400">
            Analytics
          </button>

          <button className="transition hover:text-cyan-400">
            Champions
          </button>

          <button className="transition hover:text-cyan-400">
            Predictions
          </button>

          <button className="transition hover:text-cyan-400">
            Players
          </button>

        </div>

      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">

        {/* Hero Section */}
        <section className="flex min-h-screen flex-col items-center justify-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-7xl font-black tracking-tight text-white drop-shadow-[0_0_40px_rgba(0,255,255,0.35)] md:text-9xl"
          >
            LeagueLens AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-6 max-w-2xl text-lg text-gray-300 md:text-2xl"
          >
            AI-powered esports intelligence platform for League of Legends
            analytics, player insights, and match prediction.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-8 py-4 text-lg font-semibold text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-cyan-400/20 hover:shadow-[0_0_60px_rgba(34,211,238,0.5)]"
          >
            Enter The Rift
          </motion.button>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">

              <h2 className="text-4xl font-bold text-cyan-400">
                2.3M+
              </h2>

              <p className="mt-2 text-gray-300">
                Matches Processed
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">

              <h2 className="text-4xl font-bold text-purple-400">
                87.4%
              </h2>

              <p className="mt-2 text-gray-300">
                Prediction Accuracy
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">

              <h2 className="text-4xl font-bold text-pink-400">
                163
              </h2>

              <p className="mt-2 text-gray-300">
                Champions Tracked
              </p>

            </div>

          </div>

        </section>

        <SummonerSearch />

        {/* Dashboard Preview */}
        <section className="w-full max-w-7xl pb-32">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            {/* Header */}
            <div className="mb-8 flex items-center justify-between">

              <div>

                <h2 className="text-4xl font-bold">
                  Live Match Analytics
                </h2>

                <p className="mt-2 text-gray-400">
                  Real-time esports intelligence powered by AI
                </p>

              </div>

              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                LIVE
              </div>

            </div>

            {/* Dashboard Grid */}
            <div className="grid gap-6 md:grid-cols-3">

              {/* Card 1 */}
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">

                <p className="text-sm text-gray-400">
                  Win Probability
                </p>

                <h3 className="mt-4 text-5xl font-bold text-cyan-400">
                  78%
                </h3>

                <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">

                  <div className="h-full w-[78%] rounded-full bg-cyan-400" />

                </div>

              </div>

              {/* Card 2 */}
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">

                <p className="text-sm text-gray-400">
                  Gold Advantage
                </p>

                <h3 className="mt-4 text-5xl font-bold text-yellow-400">
                  +4.2K
                </h3>

                <div className="mt-6 flex items-end gap-2">

                  <div className="h-20 w-4 rounded-full bg-yellow-400" />
                  <div className="h-14 w-4 rounded-full bg-yellow-400/80" />
                  <div className="h-24 w-4 rounded-full bg-yellow-400" />
                  <div className="h-10 w-4 rounded-full bg-yellow-400/70" />
                  <div className="h-28 w-4 rounded-full bg-yellow-400" />

                </div>

              </div>

              {/* Card 3 */}
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">

                <p className="text-sm text-gray-400">
                  Top Champion
                </p>

                <h3 className="mt-4 text-3xl font-bold text-pink-400">
                  Ahri
                </h3>

                <p className="mt-3 text-gray-400">
                  64% Win Rate
                </p>

                <div className="mt-6 flex gap-3">

                  <div className="h-12 w-12 rounded-full bg-pink-500/40" />
                  <div className="h-12 w-12 rounded-full bg-cyan-500/40" />
                  <div className="h-12 w-12 rounded-full bg-purple-500/40" />

                </div>

              </div>

            </div>

          </motion.div>

        </section>

      </div>
    <ChampionSpotlight />
    </main>
  );
}