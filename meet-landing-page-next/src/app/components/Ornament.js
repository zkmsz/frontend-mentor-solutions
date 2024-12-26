import React from "react";

const Ornament = ({ children }) => {
  return (
    <div className="text-center">
      <div className="flex flex-1 justify-center">
        <div className="h-[80px] min-h-[1em] w-px self-stretch bg-[--slate-300] mx-4 mb-4"></div>
      </div>
      <p className="text-preset-5 text-[--slate-600] outline outline-[--slate-300] bg-white inline rounded-full px-[1.0625rem] py-4">
        {children}
      </p>
    </div>
  );
};

export default Ornament;
