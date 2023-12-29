import React from "react"
import ArrowImage from "../arrow-image"
import topTours from "@/assets/images/topTours.png"
import { useTranslations } from "next-intl"

function TopTours() {
  const t = useTranslations('home')
  return (
    <div className="container-lg py-[50px] flex smd:flex-col items-start justify-between gap-x-[85px] md:gap-x-[60px] smd:gap-y-[40px]">
      <div className="w-full grid gap-y-[30px] md:gap-y-[20px] sm:gap-y-[14px]">
        <h3 className="dark-title">{t('Top Tours')}</h3>
        <p className="text-grayDarker font-roboto text-28 font-medium">
          {t('Top Tours desc')}
        </p>
      </div>
      <ArrowImage url={topTours.src} />
    </div>
  )
}

export default TopTours
