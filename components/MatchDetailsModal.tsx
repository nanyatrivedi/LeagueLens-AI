"use client";

type Props = {
  match: any;
  onClose: () => void;
};

export default function MatchDetailsModal({
  match,
  onClose,
}: Props) {
  if (!match) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-zinc-900 p-8">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-3xl font-bold">
            Match Details
          </h2>

          <button
            onClick={onClose}
            className="text-xl"
          >
            ✕
          </button>

        </div>

        <div className="space-y-4">

          <p>
            Champion:
            {" "}
            {match.champion}
          </p>

          <p>
            KDA:
            {" "}
            {match.kills}/
            {match.deaths}/
            {match.assists}
          </p>

          <p>
            CS:
            {" "}
            {match.cs}
          </p>

          <p>
            Gold:
            {" "}
            {match.gold}
          </p>

          <p>
            Result:
            {" "}
            {match.win
              ? "Win"
              : "Loss"}
          </p>

        </div>

      </div>

    </div>
  );
}