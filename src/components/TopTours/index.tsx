'use client'
import React from "react"
import ArrowImage from "../arrow-image"
import topTours from "@/assets/images/topTours.png"
import { useTranslations } from "next-intl"
import { Slide } from "react-awesome-reveal"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCreative } from "swiper/modules"
import SwiperCore from 'swiper';
import Image from "next/image"
import chevronLeft from "@/assets/images/chevronLeft.png"
import chevronRight from "@/assets/images/chevronRight.png"

function TopTours() {
  SwiperCore.use([Autoplay]);
  const t = useTranslations("home")

  const swiperParams = {
    loop: true,
    autoplay: {
      delay: 3000
    },
    effect: 'creative',
    speed: 1500
  };
  return (
    <Slide direction="up" triggerOnce>
      <div className="flex md:flex-col md:gap-y-[100px] sm:gap-y-[80px] items-end justify-between gap-x-[85px]">
        <div className="w-[50%] md:w-full grid gap-y-[30px] md:gap-y-[20px] sm:gap-y-[14px]">
          <div className="flex flex-col items-start">
            <span>{t("Top Agency")}</span>
            <h2>{t("Top Tours")}</h2>
          </div>
          <p className="text-grayDarker font-roboto text-28 font-medium">
            {t("Top Tours desc")}
          </p>
        </div>
        <div className='w-[30%] xl:w-[35%] md:w-[50%] smd:w-[60%] md:mr-[20%] smd:mr-[10%] sm:w-[70%] sm:mr-[5%] z-0'>
          <Swiper
            {...swiperParams}
            modules={[EffectCreative]}
            creativeEffect={{
              prev: {
                shadow: false,
                translate: ['-70%', '-50%', -400],
              },
              next: {
                translate: ['100%', 0, 0],
                opacity: 0
              },
            }}
            className="overflow-visible"
          >
            <SwiperSlide>
              <div className="relative w-full overflow-visible p-[20px]">
                <Image src={chevronLeft.src} className="absolute bottom-0 left-0" width={48} height={45} alt="img" />
                <Image src={topTours.src} width={422} height={267} className="w-full object-contain rounded-tl-[20px] rounded-br-[20px]" alt="img" />
                <Image src={chevronRight.src} className="absolute top-0 right-0" width={48} height={45} alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full overflow-visible p-[20px]">
                <Image src={chevronLeft.src} className="absolute bottom-0 left-0" width={48} height={45} alt="img" />
                <Image src={topTours.src} width={422} height={267} className="w-full object-contain rounded-tl-[20px] rounded-br-[20px]" alt="img" />
                <Image src={chevronRight.src} className="absolute top-0 right-0" width={48} height={45} alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full overflow-visible p-[20px]">
                <Image src={chevronLeft.src} className="absolute bottom-0 left-0" width={48} height={45} alt="img" />
                <Image src={topTours.src} width={422} height={267} className="w-full object-contain rounded-tl-[20px] rounded-br-[20px]" alt="img" />

                <Image src={chevronRight.src} className="absolute top-0 right-0" width={48} height={45} alt="img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full overflow-visible p-[20px]">
                <Image src={chevronLeft.src} className="absolute bottom-0 left-0" width={48} height={45} alt="img" />
                <Image src={topTours.src} width={422} height={267} className="w-full object-contain rounded-tl-[20px] rounded-br-[20px]" alt="img" />

                <Image src={chevronRight.src} className="absolute top-0 right-0" width={48} height={45} alt="img" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Slide>
  )
}

export default TopTours
