import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <div>
      <footer
        className="relative bg-[url('/mobile/image-footer.jpg')] md:bg-[url('/tablet/image-footer.jpg')] lg:bg-[url('/desktop/image-footer.jpg')] bg-cover bg-top lg:h-[19.5rem]"
        role="contentinfo"
        aria-label="Site Footer"
      >
        <div className="absolute inset-0 bg-[--cyan-600] opacity-90"></div>
        <div className="relative flex flex-col items-center justify-center gap-4 lg:flex-row mx-8 md:mx-[8.25rem] lg:mx-[10rem] lg:pt-[7rem] lg:justify-between">
          <p className="text-center text-[--white] text-[2rem] font-black leading-[110%] mt-[4rem] mb-6 lg:mt-0 lg:text-[2.5rem] lg:text-left lg:max-w-[27.8125rem]">
            Experience more together
          </p>
          <p className="font-medium leading-[150%] text-[--white] text-center mb-6 lg:max-w-[22.1875rem] lg:ml-0 lg:mr-8 lg:text-[1.125rem] lg:text-left">
            Stay connected with reliable HD meetings and unlimited one-on-one and group video
            sessions.
          </p>
          <div className="mb-[4rem] lg:mb-0">
            <Button secondary large aria-label="Download version 1.3">
              Download <span className="text-[--purple-300]">v1.3</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
