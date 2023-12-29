import BestAbroadTours from '@/components/BestAbroadTours';
import BestOpinions from '@/components/BestOpinions';
import BestTours from '@/components/BestTours';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Slider from '@/components/Slider';
import { useTranslations } from 'next-intl';

export default function Index() {
  const a = useTranslations('home');

  setTimeout(() => {
    return
  }, 1000)
  return (
    <div>
      <Header />
      <Slider />
      <div className='container pt-[111px] flex flex-col gap-[111px]'>
        <div className='flex flex-col gap-[111px] container'>
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