import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import landingImage from "/public/images/landing-page-image.png";

export default function Landing() {
  return (
    <main
      id="landing"
      className="just flex flex-col items-center bg-custom-1 pt-4 text-white md:h-screen"
    >
      <div className="flex h-full flex-col items-center justify-center space-y-6 px-12">
        <h1 className="text-2xl font-semibold">
          Commence a journey of explorations with
          <br />
          <span className="text-custom-2">OLAS</span>, where learning knows no
          bounds!
        </h1>
        <div className="flex flex-col justify-center gap-4 md:flex-row md:gap-12">
          <button className="button-secondary rounded-full bg-custom-3">
            Get Started <FaArrowRightLong className="icon" />
          </button>
          <button className="button-secondary-outlined rounded-full border-custom-3 text-custom-3">
            <FaPlay className="icon" />
            Watch Video
          </button>
        </div>
      </div>
      <Image className="mt-auto px-4" src={landingImage} alt="landing-image" />
    </main>
  );
}
