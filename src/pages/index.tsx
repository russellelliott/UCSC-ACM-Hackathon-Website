import { ArrowButton } from "@/components/Button";
import { Criteria } from "@/components/Criteria";
import { Info } from "@/components/Info";
import { Nav } from "@/components/Nav";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [dots, setDots] = useState("...");

  useEffect(() => {
    setTimeout(() => {
      if (dots.length > 2) {
        setDots("");
      } else {
        setDots(dots + ".");
      }
    }, 500);
  }, [dots, setDots]);

  return (
    <>
      <Head>
        <title>UCSC ACM Hackathon</title>
        <meta
          name="description"
          content="A hackathon brought to you by UCSC ACM"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="w-screen flex flex-col gap-16 items-center pb-96">
        <div className="w-full flex justify-center bg-black text-white">
          <div className="w-full max-w-screen-lg">
            <div className="h-screen flex flex-col justify-center items-center gap-4 border-b">
              <h1 className="text-6xl">
                ACM
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Hacks
                </span>
              </h1>
              <p className="italic text-gray-400">
                A hackathon brought to you by UCSC ACM{dots}
              </p>
              <div className="flex flex-col items-center gap-4">
                <ArrowButton
                  text="I'm interested"
                  link="https://forms.gle/sq2G1Ga4pcDgrrAZ6"
                />
                <ArrowButton
                  text="I want to be a mentor"
                  link="https://forms.gle/sq2G1Ga4pcDgrrAZ6"
                />
              </div>
            </div>
          </div>
        </div>
        <Info />
        <Criteria />
      </main>
    </>
  );
}
