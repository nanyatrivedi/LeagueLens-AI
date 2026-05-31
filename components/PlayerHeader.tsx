type PlayerHeaderProps = {
  playerName: string;
  level: number;
  profileIconId: number;
  role?: string;
};

export default function PlayerHeader({
  playerName,
  level,
  profileIconId,
  role
}: PlayerHeaderProps) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <div className="flex flex-col gap-8 md:flex-row md:items-center">

        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-cyan-500/20 text-5xl font-bold text-cyan-300">
          {playerName.charAt(0)}
        </div>

        <div className="flex-1">

          <h1 className="text-5xl font-bold text-white">
            {playerName}
          </h1>

          <p className="mt-2 text-cyan-400">
            Summoner Level {level}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">

            <div>
              <p className="text-sm text-gray-400">
                Level
              </p>
              <p className="text-2xl font-bold">
                {level}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">
                Profile Icon
              </p>
              <p className="text-2xl font-bold">
                {profileIconId}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">
                Region
              </p>
              <p className="text-2xl font-bold">
                KR
              </p>
            </div>

            <div>
  <p className="text-sm text-gray-400">
    Main Role
  </p>

  <p className="text-2xl font-bold">
    {role || "Unknown"}
  </p>
</div>

            <div>
              <p className="text-sm text-gray-400">
                Status
              </p>
              <p className="text-2xl font-bold text-green-400">
                Online
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}