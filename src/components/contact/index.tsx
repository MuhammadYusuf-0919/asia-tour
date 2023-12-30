"use client"

import React from "react"
import { contactData } from "@/data"
import { InfoItem } from "../InfoItem"
import ArrowImage from "../arrow-image"
import userIcon from "@/assets/images/user.svg"
import operator from "@/assets/images/operator.png"
import phoneCall from "@/assets/images/phoneCall.svg"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button, Card, Input, Textarea } from "@nextui-org/react"
import { useTranslations } from "next-intl"
import { Fade, Slide } from "react-awesome-reveal"
import StarRating from "../stars-rating"

interface FormData {
  name: string
  number: string
  message: string
}

const inputStyles = {
  label: "text-black font-roboto text-3xl md:text-2xl sm:tedxt-xl",
  input: [
    "text-black/90 dark:text-white/90",
    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
  ],
  inputWrapper: [
    "shadow-xl",
    "h-[60px]",
    "backdrop-blur-xl",
    "backdrop-saturate-200",
    "!cursor-text",
  ],
}

interface ContactProps {
  main?: boolean
}

function Contact({ main }: ContactProps) {
  const t = useTranslations("home")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }

  return (
    <Slide triggerOnce direction="up">
      <div
        id="contact"
        className="container-lg py-[80px] grid gap-x-[100px] gap-y-[110px] md:gap-y-[80px] smd:gap-y-[60px] sm:gap-y-[40px] "
      >
        {main && (
          <>
            <Slide direction="up" triggerOnce>
              <div className="flex flex-col items-start">
                <span>{t("With Easilly")}</span>
                <h2>{t("Contact us")}</h2>
              </div>
            </Slide>
            <div className="grid grid-cols-2 md:grid-cols-1 justify-between gap-x-[90px] md:gap-y-[60px] md:justify-center">
              <Fade direction="left" className="pl-[30px] md:px-[20px]">
                <ArrowImage url={operator.src} />
              </Fade>
              <Fade direction="right">
                <Card className="grid py-[20px] p-[40px] md:p-[30px] sm:p-[20px] gap-[20px] shadow-0px 0px 25px 0px rgba(0, 0, 0, 0.20) animate__animate animate__backInRight animate__backOutRight">
                  <h3 className="text-black font-roboto text-2xl font-semibold">
                    {t("Contact Info")}
                  </h3>
                  {contactData.map((info, index) => (
                    <InfoItem key={index} {...info} />
                  ))}
                </Card>
              </Fade>
            </div>
          </>
        )}
        <Slide direction="up" triggerOnce>
          <Card className="contact p-[50px] smd:p-[30px] sm:p-[20px] gap-y-[50px] smd:gap-y-[40px] sm:gap-y-[30px]">
            <form onSubmit={handleSubmit(onSubmit)} className="contents">
              <div className="font-roboto">
                <h3 className="text-black text-2xl font-semibold">
                  {t("Contact-title")}
                </h3>
                <p className="text-gray-400 text-lg">{t("Contact-desc")}</p>
              </div>
              <div className="grid gap-y-[30px] md:gap-y-[24px] sm:gap-y-[20px]">
                <div className="flex md:flex-col md:gap-y-[20px] items-center gap-x-[100px]">
                  <Input
                    type="text"
                    variant="bordered"
                    label={t("Your full name")}
                    labelPlacement="outside"
                    classNames={inputStyles}
                    placeholder="Johnson Bernard"
                    isInvalid={errors.name && true}
                    color={errors.name && "danger"}
                    startContent={<img src={userIcon.src} alt="user icon" />}
                    errorMessage={errors.name && "Please enter a valid name"}
                    {...register("name", {
                      required: "This field is required",
                    })}
                  />

                  <Input
                    type="phone"
                    variant="bordered"
                    label={t("Your phone number")}
                    labelPlacement="outside"
                    classNames={inputStyles}
                    placeholder="+998 92 55 56"
                    isInvalid={errors.number && true}
                    color={errors.number ? "danger" : "default"}
                    {...register("number", {
                      required: "This field is required",
                      // pattern: {
                      //   // value: /^\+?\d+$/,
                      //   message: "Invalid phone number format",
                      // },
                    })}
                    errorMessage={
                      errors.number && "Please enter a valid number"
                    }
                    startContent={<img src={phoneCall.src} alt="phone icon" />}
                  />
                </div>
                <Textarea
                  variant="bordered"
                  label={t("Your message")}
                  labelPlacement="outside"
                  placeholder="message"
                  isInvalid={errors.message && true}
                  color={errors.message && "danger"}
                  {...register("message", {
                    required: "This field is required",
                  })}
                  errorMessage={
                    errors.message && `Please enter a valid message`
                  }
                  classNames={{
                    label: "text-black font-roboto text-3xl",
                    input: [
                      "text-black/90 dark:text-white/90",
                      "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                    ],
                    innerWrapper: "h-[180px]",
                    inputWrapper: [
                      "grid-cols-1",
                      "shadow-xl",
                      "backdrop-blur-xl",
                      "backdrop-saturate-200",
                      "!cursor-text",
                    ],
                  }}
                />
                <StarRating />
                <Button
                  size="lg"
                  type="submit"
                  color="primary"
                  className="w-1/5 md:w-full ml-auto px-[30px] py-[16px] lg:px-[20px] lg:py-[13px] text-[24px]  sm:text-[14px] lg:text-[20px] md:text-[18px] md:px-[8px] md:h-[40px] sm:h-[30px] bg-green rounded-[5px] animate__animated animate__zoomInUp animate__slow"
                >
                  {t("Send")}
                </Button>
              </div>
            </form>
          </Card>
        </Slide>
      </div>
    </Slide>
  )
}

export default Contact