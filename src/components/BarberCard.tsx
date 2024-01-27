import Image from "next/image";
import { AiOutlinePhone } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { Barber } from "./Barbers";
import Link from "next/link";

export const BarberCard = ({ name, imgSrc, phone, bookLink }: Barber) => {
  return (
    <div className="BARBER-CARD text-center">
      <h3 className="mt-1 text-xl font-medium">{name}</h3>
      <Link
        href={bookLink ? bookLink : ""}
        aria-label={`Book ${name}`}
        target="_blank"
      >
        <div className="relative h-36 w-36">
          <Image
            src={imgSrc}
            className="object-cover mt-2 rounded-md"
            fill
            alt={""}
          ></Image>{" "}
        </div>
      </Link>

      <div className="flex items-center justify-center gap-4 mt-4">
        {phone ? (
          <div className="bg-black rounded-full p-2">
            <a
              href={`tel:${phone}`}
              aria-label={`Call ${name}`}
              data-umami-event={`Call: ${name}`}
            >
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
            <a
              href={bookLink}
              aria-label={`Book ${name}`}
              target="_blank"
              data-umami-event={`Book: ${name}`}
            >
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
