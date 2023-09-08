import Image from "next/image";
import { AiOutlinePhone } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { Barber } from "./Barbers";

export const BarberCard = ({ name, imgSrc, phone, bookLink }: Barber) => {
  return (
    <div className="BARBER-CARD text-center">
      <h3 className="mt-1 text-xl font-medium">{name}</h3>
      <Image
        src={imgSrc}
        className="mt-2 rounded-md"
        height={150}
        width={150}
        alt={""}
      ></Image>{" "}
      <div className="flex items-center justify-center gap-4 mt-2">
        {phone ? (
          <div className="bg-black rounded-full p-2">
            <a href={`tel:${phone}`}>
              <AiOutlinePhone
                size={30}
                className="fill-zinc-200"
              ></AiOutlinePhone>
            </a>
          </div>
        ) : (
          ""
        )}{" "}
        {bookLink ? (
          <div className="bg-black rounded-full p-2">
            <a href={bookLink} target="_blank">
              <BsBook size={30} className="fill-zinc-100"></BsBook>
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
