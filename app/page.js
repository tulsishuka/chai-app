import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (

<div className="flex flex-col items-center min-h-screen w-full px-4 py-8">
     <div className="flex items-center flex-col md:flex-row gap-4 mb-6">
       <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left">Buy me a chai</h1>
        <Image src="/chai2.gif" width={120} height={120} alt="chai gif" />
     </div>

    <p className="max-w-2xl text-lg md:text-xl italic text-zinc-600 text-center mb-6">
       A crowding fund platform for creators. Get funded by your fans and followers...
     </p>

    <div className="flex flex-col md:flex-row gap-4 mb-8">
       <Link href="/start">
       <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-6 py-2.5 text-center">
            Start Now
       </button>
  </Link>
   <Link href="/about">
   <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-6 py-2.5 text-center">
           About Us
         </button>
       </Link>
    </div>

<div className="w-full h-px bg-zinc-300 my-6" />

 <div className="text-center mb-12">
       <h2 className="text-2xl md:text-3xl font-bold italic">You can support us by buying me a chai</h2>
   </div>

     <div className="flex flex-col lg:flex-row justify-center gap-12 mb-12 w-full px-4 max-w-6xl">
       {[
          { src: "/lalu.gif", label: "Fund our community", desc: "We are here to guide you" },
          { src: "/watch.gif", label: "Fund our community", desc: "We are here to guide you" },
          { src: "/money.gif", label: "Fund our community", desc: "We are here to guide you" },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-2 text-center">
            <Image className="w-20 rounded-full border-4 border-green-800" src={item.src} width={120} height={120} alt={item.src} />
            <p className="text-zinc-600">{item.label}</p>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-zinc-300 my-6" />

      <div className="text-center mb-12 px-4">
        <h1 className="text-2xl font-bold mb-4">Your recent exclusive update here</h1>
        <div className="w-full flex justify-center">
          <iframe
            className="w-full max-w-2xl aspect-video"
            src="https://www.youtube.com/embed/IVJpEkbf8zc?si=ew_IKp3nii5ePcoG"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

  );
}

