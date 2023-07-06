import Image from "next/image";

import { FiExternalLink } from "react-icons/fi";

export const Footer = ({ id }: { id: string }) => {
  return (
    <footer
      id={id}
      className="mt-4 lg:mt-12 flex items-center flex-col p-2 gap-4 text-zinc-200 bg-gray-800"
    >
      <div className="lg:flex lg:justify-between lg:w-full max-w-[1050px]">
        <div>
          <div className="mt-4 flex items-center justify-evenly mb-4 gap-2 text-lg">
            <a
              href="https://maps.google.com/?q=1117+Lincoln+Ave,+Calistoga,+CA+94515"
              target="_blank"
              className="flex items-center gap-1 lg:text-xl"
            >
              Google Maps
              <FiExternalLink size={25}></FiExternalLink>
            </a>
            <a
              href="https://maps.apple.com/maps?q=1117+Lincoln+Ave,+Calistoga,+CA+94515"
              className="flex items-center gap-1 lg:text-xl"
              target="_blank"
            >
              Apple Maps
              <FiExternalLink size={25}></FiExternalLink>
            </a>
          </div>
          <div className="lg:h-[250px] lg:w-[350px]">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDPjBaGut2XWcj7qmpsJM0QzTU6QxvBDYQ
            &q=place_id:EjAxMTE3IExpbmNvbG4gQXZlIHN0ZSBjLCBDYWxpc3RvZ2EsIENBIDk0NTE1LCBVU0EiIRofChYKFAoSCUFXWcIKQ4SAESzPgC760DwuEgVzdGUgYw"
            ></iframe>
          </div>
        </div>

        <div className="md:flex md:gap-20 md:mt-4">
          <section className="mt-4 flex flex-col items-center gap-3">
            <h3 className="lg:text-xl">Hours</h3>
            <p>MONDAY: 3:00-5:00</p>
            <p>MONDAY: 3:00-5:00</p>
            <p>MONDAY: 3:00-5:00</p>
            <p>MONDAY: 3:00-5:00</p>
            <p>MONDAY: 3:00-5:00</p>
            <p>Closed Sat Sun</p>
          </section>

          <div>
            <p className="mt-4 md:mt-0 text-center  lg:text-lg max-w-[400px]">
              1117 Lincoln Ave, Ste C, Calistoga CA, 94515
            </p>
            <Image
              className="mt-2"
              src={"/images/shop.jpg"}
              width={350}
              height={350}
              alt=""
            ></Image>
          </div>
        </div>
      </div>

      <div className="text-center text-lg lg:flex lg:gap-12 lg:mt-10">
        <p>daniel@flbarber.com</p>
        <p className="font-mono">707-303-111</p>
      </div>
    </footer>
  );
};
