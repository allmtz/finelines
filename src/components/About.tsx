import Image from "next/image";

export const About = () => {
  return (
    <>
      <Image src={"/images/shop.jpg"} width={400} height={400} alt=""></Image>
      <p className="mt-4 max-w-lg md:text-lg lg:leading-9 tracking-wide leading-relaxed ">
        Established in Calistoga, Fine Lines Barbershop caters to the people and
        visitors of Napa Valley, providing quality haircuts at affordable
        prices. Our skilled barbers deliver professional service and aim to
        exceed your expectations.{" "}
        <strong>Walk-ins are welcome, but appointments are preferred </strong> .
        Thank you for your support! We are grateful to serve our small town and
        look forward to seeing you soon!
      </p>
    </>
  );
};
