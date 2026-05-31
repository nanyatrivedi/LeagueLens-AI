export default function Loading() {
  return (
    <main className="min-h-screen bg-black text-white">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="h-16 w-96 animate-pulse rounded-xl bg-white/10" />

        <div className="mt-10 h-64 animate-pulse rounded-[32px] bg-white/5" />

        <div className="mt-10 h-48 animate-pulse rounded-[32px] bg-white/5" />

        <div className="mt-10 h-96 animate-pulse rounded-[32px] bg-white/5" />

      </div>

    </main>
  );
}