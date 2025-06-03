"use client";

import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const Hero = () => {
  return (
    <section
    id="home"
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/joki.png')",
      }}
    >
      {/* Overlay (optional for readability) */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 z-10">
        {/* Left side: Text & Buttons */}
        <div className="text-center lg:text-start space-y-6">
          <main className="text-5xl md:text-6xl font-bold text-white">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
                Joki Termurah
              </span>{" "}
              Se Indonesia
            </h1>{" "}
            Hanya{" "}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                Di
              </span>{" "}
              Jendral Store
            </h2>
          </main>

          <p className="text-xl text-white/80 md:w-10/12 mx-auto lg:mx-0">
            Joki Murah Kualitas Tidak Murahan! Buktikan Sendiri.
          </p>

          {/* Buttons: WhatsApp and TikTok */}
          <div className="flex flex-col md:flex-row gap-4">
            <a
              rel="noreferrer noopener"
              href="https://wa.me/6287711966723?text=Halo,%20saya%20ingin%20bertanya%20tentang%20joki"
              target="_blank"
              className="w-full md:w-1/3"
            >
              <Button className="w-full">
                Contact Kami
                <FontAwesomeIcon icon={faWhatsapp} className="ml-2" />
              </Button>
            </a>

            <a
              rel="noreferrer noopener"
              href="https://www.tiktok.com/@indjendral"
              target="_blank"
              className="w-full md:w-1/3"
            >
              <Button variant="outline" className="w-full">
                Tiktok Kami
                <FontAwesomeIcon icon={faTiktok} className="ml-2" />
              </Button>
            </a>
          </div>
        </div>

        {/* Right side: Hero Cards */}
        <div className="z-10">
          <HeroCards />
        </div>
      </div>
    </section>
  );
};
