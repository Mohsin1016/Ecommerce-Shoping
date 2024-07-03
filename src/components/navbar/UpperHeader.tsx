"use client";
import React, { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const UpperHeader = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen && (
        <div className="w-full h-[50px] bg-[#37619D] flex px-3 md:px-0 justify-between items-center">
          <div className="flex justify-center items-center md:ml-[37rem]">
            <div className="text-white text-[10px] md:text-xs font-normal flex text-center gap-6">
              <p>HELLO EVERYONE! 25% Off All Products</p>
              <div className="flex gap-2">
                <BsTelephoneFill size={13} />
                <p>+92 6866777 6</p>
              </div>
            </div>
          </div>
            <div>
              <button onClick={() => handleClick()}>
                <RxCross1 size={13} className="text-white md:w-4 md:h-4 md:mr-[2rem]" />
              </button>
            </div>
        </div>
      )}
    </>
  );
};

export default UpperHeader;
