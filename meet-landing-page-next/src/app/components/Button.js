import React from "react";
import className from "classnames";

const Button = ({ children, primary, secondary, large, small }) => {
  const classes = className("py-4 px-10 rounded-[1.8125rem] font-black leading-[150%]", {
    "h-[3.5rem] bg-[--cyan-600] text-[--white] hover:bg-[#71C0D4]": primary,
    "h-[3.5rem] bg-[--purple-600] text-[--white] hover:bg-[#B18BDD]": secondary,
    "w-[12.0625rem]": large,
    "w-[10.0625rem]": small,
  });

  return <button className={classes}>{children}</button>;
};

export default Button;
