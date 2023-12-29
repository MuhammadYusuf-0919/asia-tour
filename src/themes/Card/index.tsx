import { Divider } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'


const Card = ({ d }: any) => {

    return (
        <div className='w-full relative group cursor-pointer'>
            <Image src={d.img} alt='tour img' width={550} height={371} className='w-full max-w-full' />
            <div className='flex items-start w-full justify-between px-[12px] md:px-[5px] smd:px-[10px] sm:px-[5px] py-[9px] bg-darker absolute bottom-0 group-hover:bg-greener duration-300'>
                <h4 className='text-[white]'>{d.title}</h4>
                <Divider orientation='vertical' className='bg-gray group-hover:bg-[white] h-[80px] md:h-[70px] sm:h-[60px]' />
                <div className='flex flex-col items-end text-[white] gap-[13px] md:gap-[5px] py-[9px]'>
                    <p className='text-[17px] md:text-[15px] sm:text-[14px]'>{d.money}$/from per person</p>
                    <p className='text-[17px] md:text-[15px] sm:text-[14px]'>{d.day} day {+d.day + 1} night</p>
                </div>
            </div>
        </div>
    )
}

export default Card