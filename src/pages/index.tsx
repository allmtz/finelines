import { ComingSoon } from "@/components/ComingSoon";
import Head from "next/head";
import { Layout } from "@/components/Layout";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { About } from "@/components/About";
import { BarberCard } from "@/components/BarberCard";
import { Footer } from "@/components/Footer";
import Reviews from "@/components/Reviews";
import { HomeArrow } from "@/components/HomeArrow";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const home = document.querySelector("#home");
    const arrow = document.querySelector("#home-arrow");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          arrow!.classList.add("show");
        } else {
          arrow!.classList.remove("show");
        }
      });
    });

    const cleanup = observer.observe(home!);
    return cleanup;
  }, []);

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
        <Nav id="home" />
        <main className="flex flex-col gap-6">
          <Hero></Hero>
          <Section title="About us" id="about">
            <About></About>
          </Section>
          <Reviews></Reviews>
          <Section title="Pick a Professional" id="book">
            <>
              <BarberCard name="Daniel" imgSrc="" phone="1" bookLink="a" />
              <BarberCard name="Adrian" imgSrc="" phone="2" bookLink="b" />
              <BarberCard name="Elsa" imgSrc="" phone="3" bookLink="c" />
            </>
          </Section>
          <Footer id="location"></Footer>
        </main>
        <HomeArrow />
      </Layout>
    </>
  );
}
