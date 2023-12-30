'use client'

import React from "react"
import ArrowImage from "../arrow-image"
import topTours from "@/assets/images/topTours.png"
import { useTranslations } from "next-intl"
import { Slide } from "react-awesome-reveal"

function TopTours() {
  const t = useTranslations("home")
  return (
    <Slide direction="up" triggerOnce>
      <div className="container-lg py-[50px] flex md:flex-col md:gap-y-[40px] sm:gap-y-[30px] items-start justify-between gap-x-[85px] md:gap-x-[60px] smd:gap-y-[40px]">
        <Slide direction="up" triggerOnce>
          <div className="w-full grid gap-y-[30px] md:gap-y-[20px] sm:gap-y-[14px]">
            <div className="flex flex-col items-start gap-4">
              <span>{t("Top Agency")}</span>
              <h3 className="dark-title">{t("Top Tours")}</h3>
            </div>
            <p className="text-grayDarker font-roboto text-28 font-medium">
              {t("Top Tours desc")}
            </p>
          </div>
        </Slide>
        <Slide direction="up" triggerOnce>
          <ArrowImage url={topTours.src} />
        </Slide>
      </div>
    </Slide>
  )
}

export default TopTours
