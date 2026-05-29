export default function PlayerProfile() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">

      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <div className="flex flex-col gap-8 md:flex-row md:items-center">

          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-cyan-500/20 text-4xl font-bold">
            F
          </div>

          <div className="flex-1">

            <h2 className="text-4xl font-bold text-white">
              Faker
            </h2>

            <p className="mt-2 text-cyan-400">
              Challenger • Korea
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">

              <div>
                <p className="text-sm text-gray-400">
                  Level
                </p>

                <p className="text-xl font-bold">
                  1250
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Win Rate
                </p>

                <p className="text-xl font-bold">
                  63%
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  KDA
                </p>

                <p className="text-xl font-bold">
                  5.8
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Main Role
                </p>

                <p className="text-xl font-bold">
                  Mid
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}