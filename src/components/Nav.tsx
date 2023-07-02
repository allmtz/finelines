import Image from "next/image";
import pole from "../assets/flpole.svg";
import { BsInstagram } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

import { Drawer } from "@mui/material";
import { useState } from "react";

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
          <a href="/" onClick={closeModal}>
            Home
          </a>
          <a href="/#about" onClick={closeModal}>
            About
          </a>
          <a href="/#book" onClick={closeModal}>
            Book
          </a>
          <a href="#location" onClick={closeModal}>
            Location
          </a>
          <a href="/gallery" onClick={closeModal}>
            Gallery
          </a>
        </div>
      </Drawer>
    </nav>
  );
};
