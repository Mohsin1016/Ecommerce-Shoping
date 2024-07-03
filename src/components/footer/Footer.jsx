import React from "react";
import Wrapper from "../shared/Wrapper";
import Link from "next/link";
import { BiLogoFacebook , BiLogoInstagramAlt,BiLogoTwitter } from "react-icons/bi"
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline, IoLocation } from "react-icons/io5"

const Footer = () => {
  return (
    <footer className="md:py-10 py-5 md:flex sm:flex bg-[#00798C] text-white">
      <Wrapper>
        <div className="pb-4">
          {/* parent div  */}
          <div className="grid md:grid-cols-5 grid-cols-1 gap-10 md:gap-5">
            <div >
              <h1 className="font-bold text-[18px] pb-5">
                About Our Store
              </h1>
              <p className="text-[16px] font-[400]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex gap-4 mt-5">
                <BiLogoFacebook size={30} className="text-[#FFFFFF] bg-[#526679] h-7 w-7 p-1 rounded-full"/>
                <BiLogoInstagramAlt size={30} className="text-[#FFFFFF] bg-[#526679] h-7 w-7 p-1 rounded-full"/>
                <BiLogoTwitter size={30} className="text-[#FFFFFF] bg-[#526679] h-7 w-7 p-1 rounded-full"/>
              </div>
            </div>


            <ul className="text-base flex flex-col gap-2  text-white ">
              <h2 className="pb-2 text-xl font-bold text-primary-color-text">
                Useful Info
              </h2>
              <Link href={"/"}>
                {" "}
                <li className=" duration-300 ease-in">
                  Search
                </li>{" "}
              </Link>
              <Link href={"/"}>
                {" "}
                <li className=" duration-300 ease-in">
                  FAQ
                </li>{" "}
              </Link>
              <Link href={"/"}>
                {" "}
                <li className=" duration-300 ease-in">
                  Terms of Services
                </li>{" "}
              </Link>
              <Link href={"/"}>
                {" "}
                <li className=" duration-300 ease-in">
                  Refund Policy
                </li>{" "}
              </Link>

            </ul>
            <ul className="text-base flex flex-col gap-2  text-white ">
              <h2 className="pb-2 text-xl font-bold text-primary-color-text">
                Quick Links
              </h2>
              <Link href={"/"}>
                {" "}
                <li className=" duration-300 ease-in">
                  Men Fashion
                </li>{" "}
              </Link>
              <Link href={"/"}>
                {" "}
                <li className=" duration-300 ease-in">
                  Women Fashion
                </li>{" "}
              </Link>
              <Link href={"/"}>
                {" "}
                <li className=" duration-300 ease-in">
                  Mobile & Laptop
                </li>{" "}
              </Link>
              <Link href={"/"}>
                {" "}
                <li className=" duration-300 ease-in">
                  Watches
                </li>{" "}
              </Link>
              <Link href={"/"}>
                {" "}
                <li className=" duration-300 ease-in">
                  Watches
                </li>{" "}
              </Link>
              <Link href={"/"}>
                {" "}
                <li className=" duration-300 ease-in">
                  Jwellery
                </li>{" "}
              </Link>
              <Link href={"/"}>
                {" "}
                <li className=" duration-300 ease-in">
                  Computer
                </li>{" "}
              </Link>

            </ul>
            <div className="flex-1 flex-col ">
              <h2 className="mb-3 text-xl font-bold text-primary-color-text">
                Contact Us
              </h2>
              <div className="mb-6 text-base items-center  text-white flex-col   ">
                <Link href={""} className="flex mb-3">
                  <AiOutlineMail
                    size={20}
                    className="text-[#D2495B] duration-300 ease-in mr-3"
                  />
                  Email@gmail.com
                </Link>
                <Link href={""} className="flex text-base text-white ">

                  <IoLocation
                    size={24}
                    className=" duration-300 ease-in mr-3 text-[#D2495B]"
                  />
                  Street 23 , Shop
                  56 Mumbai
                  India
                </Link>
                <Link href={""} className="flex text-base mt-2 text-white ">

                  <IoCallOutline
                    size={24}
                    className=" duration-300 ease-in mr-3 text-[#D2495B]"
                  />
                  +9234 55666666
                </Link>
              </div>
            </div>
            <div className="flex-1 flex-col ">
              <h2 className="mb-3 text-xl font-bold text-primary-color-text">
                Sign up to newsletter
              </h2>
              <div className="mb-6 text-base items-center  text-white flex-col   ">
                <p>
                  On the other hand, we denounce
                  with righteous
                </p>
                <div className="">
                <input type="email"
                  className="py-4 pl-2 w-[72%] md:w-full text-[12px] mt-4"
                  placeholder="Enter email address"
                />
                <div className="absolute mt-[-3rem] ml-[9.7rem] md:ml-[8.3rem] md:mt-[-3.2rem]">
                  <button className="py-3 text-xs md:text-base px-2 bg-[#D2495B] text-white">
                    Subscribe
                  </button>
                </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
