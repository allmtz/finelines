import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Layout } from "@/components/Layout";
import { Nav } from "@/components/Nav";
import Reviews from "@/components/Reviews";
import { useEffect } from "react";
import { HomeArrow } from "@/components/HomeArrow";

const TOTAL_PICS = ["1", "2", "3", "4", "5", "6", "7"];

export default function Gallery() {
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
    <Layout>
      <div className="flex flex-col justify-center gap-12">
        <Nav id="home"></Nav>
        <Reviews />

        <div className="GALLERY p-2 grid grid-cols-2 lg:grid-cols-3 gap-2 grid-rows-auto grid-flow-dense object-contain">
          {TOTAL_PICS.map((picNumber, idx) => {
            return (
              <Image
                src={`/gallery/${picNumber}.jpg`}
                width={500}
                height={300}
                alt=""
                key={idx}
              />
            );
          })}
        </div>
        <div>
          <Footer id="location" />
        </div>
      </div>
      <HomeArrow />
    </Layout>
  );
}
