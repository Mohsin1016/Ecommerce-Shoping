import React, { FC } from "react";

const Button= ({ text }) => {
  return (
    <div>
      <button type="button" className="bg-[#00798C] px-3 py-2 rounded-lg md:cursor-pointer w-40 h-12 flex-shrink-0 text-white hover:scale-105 text-[16px] ease-in duration-300 transition-all">{text}</button>
    </div>
  );
};

export default Button;
