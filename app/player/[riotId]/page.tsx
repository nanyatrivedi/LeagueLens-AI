export default async function PlayerPage({
  params,
}: {
  params: Promise<{ riotId: string }>;
}) {
  const { riotId } = await params;

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold">
        Player: {decodeURIComponent(riotId)}
      </h1>
    </main>
  );
}