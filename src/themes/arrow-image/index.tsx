import React from "react"
import ChevronArrow from "../chevronArrow"
import chevronLeft from "@/assets/images/chevronLeft.png"
import chevronRight from "@/assets/images/chevronRight.png"

interface ArrowImageProps {
  url: string
}

const ArrowImage: React.FC<ArrowImageProps> = ({ url }) => {
  return (
    <div className="w-full h-full relative md:col-span-1 animate__animate animate__backInLeft animate__backOutLeft">
      <img
        src={url}
        alt="operator"
        loading="lazy"
        className="w-full h-full object-cover rounded-[20x] rounded-br-[20px] rounded-tl-[20px]"
      />
      <ChevronArrow
        alt="chevron-right"
        position="top-right"
        src={chevronRight.src}
      />
      <ChevronArrow
        alt="chevron-left"
        src={chevronLeft.src}
        position="bottom-left"
      />
    </div>
  )
}

export default ArrowImage
