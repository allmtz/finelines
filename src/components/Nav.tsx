import Image from "next/image";
import pole from "../assets/flpole.svg";
import { BsInstagram } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

import { Drawer } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

import t from "../assets/flpole.svg";

export const Nav = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <nav
      id={id}
      className="flex justify-between items-center w-full p-2 lg:px-5 z-20 bg-black"
    >
      <Link href="/">
        <Image src={t} width={40} height={40} alt=""></Image>
      </Link>
      <ul className="SOCIALS justify-between flex items-center gap-5">
        <li>
          <a
            href="https://www.instagram.com/calistogabarbershop/"
            target="_blank"
            data-umami-event="Instagram click"
          >
            <BsInstagram size={35} className="fill-white" />
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com/search?q=fine+lines+calistoga+barber&oq=fine+lines+calistoga+barber&aqs=chrome..69i57j69i64.3999j1j1&sourceid=chrome&ie=UTF-8#lkt=LocalPoiReviews&trex=m_t:lcl_akp,rc_ludocids:4830825983915478730,rc_q:fine%2520lines%2520calistoga%2520barber,ru_gwp:0%252C7,ru_q:fine%2520lines%2520calistoga%2520barber,trex_id:e7RTEc&lpg=cid:CgIgAQ%3D%3D"
            target="_blank"
            data-umami-event="Google reviews click"
          >
            <AiFillGoogleCircle size={35} className="fill-white" />
          </a>
        </li>
        <li>
          <a href="tel:707-737-4700" data-umami-event="Call Shop click">
            <AiOutlinePhone size={35} className="fill-white"></AiOutlinePhone>
          </a>
        </li>
      </ul>
      <RxHamburgerMenu
        size={40}
        color="white"
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
      />

      <Drawer anchor={"right"} open={open} onClose={closeModal}>
        <div className="flex flex-col gap-4 p-8 text-xl h-full bg-black text-neutral-200 border-l border-white">
          <div className="cursor-pointer" onClick={closeModal}>
            X
          </div>
          <Link href="/" className="hover:opacity-80" onClick={closeModal}>
            Home
          </Link>
          <Link
            href="/#about"
            className="hover:opacity-80"
            onClick={closeModal}
          >
            About
          </Link>
          <Link href="/#book" className="hover:opacity-80" onClick={closeModal}>
            Book
          </Link>
          <Link
            href="#location"
            className="hover:opacity-80"
            onClick={closeModal}
          >
            Location
          </Link>
          <Link
            href="/gallery"
            className="hover:opacity-80"
            onClick={closeModal}
          >
            Gallery
          </Link>
        </div>
      </Drawer>
    </nav>
  );
};
