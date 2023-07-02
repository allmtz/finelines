import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const HomeArrow = () => {
  return (
    <div
      id="home-arrow"
      className="hidden fixed bottom-4 right-4 z-10 bg-white rounded-full"
    >
      <a href="#home">
        <BsFillArrowUpCircleFill size={35} fill="black" />
      </a>
    </div>
  );
};
