"use client";

type Props = {
  playerName: string;
  role: string;
  score: number;
};

export default function ExportReport({
  playerName,
  role,
  score,
}: Props) {

  async function exportData() {

    const response =
      await fetch(
        "/api/export-report",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            playerName,
            role,
            score,
          }),
        }
      );

    const blob =
      await response.blob();

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;
    a.download =
      `${playerName}-report.pdf`;

    a.click();
  }

  return (
    <button
      onClick={exportData}
      className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black hover:bg-cyan-400"
    >
      Export Report
    </button>
  );
}