
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
    <div>
      <Header />
      <Slider />
      <div className='container pt-[111px] flex flex-col gap-[111px]'>
        <TopTours />
        <div className='flex flex-col gap-[111px] container'>
          <BestTours title={t('Best Tours')} span={t('Top selling')} />
          <BestAbroadTours title={t('Best Abroad Tours')} span={t('Top selling')} />
        </div>
      </div>
      <div className="pt-[111px]">
        <BestOpinions title={t("Best Opinions")} span={t("Top selling")} />
      </div>
      <Contact main={true} />
      <ContactUs />
      <Footer />
    </div>
  )
}