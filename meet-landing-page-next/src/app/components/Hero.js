import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div id="hero" className="flex flex-col justify-center items-center text-center">
      <img src="tablet/image-hero.png" alt="" className="min-w-[27.0625rem] mb-12" />
      <div id="hero-content">
        <h1 className="text-[2.5rem] font-black leading-[110%] text-[--slate-900]">
          Group Chat for Everyone
        </h1>
        <p className="font-medium leading-[150%] text-[--slate-600] my-6">
          Meet makes it easy to connect with others face-to-face virtually and collaborate across
          any device.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
        <Button primary large>
          Download <span className="text-[--cyan-300]">v1.3</span>
        </Button>
        <Button secondary small>
          What is it?
        </Button>
      </div>
    </div>
  );
};

export default Hero;
