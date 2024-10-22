import Link from "next/link";

export default function IntroductionToStatics() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className={`mb-4 text-xl md:text-2xl`}>
        PENGENALAN STATIKA
      </h1>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
       <ul className="list-inside text-center sm:text-left">
          <li className="mb-2"><Link href={"/statics/introduction-to-statics"}>PENGENALAN STATIKA</Link></li>
          <li className="mb-2"><Link href={"/statics/force-systems"}>SISTEM GAYA</Link></li>
          <li className="mb-2"><Link href={"/statics/force-equilibrium"}>KESETIMBANGAN GAYA DAN MOMEN</Link></li>
          <li className="mb-2"><Link href={"/statics/structures"}>ANEKA STRUKTUR</Link></li>
          <li className="mb-2"><Link href={"/statics/friction"}>FRIKSI</Link></li>
          <li className="mb-2"><Link href={"/statics/virtual-works"}>USAHA VIRTUAL</Link></li>
          <li className="mb-2"><Link href={"/statics/area-moment-of-inertia"}>MOMEN INERSIA LUAS</Link></li>
          <li className="mb-2"><Link href={"/statics/mass-moment-of-inertia"}>MOMEN INERSIA MASSA</Link></li>
        </ul>
      </main>
      <footer>Referensi: Meriam and Kraige.Statics 7th Edition</footer>
    </div>
  )
}