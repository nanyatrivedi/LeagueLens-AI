export default function Navbar() {
  return (
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
  );
}