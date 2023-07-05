import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Layout } from "@/components/Layout";
import { Nav } from "@/components/Nav";
import Reviews from "@/components/Reviews";
import { useEffect } from "react";
import { HomeArrow } from "@/components/HomeArrow";

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

        <div className="GALLERY p-2 grid grid-cols-2 gap-2 grid-rows-auto grid-flow-dense object-contain">
          <div className="relative h-52 border">
            <Image src={"/images/haircut.jpg"} fill alt="" />
          </div>{" "}
          <div className="relative h-52">
            <Image src={"/images/haircut.jpg"} fill alt="" />
          </div>{" "}
          <div className="relative h-52">
            <Image src={"/images/haircut.jpg"} fill alt="" />
          </div>{" "}
          <div className="relative h-52">
            <Image src={"/images/haircut.jpg"} fill alt="" />
          </div>
        </div>
        <Footer id="location" />
      </div>
      <HomeArrow />
    </Layout>
  );
}
