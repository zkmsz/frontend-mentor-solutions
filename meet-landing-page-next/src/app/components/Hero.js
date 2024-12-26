import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div id="hero" className="flex flex-col justify-center items-center text-center lg:flex-row">
      <img src="tablet/image-hero.png" alt="" className="min-w-[27.0625rem] mb-12 lg:hidden" />
      <img src="desktop/image-hero-left.png" alt="" className="hidden lg:block lg:mb-[3.5625rem]" />

      <div className="lg:flex lg:flex-col lg:items-center lg:justify-center">
        <div
          id="hero-content"
          className="md:mx-[10rem] lg:max-w-[28rem] lg:mx-[8rem] lg:flex lg:flex-col"
        >
          <h1
            id="hero-title"
            className="text-[2.5rem] font-black leading-[110%] text-[--slate-900] md:text-[3rem]"
          >
            Group Chat for Everyone
          </h1>
          <p className="font-medium leading-[150%] text-[--slate-600] my-6 lg:my-8">
            Meet makes it easy to connect with others face-to-face virtually and collaborate across
            any device.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
          <Button primary large aria-label="Download version 1.3">
            Download <span className="text-[--cyan-300]">v1.3</span>
          </Button>
          <Button secondary small aria-label="Learn more about Meet">
            What is it?
          </Button>
        </div>
      </div>

      <img
        src="desktop/image-hero-right.png"
        alt=""
        className="hidden lg:block lg:mt-[3.5625rem]"
      />
    </div>
  );
};

export default Hero;
