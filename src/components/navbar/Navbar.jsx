"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Wrapper from "../shared/Wrapper";
import { RiArrowDropDownLine, RiFileSearchLine } from "react-icons/ri";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { CgMenuRightAlt } from "react-icons/cg";
import Logo from "/public/images/logo.png";
// import Button from "../shared/button/Button";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsArrowRight, BsFillCartCheckFill, BsDot } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import Button from "../shared/Button";
import UpperHeader from "./UpperHeader";
import { AiFillHeart } from "react-icons/ai";
import DropDown from "../DropDown/dropDown";
import MobileDropDown from "../MobileDrop/MobileDropDown";


const Navbar = () => {
  const [isNestedOpen, setIsNestedOpen] = useState(false);

  const toggleButton = () => {
    setIsNestedOpen(!isNestedOpen);
  };
  const [isNestOpen, setIsNestOpen] = useState(false);

  const toggleButton2 = () => {
    setIsNestOpen(!isNestOpen);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOp, setIsOp] = useState(false);

  const [nav, setNav] = useState(false);
  const [hoverIsOpen, hoverSetIsOpen] = useState(false);

  const handleNavbar = () => {
    setNav(!nav);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown2 = () => {
    hoverSetIsOpen(!hoverIsOpen);
  };
  const closeMenu = () => {
    setNav(false);
  };
  const itms = [
    {
      id: 2,
      title: "LCDs",
      price: "12.0",
      image: "/images/mob2.png",
      rating: "10 reviews",
      link: "/Mobile",
    },
    {
      id: 3,
      title: "Laptops",
      price: "12.0",
      image: "/images/mob3.png",
      rating: "10 reviews",
      link: "/Mobile",
    },
    {
      id: 4,
      title: "Mobiles",
      price: "12.0",
      image: "/images/mob4.png",
      rating: "10 reviews",
      link: "/Mobile",
    },
  ];

  const products = [
    {
      id: 1,
      title: "Women",
      image: "/images/women1.png",
      rating: "10 reviews",
      price: "12.0",
      link: "/Women",
    },
    {
      id: 2,
      title: "Mens",
      price: "12.0",
      image: "/images/men1.png",
      rating: "10 reviews",
      link: "/Men",
    },
  ];

  return (
    // className={nav ? "bg-white/80 w-screen h-screen  top-0 left-0 right-0 bottom-0 fixed z-[999]" : "bg-transparent"}
    <div>
      <header
        className={`h-[auto] min-h-[80px]  duration-500 top-0 ease-in items-center  md:py-0 bg-white border-b`}
      >
        <div>
          <UpperHeader />
        </div>
        <Wrapper>
          {/* parent div */}
          <div className="text-lg flex justify-between text-primary-color-text items-center ">
            {/* left section */}
            <div>
              <Link href={"/"}>
                <Image
                  src={Logo}
                  alt="eshop"
                  width={170}
                  height={170}
                  // className={`  ${nav ? "opacity-20  " : "opacity-100"
                  //   }`}
                />
              </Link>
            </div>
            {/* right section */}
            <div className="md:flex flex-col hidden">
              <ul className="flex-col text-[16px] font-medium pb-6 flex md:flex-row space-x-12 items-center mt-6">
                <Link href="/">
                  <li className="">HOME</li>
                </Link>
                {/* {} */}
                <div>
                  <Link
                    onMouseEnter={() => {
                      setIsOpen(true);
                    }}
                    onMouseLeave={() => {
                      setIsOpen(false);
                    }}
                    href=""
                    className="relative flex  duration-100 ease-in "
                  >
                    <button>CATEGORIES</button>
                    <RiArrowDropDownLine size={30} />
                  </Link>
                  {/* dropdown */}
                  {isOpen && (
                    <div
                      onMouseEnter={() => {
                        setIsOpen(true);
                      }}
                      onMouseLeave={() => {
                        setIsOpen(false);
                      }}
                      className="absolute z-10 rounded-lg shadow-lg bg-white p-6"
                    >
                      <DropDown />
                    </div>
                  )}
                </div>

                {/* portfolio  */}
                <button>
                  <Link href="/">
                    <li className=" ">NEW ARRIVAL</li>
                  </Link>
                </button>
                {/* blog  */}
                <button>
                  <Link href="/">
                    <li className=" ">SALE</li>
                  </Link>
                </button>
                <button>
                  <Link href="/">
                    <li className=" ">ABOUT US</li>
                  </Link>
                </button>
                <div className="flex text-[#777777] gap-4 cursor-pointer">
                  <FiSearch size={24} />
                  <div>
                    <Link href={"/Cart"}>
                      <AiOutlineShoppingCart
                        size={24}
                        className="text-[#D2495B]"
                      />
                      <p className="bg-[#D2495B] h-[13px] w-[13px] rounded-full flex items-center justify-center text-white text-[9px] absolute mt-[-1.8rem] ml-[1rem]">
                        3
                      </p>
                    </Link>
                  </div>
                  <div>
                    <Link href={"/Login"}>
                      <AiOutlineUser size={24} className="text-[#D2495B]" />
                    </Link>
                  </div>
                  <div>
                    <AiOutlineHeart size={24} />
                    <p className="bg-[#D2495B] h-[13px] w-[13px] rounded-full flex items-center justify-center text-white text-[9px] absolute mt-[-1.8rem] ml-[1rem]">
                      5
                    </p>
                  </div>
                </div>
                <div>
                  <Button text="CONTACT"></Button>
                </div>
              </ul>
            </div>

            {/* mobile menu  */}
            <div
              onClick={handleNavbar}
              className=" sm:block md:hidden flex items-center py-5  cursor-pointer z-50"
            >
              {nav ? (
                <RxCross1 size={35} className="text-primary-purple-text " />
              ) : (
                <CgMenuRightAlt
                  size={35}
                  className="text-primary-purple-text "
                />
              )}
            </div>
            <div
              className={
                nav
                  ? "md:hidden fixed top-0 right-0 shadow-md overflow-scroll bottom-0 flex justify-start items-start py-20 px-5 w-80 h-screen bg-white text-black text-right ease-linear duration-100 z-20 transform translate-x-0"
                  : "md:hidden fixed top-0 right-0 shadow-md overflow-scroll bottom-0 flex justify-start items-start py-20 px-5 w-80 h-screen bg-white text-black text-right ease-linear duration-100 z-20 transform translate-x-full"
              }
            >
              <div className="absolute mt-[-3.5rem]">
                <h3 className="font-black text-lg  text-primary-green-text">
                  Menu
                </h3>
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className="flex flex-col basis-[50%]">
                  <ul className="flex flex-col justify-start items-start gap-5 text-2xl font-black">
                    <Link href={"/"} onClick={closeMenu} className="">
                      HOME
                    </Link>

                    <div className="">
                      <Link
                        onClick={() => {
                          setIsOpen(!isOpen);
                        }}
                        href=""
                        className="relative flex"
                      >
                        <button>CATEGORY</button>

                        <RiArrowDropDownLine size={30} />
                      </Link>
                      {/* dropdown */}
                      {isOpen && (
                        <div>
                       < MobileDropDown/>
                        </div>
                      )}
                    </div>

                    <Link href={"/"} onClick={closeMenu} className="">
                      NEW ARRIVAL
                    </Link>
                    <Link href={"/"} onClick={closeMenu} className="">
                      SALE
                    </Link>
                    <Link href={"/"} onClick={closeMenu} className="">
                      ABOUT US
                    </Link>
                    <div className="mt-20">
                      <div className="flex text-[#777777] gap-4 cursor-pointer">
                        <FiSearch size={24} />
                        <div>
                          <Link href={"/Cart"}>
                            <AiOutlineShoppingCart
                              size={24}
                              className="text-[#D2495B]"
                            />
                            <p className="bg-[#D2495B] h-[13px] w-[13px] rounded-full flex items-center justify-center text-white text-[9px] absolute mt-[-1.8rem] ml-[1rem]">
                              3
                            </p>
                          </Link>
                        </div>
                        <div>
                          <Link href={"/Login"}>
                            <AiOutlineUser
                              size={24}
                              className="text-[#D2495B]"
                            />
                          </Link>
                        </div>
                        <div>
                          <AiOutlineHeart size={24} />
                          <p className="bg-[#D2495B] h-[13px] w-[13px] rounded-full flex items-center justify-center text-white text-[9px] absolute mt-[-1.8rem] ml-[1rem]">
                            5
                          </p>
                        </div>
                      </div>
                      <div className="mt-5">
                        <Button text="CONTACT"></Button>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </header>
    </div>
  );
};

export default Navbar;
