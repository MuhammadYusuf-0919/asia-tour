'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Slider from '@/components/Slider'
import Image from 'next/image'
import { Slide } from 'react-awesome-reveal'

const Team = () => {
    return (
        <Slide direction='up' triggerOnce>
            <div className="flex flex-col gap-[115px] lg:gap-[80px] md:gap-[60px] smd:gap-[40px]">
                <div>
                    <Header />
                    <Slider />
                </div>
                <div className='container-lg grid grid-cols-3 lg:grid-cols-2 gap-[30px] md:gap-[20px] smd:gap-[16px] smd:flex smd:flex-col'>
                    <div className='relative w-full'>
                        <Image src='https://picsum.photos/420' className='w-full aspect-[3/2] rounded-t-[10px]' alt='member_img' width={420} height={280} loading='lazy' />
                        <div className='w-full absolute bottom-0 bg-darker text-[white] p-[20px] xl:p-[15px]'>
                            <h3 className='text-[24px] xl:text-[20px] md:text-[16px]'>Ahmad Abrorov</h3>
                            <p className='text-[18px] xl:text-[16px] md:text-[14px] text-grayLighter'>Director</p>
                        </div>
                    </div>
                    <div className='relative w-full'>
                        <Image src='https://picsum.photos/420' className='w-full aspect-[3/2] rounded-t-[10px]' alt='member_img' width={420} height={280} loading='lazy' />
                        <div className='w-full absolute bottom-0 bg-darker text-[white] p-[20px] xl:p-[15px]'>
                            <h3 className='text-[24px] xl:text-[20px] md:text-[16px]'>Ahmad Abrorov</h3>
                            <p className='text-[18px] xl:text-[16px] md:text-[14px] text-grayLighter'>Director</p>
                        </div>
                    </div>
                    <div className='relative w-full'>
                        <Image src='https://picsum.photos/420' className='w-full aspect-[3/2] rounded-t-[10px]' alt='member_img' width={420} height={280} loading='lazy' />
                        <div className='w-full absolute bottom-0 bg-darker text-[white] p-[20px] xl:p-[15px]'>
                            <h3 className='text-[24px] xl:text-[20px] md:text-[16px]'>Ahmad Abrorov</h3>
                            <p className='text-[18px] xl:text-[16px] md:text-[14px] text-grayLighter'>Director</p>
                        </div>
                    </div>
                    <div className='relative w-full'>
                        <Image src='https://picsum.photos/420' className='w-full aspect-[3/2] rounded-t-[10px]' alt='member_img' width={420} height={280} loading='lazy' />
                        <div className='w-full absolute bottom-0 bg-darker text-[white] p-[20px] xl:p-[15px]'>
                            <h3 className='text-[24px] xl:text-[20px] md:text-[16px]'>Ahmad Abrorov</h3>
                            <p className='text-[18px] xl:text-[16px] md:text-[14px] text-grayLighter'>Director</p>
                        </div>
                    </div>
                    <div className='relative w-full'>
                        <Image src='https://picsum.photos/420' className='w-full aspect-[3/2] rounded-t-[10px]' alt='member_img' width={420} height={280} loading='lazy' />
                        <div className='w-full absolute bottom-0 bg-darker text-[white] p-[20px] xl:p-[15px]'>
                            <h3 className='text-[24px] xl:text-[20px] md:text-[16px]'>Ahmad Abrorov</h3>
                            <p className='text-[18px] xl:text-[16px] md:text-[14px] text-grayLighter'>Director</p>
                        </div>
                    </div>
                    <div className='relative w-full'>
                        <Image src='https://picsum.photos/420' className='w-full aspect-[3/2] rounded-t-[10px]' alt='member_img' width={420} height={280} loading='lazy' />
                        <div className='w-full absolute bottom-0 bg-darker text-[white] p-[20px] xl:p-[15px]'>
                            <h3 className='text-[24px] xl:text-[20px] md:text-[16px]'>Ahmad Abrorov</h3>
                            <p className='text-[18px] xl:text-[16px] md:text-[14px] text-grayLighter'>Director</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </Slide>
    )
}

export default Team