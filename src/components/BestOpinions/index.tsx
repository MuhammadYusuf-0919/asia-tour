'use client'
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper';
import { Slide } from "react-awesome-reveal";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { data } from "./data";
import quote from '@/assets/quote.png'
import star from '@/assets/star.png'
import arrow from '@/assets/arrow.png'

const BestOpinions = ({ title, span }: { title: string, span: string }) => {
    SwiperCore.use([Autoplay, Navigation])
    const swiperRef = useRef<any>(null);

    const slideNext = () => {
        swiperRef.current.swiper.slideNext();
    };

    const slidePrev = () => {
        swiperRef.current.swiper.slidePrev();
    };

    const swiperParams = {
        loop: true,
        autoplay: {
            delay: 1000
        },
        speed: 3000
    };
    return (
        <div className="w-full">
            <Slide direction="up" triggerOnce className="container">
                <div className='container flex flex-col items-start gap-0'>
                    <span>{span}</span>
                    <h2>{title}</h2>
                </div>
            </Slide>
            <Slide direction="up" triggerOnce>
                <div className='w-full h-max'>
                    <Swiper
                        {...swiperParams}
                        ref={swiperRef}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        className="w-full"
                    >
                        {data.map((d, index) => (
                            <SwiperSlide key={index} className="w-[30%] 2xl:w-[30%] lg:w-[40%] md:w-[50%] smd:w-[95%] sm:w-[100%] smd:pl-[7.5%] " >
                                <div className="py-[50px] w-[80%] sm:w-[90%]">
                                    <div className="relative overflow-visible bg-[white] shadow-card rounded-[5px] p-[18px] pt-0">
                                        <div className="flex items-center gap-[12px] ml-[-10%] translate-y-[-20%]">
                                            <Image src={d.img} alt="user img" width={100} height={100} className="rounded-full xl:w-[80px]" />
                                            <div className="mb-[-15px]">
                                                <p className="text-[24px] xl:text-[20px]">{d.name}</p>
                                                <Image src={star.src} alt="star" width={92} height={24} className="rounded-full" />
                                            </div>
                                        </div>
                                        <p className="text-[18px] text-grey xl:text-[16px]">{d.des}</p>
                                        <Image src={quote.src} width={48} height={48} alt="quote" className="absolute top-[-24px] right-[-24px] smd:w-[40px] smd:top-[-20px] smd:right-[-20px]" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex justify-center container gap-[15px]">
                        <Image src={arrow.src} alt="star" width={55} height={55} className="cursor-pointer md:w-[40px]"
                            onClick={slidePrev} />
                        <Image src={arrow.src} alt="star" width={55} height={55} className="cursor-pointer rotate-180 md:w-[40px]" onClick={slideNext} />

                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default BestOpinions