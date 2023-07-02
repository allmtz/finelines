import Image from "next/image";
import pole from "../assets/flpole.svg";
import { BsInstagram } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

import { Drawer } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

export const Nav = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <nav
      id={id}
      className="flex justify-between items-center w-full p-2  z-20 bg-black"
    >
      <ul className="SOCIALS justify-between flex items-center gap-5">
        <li>
          <a href="https://www.instagram.com/elchinoblends/" target="_blank">
            <BsInstagram size={35} className="fill-white" />
          </a>
        </li>
        <li>
          <a>
            <AiFillGoogleCircle size={35} className="fill-white" />
          </a>
        </li>
        <li>
          <a href="tel:707-752-7018">
            <AiOutlinePhone size={35} className="fill-white"></AiOutlinePhone>
          </a>
        </li>
      </ul>
      <RxHamburgerMenu size={40} color="white" onClick={() => setOpen(!open)} />

      <Drawer anchor={"right"} open={open} onClose={closeModal}>
        <div className="flex flex-col gap-4 p-8 text-xl h-full bg-black text-neutral-200 border-l border-white">
          <div onClick={closeModal}>X</div>
          <Link href="/" onClick={closeModal}>
            Home
          </Link>
          <Link href="/#about" onClick={closeModal}>
            About
          </Link>
          <Link href="/#book" onClick={closeModal}>
            Book
          </Link>
          <Link href="#location" onClick={closeModal}>
            Location
          </Link>
          <Link href="/gallery" onClick={closeModal}>
            Gallery
          </Link>
        </div>
      </Drawer>
    </nav>
  );
};
