export default function ComparePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <div className="mx-auto max-w-4xl px-6 py-12">

        <h1 className="mb-10 text-center text-5xl font-bold">
          Compare Players
        </h1>

        <form
          action="/compare/result"
          className="space-y-6"
        >

          <input
            name="player1"
            placeholder="Faker#KR1"
            className="w-full rounded-xl bg-white/10 p-4"
          />

          <input
            name="player2"
            placeholder="Chovy#KR1"
            className="w-full rounded-xl bg-white/10 p-4"
          />

          <button
            className="w-full rounded-xl bg-cyan-500 p-4 font-bold text-black"
          >
            Compare
          </button>

        </form>

      </div>

    </main>
  );
}