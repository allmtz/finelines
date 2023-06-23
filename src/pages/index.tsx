import { Stamp } from "@/components/Stamp";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center">
      <main className="flex flex-col items-center mt-40 gap-4">
        <Stamp />
        <h1 className="text-3xl">
          <span className={playfair.className}>Coming Soon...</span>
        </h1>
      </main>
    </div>
  );
}
