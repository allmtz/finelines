import { motion } from "framer-motion";
import { BarberCard } from "@/components/BarberCard";
import { StaticImageData } from "next/image";

export type Barber = {
  name: string;
  imgSrc: string | StaticImageData;
  phone?: string;
  bookLink?: string;
};

const barbers: Barber[] = [
  {
    name: "Daniel",
    imgSrc: "/barbers/daniel.jpg",
    phone: "707-752-7018",
    bookLink: "https://finelinesbarbershop.as.me/Daniel",
  },
  {
    name: "Adrian",
    imgSrc: "/barbers/adrian.jpg",
    phone: "707-327-7592",
    bookLink: "https://finelinesbarbershop.as.me/Adrian",
  },
  {
    name: "Jorge",
    imgSrc: "/barbers/jorge.jpeg",
    phone: "707-312-3453",
    bookLink: "https://finelinesbarbershop.as.me/?calendarID=8931157",
  },
];

export const Barbers = () => {
  return (
    <>
      {barbers.map((ba, idx) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
          key={idx}
        >
          {" "}
          <BarberCard
            name={ba.name}
            imgSrc={ba.imgSrc}
            phone={ba.phone}
            bookLink={ba.bookLink}
          />
        </motion.div>
      ))}
    </>
  );
};
