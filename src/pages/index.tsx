import { ComingSoon } from "@/components/ComingSoon";
import Head from "next/head";
import Script from "next/script";
import { Layout } from "@/components/Layout";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import Reviews from "@/components/Reviews";
import { HomeArrow } from "@/components/HomeArrow";
import { useEffect } from "react";

import { Barbers } from "@/components/Barbers";

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

      {/* umami */}
      <Script
        src="https://us.umami.is/script.js"
        defer
        data-website-id="8e1b2318-cd20-4eec-9c09-6d94819139f4"
      />

      <Layout>
        <Nav id="home" />
        <main className="flex flex-col">
          <Hero></Hero>

          <section
            id="about"
            className="min-h-screen lg:mt-12 lg:min-h-0 flex flex-col p-2 gap-4"
          >
            <h2 className="font-heading font-semibold text-2xl lg:text-3xl self-start border-b border-slate-500">
              About Us
            </h2>
            <div className="flex flex-col items-center">
              <About></About>
            </div>
            <Reviews></Reviews>
          </section>

          <Section title="Pick a Professional" id="book">
            <div className="flex flex-col gap-12 md:flex-row md:gap-16">
              <Barbers />
            </div>
          </Section>
          <Footer id="location"></Footer>
        </main>
        <HomeArrow />
      </Layout>
    </>
  );
}
