import { ComingSoon } from "@/components/ComingSoon";
import { Layout } from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";

//Footer
import { FiExternalLink } from "react-icons/fi";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { About } from "@/components/About";
import { BarberCard } from "@/components/BarberCard";

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
        <main className="flex flex-col">
          <Hero />
          <Section title={"About us"} id="about">
            <About />
          </Section>
          <Section title="Pick a Professional" id="book">
            <>
              <BarberCard name="Daniel" imgSrc="" />
              <BarberCard name="Adrian" imgSrc="" />
            </>
          </Section>

          <footer className="flex items-center flex-col p-2">
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
          </footer>
        </main>
      </Layout>
    </>
  );
}
