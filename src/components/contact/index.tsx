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

interface FormData {
  name: string
  number: string
  message: string
}

const inputStyles = {
  label: "text-black font-roboto text-3xl",
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

function Contact() {
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
    <div
      id="contact"
      className="container-lg gap-x-[100px]  py-[40px] md:py-[30px] sm:py-[20px] grid gap-y-[55px] smd:gap-y-[40px] sm:gap-y-[30px]"
    >
      <h3 className="dark-title">{t("Contact us")}</h3>
      <div className="grid grid-cols-2 md:grid-cols-1 justify-between gap-x-[90px] md:gap-y-[60px] md:justify-center">
        <ArrowImage url={operator.src} />
        <Card className="grid py-[20px] px-[30px] gap-[20px] animate__animate animate__backInRight animate__backOutRight">
          <h3 className="text-black font-roboto text-2xl font-semibold">
            {t("Contact Info")}
          </h3>
          {contactData.map((info, index) => (
            <InfoItem key={index} {...info} />
          ))}
        </Card>
      </div>

      <Card className="p-[50px] smd:p-[30px] sm:p-[20px] gap-y-[50px] smd:gap-y-[40px] sm:gap-y-[30px] animate__animate animate__backInUp animate__backOutUp">
        <form onSubmit={handleSubmit(onSubmit)} className="contents">
          <div className="font-roboto">
            <h3 className="text-black text-2xl font-semibold">
              {t("Contact-title")}
            </h3>
            <p className="text-gray-400 text-lg">{t("Contact-desc")}</p>
          </div>
          <div className="grid gap-y-[30px]">
            <div className="flex items-center gap-x-[100px]">
              <Input
                type="text"
                label={t("Your full name")}
                labelPlacement="outside"
                classNames={inputStyles}
                placeholder="Johnson Bernard"
                isInvalid={errors.name && true}
                color={errors.name && "danger"}
                startContent={<img src={userIcon.src} alt="user icon" />}
                errorMessage={errors.name && "Please enter a valid name"}
                {...register("name", { required: "This field is required" })}
              />

              <Input
                type="number"
                label={t("Your phone number")}
                labelPlacement="outside"
                classNames={inputStyles}
                placeholder="+998 92 55 56"
                isInvalid={errors.number && true}
                color={errors.number ? "danger" : "default"}
                {...register("number", {
                  required: "This field is required",
                  pattern: {
                    value: /^\+?\d+$/,
                    message: "Invalid phone number format",
                  },
                })}
                errorMessage={errors.number && "Please enter a valid number"}
                startContent={<img src={phoneCall.src} alt="phone icon" />}
              />
            </div>
            <Textarea
              variant="flat"
              label={t("Enter your message")}
              labelPlacement="outside"
              placeholder="message"
              isInvalid={errors.message && true}
              color={errors.message && "danger"}
              {...register("message", { required: "This field is required" })}
              errorMessage={errors.message && `Please enter a valid message`}
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
            <Button
              size="lg"
              type="submit"
              color="primary"
              className="w-1/5 ml-auto px-[30px] py-[16px] lg:px-[20px] lg:py-[13px] text-[24px] lg:text-[20px] md:text-[18px] md:px-[8px] md:h-[40px] sm:h-[30px] bg-green rounded-[5px] animate__animated animate__zoomInUp animate__slow"
            >
              {t('Send')}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default Contact
