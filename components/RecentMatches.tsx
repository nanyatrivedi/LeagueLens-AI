"use client";

import { useState } from "react";

import MatchDetailsModal
from "./MatchDetailsModal";

export default function RecentMatches({
  matches,
}: {
  matches: any[];
}) {

  const [
    selectedMatch,
    setSelectedMatch,
  ] = useState<any>(null);

  return (
    <>
      <div className="space-y-4">

        {matches.map(
          (match, index) => (

            <div
              key={index}
              onClick={() =>
                setSelectedMatch(match)
              }
              className="cursor-pointer flex items-center justify-between rounded-2xl bg-black/30 p-4 hover:bg-cyan-500/10"
            >

              <span>
                {match.champion}
              </span>

              <span>
                {match.kills}/
                {match.deaths}/
                {match.assists}
              </span>

              <span>
                {match.cs} CS
              </span>

              <span>
                {match.gold} Gold
              </span>

              <span
                className={
                  match.win
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                {match.win
                  ? "Win"
                  : "Loss"}
              </span>

            </div>

          )
        )}

      </div>

      {selectedMatch && (
        <MatchDetailsModal
          match={selectedMatch}
          onClose={() =>
            setSelectedMatch(null)
          }
        />
      )}
    </>
  );
}