// Import necessary modules and components
"use client"

import { allTagsData } from "@/data"
import { Button, Card } from "@nextui-org/react"
import { useTranslations } from "next-intl"
import React, { useState } from "react"
import { Slide } from "react-awesome-reveal"
import BlockHeader from "../block-header"

const selectedTagData = [
  { tag: "Flying", data: [{ prices: 200 }, { tourists: 500 }] },
  { tag: "Holiday", data: [{ prices: 300 }, { tourists: 700 }] },
  { tag: "Family Tour", data: [{ prices: 400 }, { tourists: 800 }] },
  { tag: "Features", data: [{ prices: 150 }, { tourists: 400 }] },
  { tag: "Explore", data: [{ prices: 250 }, { tourists: 600 }] },
  { tag: "Destinations", data: [{ prices: 350 }, { tourists: 900 }] },
  { tag: "Ins Travel", data: [{ prices: 180 }, { tourists: 450 }] },
  { tag: "Beach", data: [{ prices: 320 }, { tourists: 750 }] },
  { tag: "Summer", data: [{ prices: 280 }, { tourists: 650 }] },
  { tag: "Touristic", data: [{ prices: 420 }, { tourists: 1000 }] },
  { tag: "Traveling", data: [{ prices: 240 }, { tourists: 550 }] },
]

function Blocks() {
  const t = useTranslations("home")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const handleTagClick = (value: string) => {
    setSelectedTag(value)
  }

  return (
    <div className="container-lg flex md:flex-col gap-x-[20px] gap-y-[30px]">
      <Slide className="w-6/12 md:w-full" direction="up" triggerOnce>
        <Card className="h-full">
          <BlockHeader title={t("Prices")} />
          <table className="w-full">
            <thead>
              <tr>
                <th
                  className="w-1/3 p-[25px] text-dark font-roboto font-normal text-2xl md:text-xl sm:text-lg"
                  style={{
                    borderRight: "2px solid",
                    borderBottom: "2px solid",
                  }}
                >
                  Tourists
                </th>
                <th
                  className="w-2/3 p-[25px] text-dark font-roboto font-normal text-2xl md:text-xl sm:text-lg border-gray-300"
                  style={{ borderBottom: "2px solid" }}
                >
                  Prices
                </th>
              </tr>
            </thead>
            <tbody>
              {selectedTagData[0].data.map((dataItem, index) => (
                <tr key={index}>
                  <td
                    className="w-1/3 px-[25px] py-[20px] text-grayDark font-roboto font-normal text-2xl md:text-xl sm:text-lg border-gray-300"
                    style={{ borderRight: "2px solid" }}
                  >
                    {dataItem.tourists}
                  </td>
                  <td className="w-2/3 px-[25px] py-[20px] text-grayDark font-roboto font-normal text-2xl md:text-xl sm:text-lg ">
                    ${dataItem.prices}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </Slide>
      <Slide className="w-6/12 md:w-full" direction="up" triggerOnce>
        <Card className="h-full">
          <BlockHeader title={t("All Tags")} />
          <div className="grid grid-cols-4 md:grid-cols-3 smd:grid-cols-2 sm:grid-cols-1 py-[20px] px-[25px] gap-[20px]">
            {allTagsData.map((value, index) => (
              <div key={index} className="grid gap-[6px] text-center">
                <Button
                  // onClick={() => handleTagClick(value)}
                  // variant={selectedTag === value ? "flat" : "bordered"}
                  variant='bordered'
                >
                  {t(value)}
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </Slide>
    </div>
  )
}

export default Blocks
