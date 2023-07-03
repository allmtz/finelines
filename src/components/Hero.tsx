import Image from "next/image"; //Landing
import stamp from "../assets/flstamp.svg";

export const Hero = () => {
  return (
    <div className="flex flex-col relative w-screen h-screen overflow-hidden">
      <div className="HERO h-full w-full absolute bg-haircut bg-center bg-cover top-0 left-0"></div>
      <div
        className="SHADE bg-gradient-to-b from-black via-transparent bg-black bg-opacity-50
        absolute h-full w-full top-0 left-0"
      ></div>
      <header className="CONTENT z-10 mt-32 flex flex-col items-center">
        <h1>
          <Image
            src={stamp}
            height={350}
            width={350}
            alt="Fine Lines Barbershop"
          ></Image>
        </h1>
        <a
          className="font-semibold py-3 px-9 bg-hl rounded-sm text-black mt-10"
          href="#book"
        >
          Book Now
        </a>
      </header>
    </div>
  );
};
