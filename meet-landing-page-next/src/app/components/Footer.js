import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <div>
      <footer className="relative bg-[url('/mobile/image-footer.jpg')] md:bg-[url('/tablet/image-footer.jpg')] lg:bg-[url('/desktop/image-footer.jpg')] bg-cover bg-top">
        <div className="absolute inset-0 bg-[--cyan-600] opacity-90"></div>
        <div className="relative flex flex-col items-center justify-center gap-4 lg:flex-row mx-8">
          <p className="text-center text-[--white] text-[2rem] font-black leading-[110%] mt-[4rem] mb-6">
            Experience more together
          </p>
          <p className="font-medium leading-[150%] text-[--white] text-center mb-6">
            Stay connected with reliable HD meetings and unlimited one-on-one and group video
            sessions.
          </p>
          <div className="mb-[4rem]">
            <Button secondary large>
              Download <span className="text-[--purple-300]">v1.3</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
