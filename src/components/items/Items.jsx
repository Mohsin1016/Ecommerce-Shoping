import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'

const Items = () => {
    const items = [
        {
            heading:'Mens',
            text: ' Fashion',
            img: '/images/item1.png'
        },
        {
            heading:'Womens',
            text: ' Fashion',
            img: '/images/item2.png'
        },
        {
            heading:'Health ',
            text: 'Beauty',
            img: '/images/item3.png'
        },
        {
            heading:'Baby ',
            text: 'Toys',
            img: '/images/item4.png'
        },
        {
            heading:'Household',
            text: ' ITEMS',
            img: '/images/item5.png'
        },
    ]
    return (
        <div className='flex justify-center items-center mx-auto mt-10 md:mt-0'>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10'>
    {items.map((item, index) => (
      <div key={index} className='relative'>
        {/* Image */}
        <div className='bg-[#37629d6d]'>
          <Image src={item.img} alt='' width={273} height={222} />
        </div>
        
        {/* Layer */}
        <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white bg-[#37619D54]  transition-opacity'>
            <p className='font-[500] text-[20px] text-[#F3A40F] uppercase'>{item.heading}</p>
          <p className='text-[24px] font-[600] uppercase '>{item.text}</p>
          <button className='border border-white text-white mt-2 px-4 py-2 rounded-md font-[300]'>SHOP NOW</button>
        </div>
      </div>
    ))}
  </div>
</div>

    )
}

export default Items