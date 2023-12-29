'use client'

import React from "react"
import { bestResultsData } from "@/data"
import { Card } from "@nextui-org/react"
import { Zoom } from "react-awesome-reveal"

function Static() {
  return (
    <Zoom direction='up' triggerOnce>
      <div className="px-[200px] md:px-[30px] pt-[150px] md:pt-[100px] sm:pt-[80px] pb-[50px] md:pb-[40px] sm:pb-[30px]">
        <Card className="px-[20px]">
          <div className="h-full py-[35px] md:py-[26px] sm:py-[20px] px-[25px] md:px-[20px] smd:px-[18px] sm:px-[16px] grid grid-cols-4 md:grid-cols-2 items-center justify-between gap-x-[60px] gap-y-[35px] mdgap-x-[45px] mdgap-y-[20px] sm:gap-x-[30px] sm:gap-y-[18px]">
            {bestResultsData.map(({ icon, title, desc }) => (
              <div className="flex items-center" key={title}>
                <img src={icon} alt={`${title}-image`} />
                <div className="ml-[10px]">
                  <h4 className="text-dark font-roboto text-2xl md:text-xl sm:text-lg font-medium">
                    {title}
                  </h4>
                  <p className="text-grayDark font-roboto text-lg md:text-base sm:text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Zoom>
  )
}

export default Static
