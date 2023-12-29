"use client"

import React from "react"
import {
  Card,
  Input,
  Button,
  Select,
  Textarea,
  SelectItem,
} from "@nextui-org/react"
import ArrowImage from "../arrow-image"
import BlockHeader from "../block-header"
import DatePicker from "@/lib/DatePicker"
import bestResultsImage from "@/assets/images/bestResults.png"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { adultData, allTagsData, childData, ticketsData } from "@/data"
import { useTranslations } from "next-intl"
import { Slide } from "react-awesome-reveal"

interface FormValues {
  date: string
  email: string
  message: string
  fullName: string
  phoneNumber: number
  adultSelect: string
  childSelect: string
  selectedTag: string
  ticketSelect: string
}

// Define component
const BestResults: React.FC = () => {
  const t = useTranslations("home")
  const [selectedTag, setSelectedTag] = React.useState<string | null>(null)

  const {
    control,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const handleTagClick = (value: string) => {
    setSelectedTag(value)
    setValue("selectedTag", value)
  }

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form data:", data)
    // Handle the form submission logic here
  }

  return (
    <Slide triggerOnce direction="up">
      <div className="container-lg grid py-[80px] md:py-[60px] sm:py-[40px] gap-y-[40px] md:gap-y-[30px] sm:gap-y-[20px]">
        <Slide direction="up" triggerOnce>
          <div className="flex flex-col items-start gap-4">
            <span>{t("With Easilly")}</span>
            <h3 className="dark-title">{t("Best Results")}</h3>
          </div>
        </Slide>
        <div className="grid grid-cols-2 md:grid-cols-1 justify-between gap-x-[80px] md:gap-x-[60px] md:gap-y-[50px]">
          <div className="grid gap-y-[80px] md:gap-y-[60px] sm:gap-y-[40px]">
            <Slide direction="left" triggerOnce>
              <ArrowImage url={bestResultsImage.src} />
            </Slide>
            <Slide direction="up" triggerOnce>
              <Card className='h-full'>
                <BlockHeader title={t("All Tags")} />
                <div className="grid grid-cols-4 md:grid-cols-3 smd:grid-cols-2 sm:grid-cols-1 py-[20px] px-[25px] gap-[20px]">
                  {allTagsData.map((value) => (
                    <div key={value} className="grid gap-[6px] text-center">
                      <Button
                        onClick={() => handleTagClick(value)}
                        variant={selectedTag === value ? "flat" : "bordered"}
                        {...register("selectedTag", {
                          required: "Please select a tag",
                        })}
                        color={errors.selectedTag ? "danger" : undefined}
                      >
                        {t(value)}
                      </Button>
                      {errors.selectedTag && (
                        <p className="text-danger text-[12px]">
                          {errors.selectedTag.message}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </Slide>
          </div>
          <Slide direction="right" triggerOnce>
            <Card className="overflow-visible">
              <BlockHeader title={t("Book this Tour")} />
              <form onSubmit={handleSubmit(onSubmit)} className="contents">
                <div className="h-full p-[25px] grid gap-y-[20px]">
                  <Input
                    type="text"
                    {...register("fullName", {
                      required: "Full name is required",
                    })}
                    variant="bordered"
                    label={t("Your full name")}
                    isInvalid={!!errors.fullName}
                    errorMessage={
                      errors.fullName && "Please enter a valid full name"
                    }
                  />
                  <Input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: /^\S+@\S+$/i,
                    })}
                    variant="bordered"
                    label={t("Your email")}
                    isInvalid={!!errors.email}
                    errorMessage={errors.email && "Please enter a valid email"}
                  />
                  <Input
                    type="phone"
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                    })}
                    variant="bordered"
                    label={t("Your phone number")}
                    isInvalid={!!errors.phoneNumber}
                    errorMessage={
                      errors.phoneNumber && "Please enter a valid phone number"
                    }
                  />
                  <Select
                    fullWidth={true}
                    variant="bordered"
                    label={t("Ticket a select")}
                    className="w-full"
                    {...register("ticketSelect", {
                      required: "Ticket select is required",
                    })}
                    isInvalid={!!errors.ticketSelect}
                    errorMessage={
                      errors.ticketSelect && "Please select a ticket"
                    }
                  >
                    {ticketsData.map((ticket) => (
                      <SelectItem key={ticket.value} value={ticket.value}>
                        {ticket.label}
                      </SelectItem>
                    ))}
                  </Select>

                  <div className="flex items-center justify-between gap-[100px]">
                    <Select
                      variant="bordered"
                      label={t("Adult")}
                      {...register("adultSelect", {
                        required: "Please select an adult option",
                      })}
                      isInvalid={!!errors.adultSelect}
                      errorMessage={
                        errors.adultSelect && errors.adultSelect.message
                      }
                    >
                      {adultData.map((adult) => (
                        <SelectItem key={adult.value} value={adult.value}>
                          {adult.label}
                        </SelectItem>
                      ))}
                    </Select>
                    <Select
                      variant="bordered"
                      label={t("Child")}
                      {...register("childSelect", {
                        required: "Please select a child option",
                      })}
                      isInvalid={!!errors.childSelect}
                      errorMessage={
                        errors.childSelect && errors.childSelect.message
                      }
                    >
                      {childData.map((child) => (
                        <SelectItem key={child.value} value={child.value}>
                          {child.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>

                  <Controller
                    name="date"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <DatePicker
                        errors={errors}
                        value={field.value}
                        name={field.name}
                        placeholder={t("date")}
                        onChange={(value) => field.onChange(value)}
                      />
                    )}
                  />

                  <Textarea
                    label={t("Your message")}
                    variant="bordered"
                    placeholder={t("Enter your message")}
                    {...register("message", {
                      required: "Message is required",
                    })}
                    isInvalid={!!errors.message}
                    errorMessage={errors.message && errors.message.message}
                    classNames={{
                      innerWrapper: "h-[150px] md:h-[120px] sm:h-[80px]",
                    }}
                  />
                  <Button
                    type="submit"
                    radius="full"
                    className="h-[50px] md:h-[40px] sm:h-[30px] text-[white] font-roboto text-[22px] font-normal bg-green py-[12px]"
                  >
                    {t("Book Now")}
                  </Button>
                </div>
              </form>
            </Card>
          </Slide>
        </div>
      </div>
    </Slide>
  )
}

export default BestResults
