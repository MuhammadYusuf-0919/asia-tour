import ContactUs from '@/components/contac-us-main';
import Contact from '@/components/contact';
import Includes from '@/components/Includes';
import { useTranslations } from 'next-intl';
import BestAbroadTours from '@/components/BestAbroadTours';
import BestOpinions from '@/components/BestOpinions';
import BestTours from '@/components/BestTours';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Slider from '@/components/Slider';

export default function Index() {

  const a = useTranslations('home')

  return (
    <div>
      <Header />
      <Slider />
      <div className='container pt-[111px] flex flex-col gap-[111px]'>
        <div className='flex flex-col gap-[111px] container'>
          <Includes />
          <Contact />
          <ContactUs />
          <BestTours title={a('Best Tours')} span={a('Top selling')} />
          <BestAbroadTours title={a('Best Abroad Tours')} span={a('Top selling')} />
        </div>
      </div>
      <div className='pt-[111px]'>
        <BestOpinions title={a('Best Opinions')} span={a('Top selling')} />
      </div>
      <Footer />
    </div>
  )
}

