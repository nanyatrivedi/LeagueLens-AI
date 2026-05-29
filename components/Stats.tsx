export default function Stats() {
  return (
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
  );
}