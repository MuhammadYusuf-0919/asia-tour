
import Contact from "@/components/contact"
import { useTranslations } from "next-intl"
import BestAbroadTours from "@/components/BestAbroadTours"
import BestOpinions from "@/components/BestOpinions"
import BestTours from "@/components/BestTours"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Slider from "@/components/Slider"
import ContactUs from "@/components/contac-us-main"
import TopTours from "@/components/TopTours"

export default function Index() {
  const t = useTranslations("home")

  return (
    <div className="flex flex-col gap-[115px] lg:gap-[80px] md:gap-[60px] smd:gap-[40px]">
      <div>
        <Header />
        <Slider />
      </div>
      <div className='container-lg flex flex-col gap-[115px] lg:gap-[80px] md:gap-[60px] smd:gap-[40px]'>
        <TopTours />
        <BestTours title={t('Best Tours')} span={t('Top selling')} />
        <BestAbroadTours title={t('Best Abroad Tours')} span={t('Top selling')} />
        <Contact main={true} />
      </div>
      <div className="flex flex-col gap-[115px] lg:gap-[80px] md:gap-[60px] smd:gap-[40px]">
        <BestOpinions title={t("Best Opinions")} span={t("Top selling")} />
        <ContactUs />
      </div>
      <Footer />
    </div>
  )
}