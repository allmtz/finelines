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
  { name: "Daniel", imgSrc: "", phone: "1", bookLink: "a" },
  { name: "Adrian", imgSrc: "", phone: "2", bookLink: "b" },
  { name: "Elsa", imgSrc: "", phone: "3", bookLink: "c" },
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
