import Image from "next/image";

import { FiExternalLink } from "react-icons/fi";

export const Footer = ({ id }: { id: string }) => {
  return (
    <>
      <footer
        id={id}
        className="mt-4 lg:flex-row lg:justify-evenly  lg:mt-12 flex items-center flex-col p-2 gap-4 text-zinc-200 bg-gray-800"
      >
        <div>
          <div className="mt-4 flex items-center justify-evenly mb-4 gap-2 text-lg">
            <a
              href="https://maps.google.com/?q=1117+Lincoln+Ave,+Calistoga,+CA+94515"
              aria-label="Open directions in Google Maps"
              target="_blank"
              className="flex items-center gap-1 lg:text-xl"
            >
              Google Maps
              <FiExternalLink size={25}></FiExternalLink>
            </a>
            <a
              href="https://maps.apple.com/maps?q=1117+Lincoln+Ave,+Calistoga,+CA+94515"
              aria-label="Open directions in Apple Maps"
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
              title="Google Maps Embed"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDPjBaGut2XWcj7qmpsJM0QzTU6QxvBDYQ
            &q=place_id:EjAxMTE3IExpbmNvbG4gQXZlIHN0ZSBjLCBDYWxpc3RvZ2EsIENBIDk0NTE1LCBVU0EiIRofChYKFAoSCUFXWcIKQ4SAESzPgC760DwuEgVzdGUgYw"
            ></iframe>
          </div>
        </div>

        <section className="mt-4 flex flex-col items-center gap-3">
          <h3 className="lg:text-xl">Hours</h3>
          <p>Tuesday-Saturday: 9:00am - 6:00pm</p>
          <p className="text-center">
            Sunday & Monday: Hours may vary,<br></br> please call ahead of time
          </p>
        </section>

        <div>
          <p className="mt-4 mb-2 md:mt-0 text-center text-lg max-w-[400px]">
            1117 Lincoln Ave, Ste C, Calistoga CA, 94515
          </p>
          <Image
            className="mt-2"
            src={"/images/shop.webp"}
            width={360}
            height={350}
            alt=""
          ></Image>
        </div>
      </footer>
      <div className="text-center pt-12 text-white text-lg lg:flex lg:gap-12 lg:justify-center bg-gray-800">
        <p>barbershopfinelines@gmail.com</p>
        <p className="font-mono">707-737-4700</p>
      </div>

      <div className="text-center pt-4 pb-2 text-white text-sm bg-gray-800">
        Website by:{" "}
        <a
          href="https://allanmartinez.me/"
          target="_blank"
          className="hover:text-blue-500"
        >
          Allan Martinez
        </a>
      </div>
    </>
  );
};
