import { ComingSoon } from "@/components/ComingSoon";
import { Layout } from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";

//Landing
import stamp from "../assets/flstamp.svg";

//Footer
import { FiExternalLink } from "react-icons/fi";
import { Nav } from "@/components/Nav";

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

        {/* favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Layout>
        <Nav />
        <main className="flex flex-col gap-4">
          <div className="flex flex-col relative w-screen h-screen">
            <div className="LANDING h-full w-full absolute bg-haircut bg-center bg-cover top-0 left-0"></div>
            <div className="SHADE bg-black bg-opacity-50 absolute h-full w-full top-0 left-0"></div>
            <header className="CONTENT z-10 mt-32 flex flex-col items-center">
              <h1>
                <Image
                  src={stamp}
                  height={350}
                  width={350}
                  alt="Fine Lines Barbershop"
                ></Image>
              </h1>
              <button className="py-3 px-9 bg-hl rounded-sm text-black mt-10">
                Book Now
              </button>
            </header>
          </div>

          <section className="h-screen flex flex-col items-center p-2">
            <h2 className="text-2xl">About us</h2>
            <Image
              src={"/images/shop.jpg"}
              width={300}
              height={300}
              alt=""
            ></Image>
            <p className="mt-4">
              Established in Calistoga, Fine Lines Barbershop caters to the
              people and visitors of Napa Valley, providing quality haircuts at
              affordable prices. Our skilled barbers deliver professional
              service and aim to exceed your expectations. Walk-ins are welcome,
              but appointments are preferred for enhanced service. Thank you for
              your support! We are grateful to serve our small town and look
              forward to seeing you soon!
            </p>
            <div className="TESTIMONIALS w-full flex mt-4 h-full text-sm text-center">
              <p>
                &quot;Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quis, ab.&quot;
              </p>
              <p>
                &quot;Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nihil, quas.&quot;
              </p>
            </div>
          </section>

          <section className="flex flex-col items-center">
            <h2>Pick a Professional</h2>
            <div className="BARBER-CARD text-center">
              <p>Joe</p>
              <Image
                src={"/images/chair.jpg"}
                height={150}
                width={150}
                alt="barber-name"
              ></Image>
            </div>
          </section>

          <section className="flex items-center flex-col p-2">
            <div className="flex gap-2 text-lg">
              <div className="flex items-center gap-2">
                <a href="" className="">
                  Google Maps
                </a>
                <FiExternalLink size={30}></FiExternalLink>
              </div>{" "}
              <div className="flex items-center gap-2">
                <a href="" className="">
                  Apple Maps
                </a>
                <FiExternalLink size={30}></FiExternalLink>
              </div>
            </div>
            <Image
              src={"/images/shop.jpg"}
              width={300}
              height={300}
              alt=""
            ></Image>
            <div className="text-lg text-center">
              <p>1117 Lincoln Ave Ste C Calistoga CA 94515</p>
              <p>daniel@flbarber.com</p>
              <p>707-303-111</p>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
