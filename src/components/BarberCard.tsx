import { StaticImageData } from "next/image";
import Image from "next/image";

export const BarberCard = ({
  name,
  imgSrc,
}: {
  name: string;
  imgSrc: string | StaticImageData;
}) => {
  return (
    <div className="BARBER-CARD text-center">
      <h3 className="mt-1 text-xl font-medium">{name}</h3>
      <Image
        src={"/images/chair.jpg"}
        className=" rounded-md"
        height={150}
        width={150}
        alt="barber-name"
      ></Image>
    </div>
  );
};
