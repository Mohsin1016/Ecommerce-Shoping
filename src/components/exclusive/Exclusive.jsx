import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Exclusive = () => {
    return (
        <section className='max-h-[421px] md:mt-0 mt-[100rem]'>
            <div className='grid md:grid-cols-3 grid-cols-1 justify-center items-center'>
                <div>

                    <Image src={'/images/exc1.png'} alt='' width={1080} height={1080} className=''/>
                </div>
                <div className='bg-[#00798C] h-full min-h-[400px] text-white text-center flex flex-col justify-center items-center'>
                    <p className='font-[400] text-[18px]'>EXCLUSIVE</p>
                    <p className=' text-[36px] font-[700] '>COSMETICS</p>
                    <p className='border-b px-20 mb-2'></p>
                    <p className='text-[18px] font-[400]'>KEEP YOURSELF BEAUTIFULL</p>
                    <p className='text-[18px] font-[400] text-[#F3A40F]'>Upto 50% Off</p>
                    <div className='flex items-center justify-center gap-2 mt-5'>
                        <button className='flex items-center justify-center gap-2 border border-white text-white mt-2 px-4 py-2 rounded-md font-[300]'>SHOP NOW
                        <BsArrowRight size={20} className="text-white ml-3" />
                        </button>
                    </div>



                </div>
                <div>

                    <Image src={'/images/exc1.png'} alt='' width={1080} height={1080} />
                </div>

            </div>
        </section>
    )
}

export default Exclusive