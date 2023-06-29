import Image from "next/image";
import pole from "../assets/flpole.svg";
import { BsInstagram } from "react-icons/bs";
import { BsYelp } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

export const Nav = () => {
  return (
    <nav className="flex justify-between items-center w-full p-2  z-20 bg-black">
      <ul className="SOCIALS justify-between flex items-center gap-5">
        <li>
          <a href="https://www.instagram.com/elchinoblends/" target="_blank">
            <BsInstagram size={35} className="fill-white" />
          </a>
        </li>
        <li>
          <a>
            <BsYelp size={35} className="fill-red-500" />
          </a>
        </li>
        <li>
          <a href="tel:707-752-7018">
            <AiOutlinePhone size={35} className="fill-white"></AiOutlinePhone>
          </a>
        </li>
      </ul>
      <RxHamburgerMenu size={40} color="white" />
    </nav>
  );
};
