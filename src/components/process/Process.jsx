import React from 'react'
import Wrapper from '../shared/Wrapper'
import { LiaShippingFastSolid } from 'react-icons/lia'
const Process = () => {
    const process = [
        {
            id: 1,
            title: 'Free Shipping',
            text: 'Free Shipping On Oder Over $100',
        },
        {
            id: 2,
            title: 'Secret payment',
            text: 'Free Shipping On Oder Over $100',
        },
        {
            id: 3,
            title: 'Online support',
            text: 'Free Shipping On Oder Over $100',
        },
        {
            id: 4,
            title: 'Payment on delivery',
            text: 'Free Shipping On Oder Over $100',
        },
    ]
    return (
        <section className='bg-[#F8F4F9] py-10 w-full'>
            <Wrapper>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-4 '>
                        {process.map((item) => (
                            <div key={item.id} className='flex justify-center gap-3'>
                                <LiaShippingFastSolid size={42} />
                                <div className='flex gap-3 flex-col items-start justify-start'>
                                    <h1 className='text-[24px] font-[700] '>
                                        {item.title}

                                    </h1>
                                    <p className='text-[#777777] text-[14px] font-[400] mt-[-0.5rem]'>
                                        {item.text}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>
                </div>

            </Wrapper>
        </section>
    )
}

export default Process