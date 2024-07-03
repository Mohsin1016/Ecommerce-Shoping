import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
import { BsArrowRight, BsFillCartCheckFill, BsStarFill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'

const MensCollection = () => {
  const products = [
    {
      id: 1,
      title: 'Ray Naylon BagPack',
      image: '/images/men1.png',
      rating: '10 reviews',
      price: '12.0',
    },
    {
      id: 2,
      title: 'Ladies Branded Bag ',

      price: '12.0',
      image: '/images/men2.png',
      rating: '10 reviews',
    },
    {
      id: 3,
      title: 'Ray Naylon BagPack',

      price: '12.0',
      image: '/images/men3.png',
      rating: '10 reviews',
    }, {
      id: 4,
      title: 'Ray Naylon BagPack',

      price: '12.0',
      image: '/images/men4.png',
      rating: '10 reviews',
    },]
  return (
    <section className='overflow-hidden'>
      <div className=''>
        {/* <Image src={'/images/Vector.png'} alt='' width={200} height={200} className='relative' /> */}
        <svg className='' width="371" height="763" viewBox="0 0 371 763" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M211.25 170C174.69 60 55.1831 10.8333 0 0V763H358.613C378.821 730.667 389.018 638.9 268.143 530.5C117.05 395 256.951 307.5 211.25 170Z" fill="#37619D" fillOpacity="0.18" />
        </svg>

        <Wrapper>
          <div className='pb-[75px]'>
            <div className='flex items-center justify-between mt-[-40rem]'>
              <h1 className='text-[30px] md:text-[36px] pb-4 font-semibold text-[#37619D]'>
                Men's Collection
              </h1>
              <div className='flex gap-3'>
                <button className=" flex items-center bg-[#00798C] px-4 py-2 rounded-lg md:cursor-pointer w-32 h-12 flex-shrink-0 text-white hover:scale-105 text-[16px] ease-in duration-300 transition-all">
                  View All
                  <BsArrowRight size={20} className="text-white ml-3" />
                </button>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center md:flex-row gap-6 mt-5'>
              {products.map((product) => (

                <div key={product.id} className="product-card flex flex-col justify-center items-center">
                  <div className='w-[290px]  h-[300px] bg-white rounded-lg flex overflow-hidden items-center justify-center'>
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

export default MensCollection 