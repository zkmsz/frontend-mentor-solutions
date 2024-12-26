import React from "react";

const Features = () => {
  return (
    <div>
      <div
        id="image-container"
        className="flex flex-row flex-wrap justify-center items-center gap-4 lg:gap-8"
      >
        <img
          src="desktop/image-woman-in-videocall.jpg"
          alt=""
          className="inline w-[9.21875rem] rounded-lg lg:w-[16rem]"
        />
        <img
          src="desktop/image-women-videochatting.jpg"
          alt=""
          className="inline w-[9.21875rem] rounded-lg lg:w-[16rem]"
        />
        <img
          src="desktop/image-men-in-meeting.jpg"
          alt=""
          className="inline w-[9.21875rem] rounded-lg lg:w-[16rem]"
        />
        <img
          src="desktop/image-man-texting.jpg"
          alt=""
          className="inline w-[9.21875rem] rounded-lg lg:w-[16rem]"
        />
      </div>
      <div
        id="features-content"
        className="text-center my-16 md:mx-[8.25rem] lg:w-[34.625rem] lg:mx-auto"
      >
        <p className="font-black text-[0.75rem] uppercase tracking-[0.25rem] text-[--cyan-600] mb-4 md:text-[0.875rem] lg:text-[1rem]">
          Built for modern use
        </p>
        <h2 className="text-[2rem] text-[--slate-900] font-black leading-[110%] mb-8 md:text-[2.25rem] lg:text-[2.5rem]">
          Smarter meetings, all in one place
        </h2>
        <p className="font-medium leading-[150%] text-[--slate-600] lg:text-[1.125rem]">
          Send messages, share files, show your screen, and record your meetings — all in one
          workspace. Control who can join with invite-only team access, data encryption, and data
          export.
        </p>
      </div>
    </div>
  );
};

export default Features;
