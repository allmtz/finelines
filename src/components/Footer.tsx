import Image from "next/image";

import { FiExternalLink } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="flex items-center flex-col p-2 gap-4">
      <div className="flex items-center gap-2 text-lg">
        <a
          href="https://maps.google.com/?q=1117+Lincoln+Ave,+Calistoga,+CA+94515"
          target="_blank"
          className="flex items-center gap-1"
        >
          Google Maps
          <FiExternalLink size={25}></FiExternalLink>
        </a>
        <a
          href="https://maps.apple.com/maps?q=1117+Lincoln+Ave,+Calistoga,+CA+94515"
          className="flex items-center gap-1"
          target="_blank"
        >
          Apple Maps
          <FiExternalLink size={25}></FiExternalLink>
        </a>
      </div>
      <iframe
        width="full"
        height="full"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDPjBaGut2XWcj7qmpsJM0QzTU6QxvBDYQ
            &q=place_id:EjAxMTE3IExpbmNvbG4gQXZlIHN0ZSBjLCBDYWxpc3RvZ2EsIENBIDk0NTE1LCBVU0EiIRofChYKFAoSCUFXWcIKQ4SAESzPgC760DwuEgVzdGUgYw"
      ></iframe>
      <div className="text-lg text-center font-mono">
        <p>1117 Lincoln Ave Ste C Calistoga CA 94515</p>
      </div>
      <Image src={"/images/shop.jpg"} width={300} height={300} alt=""></Image>
      <div className="text-center text-lg">
        <p>daniel@flbarber.com</p>
        <p className="font-mono">707-303-111</p>
      </div>
    </footer>
  );
};
