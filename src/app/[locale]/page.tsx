
import BestResults from "@/components/best-results"
import ContactUs from "@/components/contac-us-main"
import Contact from "@/components/contact"
import Includes from "@/components/Includes"
import TopTours from "@/components/TopTours"
import { useTranslations } from "next-intl"
import BestAbroadTours from "@/components/BestAbroadTours"
import BestOpinions from "@/components/BestOpinions"
import BestTours from "@/components/BestTours"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Slider from "@/components/Slider"

export default function Index() {
  const t = useTranslations("home")

  const a = useTranslations('home')

  return (
    <div className="flex flex-col gap-[115px] lg:gap-[80px] md:gap-[60px] smd:gap-[40px]">
      <div>
        <Header />
        <Slider />
      </div>
      <div className='container-lg flex flex-col gap-[115px] lg:gap-[80px] md:gap-[60px] smd:gap-[40px]'>
        <BestTours title={a('Best Tours')} span={a('Top selling')} />
        <BestAbroadTours title={a('Best Abroad Tours')} span={a('Top selling')} />
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
