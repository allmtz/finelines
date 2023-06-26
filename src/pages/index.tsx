import { ComingSoon } from "@/components/ComingSoon";
import Head from "next/head";

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
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ComingSoon />
    </>
  );
}
