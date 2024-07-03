import React from "react";
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const Hero = ({ title, heading, para }) => {
  return (
    <section className="pt-10 md:pt-20">
      <Wrapper>
            <Image src={'/images/Polygon1.png'} alt="" width={10} height={10} />
        <div className="flex md:flex-row flex-col justify-center items-center">
          {/* left */}
          <div className="flex flex-col justify-start items-start  md:basis-[50%]">
            <p className="text-[24px] text-[#00798C] font-[600]">{title}</p>
            <h1 className="text-[48px] text-[#37619D] font-[700] leading-[60.72px] md:pr-16 py-4">{heading}</h1>
            <p className="text-[14px] font-[400] text-[#777777] pr-5 md:pr-48 mb-8">{para}</p>
            <button className=" flex items-center bg-[#00798C] px-4 py-2 rounded-lg md:cursor-pointer w-40 h-12 flex-shrink-0 text-white hover:scale-105 text-[16px] ease-in duration-300 transition-all">
             Explore Now
            <BsArrowRight size={20} className="text-white ml-3" />
            </button>
          <Image src={'/images/Ellipse1.png'} alt="" width={30} height={30} className="ml-[250px] absolute mt-[22rem] md:ml-[500px]" />

            <div className="mb-10"></div>
          <Image src={'/images/Polygon2.png'} alt="" width={10} height={10} className="hidden md:block" />
          </div>
          {/* right  */}
          <div className=" md:basis-[50%]">
          <Image src={'/images/Ellipse2.png'} alt="" width={30} height={30} className="float-right" />

          <Image src={'/images/Polygon3.png'} alt="" width={30} height={30} className="" />

          <Image src={'/images/herobanner.png'} alt="" width={1080} height={1080} className="float-right" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
