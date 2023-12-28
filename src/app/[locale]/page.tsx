import BestAbroadTours from '@/components/BestAbroadTours';
import BestOpinions from '@/components/BestOpinions';
import BestTours from '@/components/BestTours';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Slider from '@/components/Slider';
import { useTranslations } from 'next-intl';

export default function Index() {
  const a = useTranslations('home');
  const t = useTranslations('footer');
  const tours = [
    {
      name: t('Adventure'),
      href: '/adventure'
    },
    {
      name: t('Couple'),
      href: '/couple'
    },
    {
      name: t("Family"),
      href: '/family'
    }
  ]
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
      <Footer
        follow={t('Follow us on')}
        linkss={t('Links')}
        Home={t('Home')}
        Contact={t('Contact')}
        Tours={t('Tours')}
        tourType={t('Tour Type')}
        contactUs={t('Contact us')}
        copy={t('Copyright 2020 2023 by Alper Tungo Tour')}
        tours={tours}
        tour={t('tour')}
      />
    </div>
  )
}