import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Index() {
  const t = useTranslations('home');
  return (
    <div>
      <h1>{t('title')}</h1>
      <div className='flex gap-5'>
        <Link href='/en' locale='en'>en</Link>
        <Link href='/ru' locale='ru'>ru</Link>
        <Link href='/tu' locale='tu'>tu</Link>
      </div>
    </div>
  )
}