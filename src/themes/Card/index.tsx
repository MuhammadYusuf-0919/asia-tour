import { Button, Divider } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'


const Card = ({ d }: any) => {

    return (
        <div className='w-full group shadow-card overflow-hidden rounded-t-[5px]'>
            <Image src={d.img} alt='tour img' width={550} height={260} className='group-hover:scale-110
             duration-400 w-full aspect-[55/26] max-w-full object-cover' />
            <div className='flex items-center w-full justify-between px-[12px] py-[9px] bg-[white] relative overflow-hidden '>
                <div className='absolute bottom-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] rounded-full w-0 aspect-square bg-greener duration-400 z-0 group-hover:w-[105%]' />
                <div className='flex flex-col items-start gap-[20px] lg:gap-[10px] sm:gap-[6px]'>
                    <h4 className='text-[24px] lg:text-[20px] smd:text-[18px]'>{d.title}</h4>
                    <Button color='primary' size='lg' className='relative w-[140px] h-[45px] lg:w-[120px]
                    lg:h-[40px] md:w-[100px] md:h-[30px] lg:text-[18px] md:text-[16px] sm:text-[14px]  bg-green rounded-[5px] text-[20px]'>
                        Book Now
                    </Button>
                </div>
                <Divider orientation='vertical' className='bg-grayLighter h-[80px] md:h-[70px] sm:h-[60px]' />
                <div className='flex flex-col items-end gap-[13px] md:gap-[5px] py-[9px]'>
                    <p className='text-[17px] md:text-[15px] sm:text-[14px]'>{d.money}$/from per person</p>
                    <p className='text-[17px] md:text-[15px] sm:text-[14px]'>{d.day} day {+d.day + 1} night</p>
                </div>
            </div>
        </div>
    )
}

export default Card