import BestResults from '@/components/best-results';
import ContactUs from '@/components/contac-us-main';
import Contact from '@/components/contact';
import Includes from '@/components/Includes';
import TopTours from '@/components/TopTours';
import { useTranslations } from 'next-intl';
// import Link from 'next/link';

export default function Index() {
  return (
    <>
      <h1>Home</h1>
      <Includes />
      <BestResults />
      <TopTours />
      <Contact />
      <ContactUs />
    </>
  )
}

