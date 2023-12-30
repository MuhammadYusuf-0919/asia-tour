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
      <div className="mx-auto gap-[30px] smd:gap-[20px]">
        <div className="w-[90%] mx-auto flex items-center flex-col gap-[30px] smd:gap-[20px]">
          <div className="w-full">
            <h2 className="text-[white] text-[54px] xl:text-[45px] md:text-[40px] smd:text-[25px] font-roboto font-bold text-center animate__animated animate__zoomInDown animate__slow">
              {t("Contact-us-title")}
            </h2>
            <p className="text-[white] font-roboto text-[30px] xl:text-[26px] md:text-[20px] smd:text-[16px] animate__animated animate__zoomInDown animate__slow">
              {t("Contact-us-desc")}
            </p>
          </div>
          <Button
            size="lg"
            color="primary"
            onClick={scrollToElement}
            className="px-[30px] py-[16px] lg:px-[20px] lg:py-[13px] text-[24px] lg:text-[20px] md:text-[18px] md:px-[8px] md:h-[40px] sm:h-[30px] bg-green rounded-[5px] animate__animated animate__zoomInUp animate__slow w-max"
          >
            {t("Contact us")}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
