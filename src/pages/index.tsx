import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Head from "next/head";

import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import location from "../assets/location.svg";
import stamp from "../assets/flstamp.svg";

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
      <div className="h-screen w-screen flex justify-center items-center bg-black min-w-[320px] min-h-[500px]">
        <main className="flex flex-col justify-center items-center gap-4 text-white">
          <Image src={stamp} height={600} width={600} alt="fine lines logo" />
          <h1 className="text-3xl">
            <span className={playfair.className}>Coming Soon...</span>
          </h1>

          <div>
            <div className="flex items-center justify-center gap-1">
              <Image src={email} alt="email" width={30} height={30} />
              <a
                href="mailto:barbershopfinelines@gmail.com"
                className="hover:text-hl"
              >
                barbershopfinelines@gmail.com
              </a>
            </div>

            <div className="flex items-center mt-2 gap-1">
              <Image src={phone} alt="phone" width={30} height={30} />
              <a href="tel:707-752-7018" className="hover:text-hl">
                707-752-7018
              </a>

              <Image
                src={location}
                alt="location"
                width={25}
                height={25}
                className="ml-8"
              />
              <p>Calistoga, CA</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
