import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
import { BsArrowRight, BsFillCartCheckFill, BsStarFill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'

const WomensCollection = () => {
    const products = [
        {
            id: 1,
            title: 'Ray Naylon BagPack',
            image: '/images/women1.png',
            rating: '10 reviews',
            price: '12.0',
        },
        {
            id: 2,
            title: 'Ladies Branded Bag ',

            price: '12.0',
            image: '/images/women2.png',
            rating: '10 reviews',
        },
        {
            id: 3,
            title: 'Ray Naylon BagPack',

            price: '12.0',
            image: '/images/women3.png',
            rating: '10 reviews',
        }, {
            id: 4,
            title: 'Ray Naylon BagPack',

            price: '12.0',
            image: '/images/women4.png',
            rating: '10 reviews',
        },]
    return (
        <section className='overflow-hidden'>
            <svg className='float-right ' width="366" height="760" viewBox="0 0 366 760" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M159.75 169.332C196.31 59.7641 315.817 10.7907 371 0V760H12.3874C-7.82053 727.794 -18.0178 636.388 102.857 528.414C253.95 393.447 114.049 306.291 159.75 169.332Z" fill="#00798C" fillOpacity="0.25" />
            </svg>
            <div className=''>
                <Wrapper>
                    <div className='absolute mt-16'>
                        <div className='flex items-center justify-between mr-4 '>
                            <h1 className='text-[30px] md:text-[36px] pb-4 font-semibold text-[#37619D]'>
                                Womens Collection
                            </h1>
                            <div className='flex gap-1'>
                                <button className=" flex items-center bg-[#00798C] px-4 py-2 rounded-lg md:cursor-pointer w-32 h-12 flex-shrink-0 text-white hover:scale-105 text-[16px] ease-in duration-300 transition-all">
                                    View All
                                    <BsArrowRight size={20} className="text-white ml-2" />
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center md:flex-row gap-6 mt-5'>
                            {products.map((product) => (

                                <div key={product.id} className="product-card flex flex-col justify-center items-center">
                                    <div className='w-[290px]  h-[300px] shadow bg-white rounded-lg flex overflow-hidden items-center justify-center'>
                                        <img src={product.image} alt={product.title} className=' mt-12 ' />
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
                                        <button className='flex justify-center items-center  px-1 w-16 py-1 hover:bg-[#00798C] bg-[#707378] rounded-md md:cursor-pointer h-12 flex-shrink-0 text-white text-[16px] ease-in duration-300 transition-all'>
                                            <AiFillHeart size={25} className='text-white' />
                                        </button>
                                    </div>
                                    {/* Add other product information here (add to cart, like button, etc.) */}
                                </div>

                            ))}

                        </div>
                    </div>

                </Wrapper>


            </div>
        </section>
    )
}

export default WomensCollection