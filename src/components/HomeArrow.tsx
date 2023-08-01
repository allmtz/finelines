import { FaCircleArrowUp } from "react-icons/fa6";

export const HomeArrow = () => {
  return (
    <div
      id="home-arrow"
      className="hidden fixed bottom-4 right-4 z-10 bg-white border border-white rounded-full"
    >
      <a href="#home">
        <FaCircleArrowUp size={35} fill="black" />
      </a>
    </div>
  );
};
