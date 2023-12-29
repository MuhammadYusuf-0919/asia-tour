"use client"

import React from "react"
import IncludesList from "../includes-list"
import { useTranslations } from "next-intl"
import { includeData, notIncludeData } from "@/data"
import { Slide } from "react-awesome-reveal"

function Includes() {
  const t = useTranslations("home")
  return (
    <Slide triggerOnce direction="up">
      <div className="container-lg py-[80px] md:py-[60px] sm:py-[40px] flex smd:flex-col gap-[50px] md:gap-[40px] sm:gap-[30px]  smd:gap-y-[30px]">
        <Slide direction="left" triggerOnce>
          <IncludesList title={t("Include")} data={includeData} />
        </Slide>
        <Slide direction="right" triggerOnce>
          <IncludesList title={t("Not Include")} data={notIncludeData} />
        </Slide>
      </div>
    </Slide>
  )
}

export default Includes
