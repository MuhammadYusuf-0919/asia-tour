import React from "react"
import IncludesList from "../includes-list"
import { useTranslations } from "next-intl"
import { includeData, notIncludeData } from "@/data"

function Includes() {
  const t = useTranslations("second")
  return (
    <div className="container-lg py-[50px] md:py-[40px] sm:py-[30px] flex smd:flex-col gap-[10px] justify-center smd:gap-y-[30px]">
      <IncludesList title={t("Include")} data={includeData} />
      <IncludesList title={t("Not Include")} data={notIncludeData} />
    </div>
  )
}

export default Includes
