// ChevronArrow.tsx
import React from "react"

interface ChevronArrowProps {
  src: string
  alt: string
  position: "top-right" | "bottom-left"
}

const ChevronArrow: React.FC<ChevronArrowProps> = ({ src, alt, position }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`absolute ${
        position === "top-right"
          ? "top-[-25px] right-[-25px] md:top-[-16px] md:right-[-16px] sm:top-[-10px] sm:right-[-10px]"
          : "bottom-[-25px] left-[-25px] md:bottom-[-16px] md:left-[-16px] sm:bottom-[-10px] sm:left-[-10px]"
      } w-[80px] h-[80px] md:w-[50px] md:h-[50px] sm:w-[40px] smh-[40px] fill-green group-hover:fill-light animate-slide duration-100 animate__wobble`}
    />
  )
}

export default ChevronArrow
