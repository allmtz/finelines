import { Stamp } from "@/components/Stamp";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Head from "next/head";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Fine Lines Barbershop</title>
        <meta
          name="description"
          content="Discover our local barbershop in Calistoga, your go-to destination for exceptional haircuts and grooming services in the beautiful Napa Valley."
        />

        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Fine Lines" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Discover our local barbershop in Calistoga, your go-to destination for exceptional haircuts and grooming services in the beautiful Napa Valley."
        />
      </Head>
      <div className="h-screen w-screen flex justify-center">
        <main className="flex flex-col items-center mt-40 gap-4">
          <Stamp />
          <h1 className="text-3xl">
            <span className={playfair.className}>Coming Soon...</span>
          </h1>
        </main>
      </div>
    </>
  );
}
