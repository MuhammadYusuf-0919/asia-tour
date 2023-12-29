"use client"

import React from "react"
import BlockHeader from "../block-header"
import { roundedIcon } from "@/assets/svg"
import { Card, Listbox, ListboxItem, ScrollShadow } from "@nextui-org/react"

interface IncludesListProps {
  title: string
  data: string[]
}

const IncludesList: React.FC<IncludesListProps> = ({ title, data }) => {
  return (
    <Card className="w-[545px] md:w-[480px] smd:w-full h-[480px] md:h-[350px] sm:h-[280px]">
      <BlockHeader title={title} />
      <ScrollShadow className="overflow-y-auto overflow-x-hidden scrollbar">
        <Listbox
          aria-label="Actions"
          className="py-[30px] px-[10px]"
        >
          {data.map((value, idx) => (
            <ListboxItem
              key={idx}
              startContent={roundedIcon}
            >
              {value}
            </ListboxItem>
          ))}
        </Listbox>
      </ScrollShadow>
    </Card>
  )
}

export default IncludesList
