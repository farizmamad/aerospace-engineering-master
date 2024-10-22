import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2>TEORI</h2>
        <ul className="list-inside text-center sm:text-left">
          <li className="mb-2"><Link href={"/statics"}>Statika</Link></li>
        </ul>
        <h2>PRAKTEK</h2>
        <ul className="list-inside text-center sm:text-left">
          <li className="mb-2"><Link href={"/flight-envelope-viewer"}>Flight Envelope Viewer</Link></li>
        </ul>
      </main>
    </div>
  );
}
