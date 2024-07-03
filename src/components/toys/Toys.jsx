"use client"
import React, { useState } from 'react'
import Wrapper from '../shared/Wrapper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsFillCartCheckFill, BsStarFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';


const Toys = () => {
    const products = [
        {
            id: 1,
            title: 'Ray Naylon BagPack',
            image: '/images/toy1.png',
            rating: '10 reviews',
            price: '12.0',
        },
        {
            id: 2,
            title: 'Ladies Branded Bag ',

            price: '12.0',
            image: '/images/toy2.png',
            rating: '10 reviews',
        },
        {
            id: 3,
            title: 'Ray Naylon BagPack',

            price: '12.0',
            image: '/images/toy3.png',
            rating: '10 reviews',
        }, {
            id: 4,
            title: 'Ray Naylon BagPack',

            price: '12.0',
            image: '/images/toy4.png',
            rating: '10 reviews',
        }, {
            id: 5,
            title: 'Ray Naylon BagPack',

            price: '12.0',
            image: '/images/toy3.png',
            rating: '10 reviews',
        },
        {
            id: 6,
            title: 'Ray Naylon BagPack',
            image: '/images/toy2.png',

            price: '12.0',

            rating: '10 reviews',
        },
    ];
    const swiperBreakpoints = {
        // When window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // When window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // When window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // When window width is >= 1280px
        1280: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      };
    return (
        <section className='overflow-hidden mt-[50rem] md:my-20'>
            <Wrapper>
                <div>
                    <div className='border-b items-center flex justify-between'>
                        <h1 className='text-[36px] pb-4 font-semibold text-[#37619D]'>
                            Baby Toys
                        </h1>
                        <div className='flex gap-3'>
                            <div className="swiper-button-next" >
                                <span>&#8592;</span> {/* Left arrow icon */}
                            </div>
                            <div className="swiper-button-prev" >
                                <span>&#8594;</span> {/* Right arrow icon */}
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <Swiper
                            
                            spaceBetween={30}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            breakpoints={{
                                640: {
                                  slidesPerView: 2,
                                  spaceBetween: 20,
                                },
                                768: {
                                  slidesPerView: 4,
                                  spaceBetween: 40,
                                },
                                1024: {
                                  slidesPerView: 4,
                                  spaceBetween: 50,
                                },
                              }}
                            //   modules={[navigation]}
                            className="mySwiper"
                        >
                            {products.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <div className="product-card flex flex-col justify-center items-center">
                                        <div className='w-[290px] pb-3 h-[287px] bg-white rounded-lg flex items-center justify-center'>
                                            <img src={product.image} alt={product.title} className=' ' />
                                        </div>
                                        <h3 className='text-[22px] font-medium py-2'>{product.title}</h3>
                                        <div className='text-sm text-gray-950 flex items-center justify-center gap-3 pb-3'>
                                            <div className='flex gap-1'>
                                                <BsStarFill size={13} className='text-[#E97000]' />
                                                <BsStarFill size={13} className='text-[#E97000]' />
                                                <BsStarFill size={13} className='text-[#E97000]' />
                                                <BsStarFill size={13} className='text-[#E97000]' />
                                                <BsStarFill size={13} className='text-[#E97000]' />
                                            </div>

                                            ({product.rating})</div>
                                        <p className='text-[22px] font-medium'>${product.price}</p>
                                        <div className='flex justify-center items-center gap-2 w-full mt-3'>

                                            <button className='flex items-center justify-center  gap-3 hover:bg-[#00798C] bg-[#707378] px-5 py-2 rounded-md md:cursor-pointer w-52 h-12 flex-shrink-0 text-white text-[16px] ease-in duration-300 transition-all'>
                                                <BsFillCartCheckFill size={15} className='text-white' />
                                                Add to cart
                                            </button>
                                            <button className='flex justify-center items-center hover:bg-[#00798C] bg-[#707378] px-1 w-16 py-1 rounded-md md:cursor-pointer h-12 flex-shrink-0 text-white text-[16px] ease-in duration-300 transition-all'>
                                                <AiFillHeart size={25} className='text-white' />
                                            </button>
                                        </div>
                                        {/* Add other product information here (add to cart, like button, etc.) */}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </div>

            </Wrapper>
        </section>
    )
}

export default Toys