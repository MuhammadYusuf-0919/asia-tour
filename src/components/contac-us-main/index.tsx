"use client"

// Import necessary dependencies
import React from "react"
import { Button } from "@nextui-org/react"
import { useTranslations } from "next-intl"

// Define the BestOpinions component
function ContactUs() {
  const t = useTranslations("home")

  // Function to scroll to the 'contact' element
  const scrollToElement = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  // JSX structure for the component
  return (
    <div
      className="w-full items-center grid text-center justify-center h-[500px] md:h-[400px] sm:h-[300px] animate__animated animate__fadeInUp"
      style={{
        background: `linear-gradient(rgba(26, 26, 26, 0.75), rgba(26, 26, 26, 0.75)), url(https://picsum.photos/${1440 + 1
          }) center/cover no-repeat`,
        aspectRatio: "72/35",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[80%] sm:w-[90%] mx-auto gap-[30px] smd:gap-[20px]">
        <div className="w-[80%] mx-auto gap-[30px] smd:gap-[20px]">
          <h2 className="text-[white]  md:text-[40px] text-[30px] font-roboto font-bold text-center animate__animated animate__zoomInDown animate__slow">
            {t("Contact-us-title")}
          </h2>
          <p className="text-[white] font-roboto font-normal text-4xl md:text-3xl smd:text-2xl sm:text-xl animate__animated animate__zoomInDown animate__slow">
            {t("Contact-us-desc")}
          </p>
          <Button
            size="lg"
            color="primary"
            onClick={scrollToElement}
            className="mt-[60px] md:mt-[45px] sm:mt-[30px] px-[30px] py-[16px] lg:px-[20px] lg:py-[13px] text-[24px] lg:text-[20px] md:text-[18px] md:px-[8px] md:h-[40px] sm:h-[30px] bg-green rounded-[5px] animate__animated animate__zoomInUp animate__slow "
          >
            {t("Contact us")}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
