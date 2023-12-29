'use client'
import { useEffect, useRef } from 'react'
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { data } from './data';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import arrow from '@/assets/Slider/sliderArrow.png'
import { scrollToElement } from '@/useIt/scroll';
import { usePathname } from 'next/navigation';

const Slider = () => {
    SwiperCore.use([Autoplay, Navigation]);
    const swiperRef = useRef<any>(null);
    const pathname = usePathname()

    const slideNext = () => {
        swiperRef.current.swiper.slideNext();
    };

    const slidePrev = () => {
        swiperRef.current.swiper.slidePrev();
    };

    const swiperParams = {
        loop: true,
        autoplay: {
            delay: 3000
        },
        effect: 'fade',
        speed: 1500
    };
    useEffect(() => {
        setTimeout(() => {
            swiperRef.current &&
                swiperRef.current.swiper.slideTo(data.length)
        }, 0)
    }, [pathname])

    return (
        <div className='w-full h-max animate__animated animate__fadeInUp z-0'>
            <Swiper
                {...swiperParams}
                ref={swiperRef}
                modules={[EffectFade]}
                slideNextClass='opacity-0'
                slidePrevClass='opacity-0'
            >
                {data.map((d, index) => (
                    <SwiperSlide key={d.des} className='w-full h-max'>
                        <div className='w-[100%]' style={{ background: `linear-gradient(rgba(26, 26, 26, 0.75), rgba(26, 26, 26, 0.75)), url(https://picsum.photos/${1440 + index}) center/cover no-repeat`, aspectRatio: '72/35', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className='flex container items-center justify-between  absolute top-[38%] lg:top-[35%] md:top-[25%] sm:top-[15%]'>
                                <Image src={arrow.src} alt='img' width={65} height={65} className='cursor-pointer object-contain lg:w-[50px] md:w-[40px] sm:w-[30px]' onClick={slidePrev} />
                                <div className='flex flex-col items-center h-full gap-[30px] smd:gap-[20px]'>
                                    <h1 className='text-center font-[600] w-[80%] ml-[10%] animate__animated animate__zoomInDown animate__slow' >
                                        {d.des}
                                    </h1>
                                    <Button onClick={scrollToElement} color='primary' size='lg' className='px-[30px] py-[16px] lg:px-[20px] lg:py-[13px] text-[24px] lg:text-[20px] md:text-[18px] md:px-[8px] md:h-[40px] sm:h-[30px] bg-green rounded-[5px] animate__animated animate__zoomInUp animate__slow ml-[10%]'>
                                        Contact us
                                    </Button>
                                </div>
                                <Image src={arrow.src} alt='img' width={65} height={65} className='rotate-180 cursor-pointer object-contain lg:w-[50px] md:w-[40px] sm:w-[30px]' onClick={slideNext} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider