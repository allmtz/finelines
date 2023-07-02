import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Layout } from "@/components/Layout";
import { Nav } from "@/components/Nav";
import Reviews from "@/components/Reviews";

export default function Gallery() {
  return (
    <Layout>
      <div className="flex flex-col gap-12">
        <Nav id="home"></Nav>
        <Reviews />

        <div className="GALLERY p-2 grid gap-2 grid-cols-2">
          <div className="h-[200px] w-[150px] relative">
            <Image src={"/images/haircut.jpg"} fill alt="" />
          </div>
          <div className="h-[200px] w-[150px] relative">
            <Image src={"/images/haircut.jpg"} fill alt="" />
          </div>{" "}
          <div className="h-[200px] w-[150px] relative">
            <Image src={"/images/haircut.jpg"} fill alt="" />
          </div>{" "}
          <div className="h-[200px] w-[150px] relative">
            <Image src={"/images/haircut.jpg"} fill alt="" />
          </div>
          <div className="h-[200px] w-[150px] relative">
            <Image src={"/images/haircut.jpg"} fill alt="" />
          </div>
          <div className="h-[200px] w-[150px] relative">
            <Image src={"/images/haircut.jpg"} fill alt="" />
          </div>{" "}
          <div className="h-[200px] w-[150px] relative">
            <Image src={"/images/haircut.jpg"} fill alt="" />
          </div>{" "}
          <div className="h-[200px] w-[150px] relative">
            <Image src={"/images/haircut.jpg"} fill alt="" />
          </div>
        </div>

        <Footer id="location" />
      </div>
    </Layout>
  );
}
