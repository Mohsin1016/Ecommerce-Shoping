import React from 'react'
import Wrapper from '../shared/Wrapper'
import Button from '../shared/Button'

const Banner = () => {
  return (
    <div className="bg-image overflow-hidden">
        <Wrapper>
        <div className='py-40 text-center md:text-left'>
        <p className='font-[400] text-[48px] text-[#FFFFFF] pt-2'>BEST SELLING</p>
        <p className='font-[700] text-[48px] text-[#33BBC0] md:mt-[-1rem]'>WATCH BRANDS</p>
        <p className='font-[500] text-[18px] text-white mb-5'>JUST IN TIME FOR THE BEST SALE THIS SUMMER!</p>
        <Button text='Shop Now'></Button>
        </div>
        </Wrapper>

    </div>
  )
}

export default Banner