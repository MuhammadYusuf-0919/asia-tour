'use client'
import Image from 'next/image'
import logo from '@/assets/header/logo.png'
import tg from '@/assets/headerContact/tg.png'
import insta from '@/assets/headerContact/insta.png'
import youtube from '@/assets/headerContact/youtube.png'
import Link from 'next/link'
import phone from '@/assets/headerContact/phone.png'
import email from '@/assets/headerContact/email.png'
import { Zoom } from 'react-awesome-reveal'
import { scrollToElement } from '@/useIt/scroll'
import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
const Footer = ({ tours, tour, follow, linkss, Home, Contact, Tours, tourType, contactUs, copy }: any) => {
    const locale = useLocale()
    const pahtName = usePathname()

    return (
        <Zoom direction='up' triggerOnce>
            <footer className='container animate__animated animate__zoomInUp bg-[#212121] text-[white]'>
                <div className='w-full flex smd:flex-col smd:gap-[25px] items-center justify-between py-[65px] smd:py-[30px] border-b border-[#A0A0A0]'>
                    <div className='smd:flex smd:flex-col smd:items-center'>
                        <Image src={logo.src} alt='logo' width={125} height={125} className={`cursor-pointer lg:w-[100px] smd:w-[80px]`} />
                        <p className='text-[24px] lg:text-[18px] smd:text-[16px]'>{follow}</p>
                        <div className='flex  gap-[19px] pt-[15px]'>
                            <a href="https://instagramm.com" target='_blank'>
                                <Image src={insta.src} alt='phone' width={35} height={35} className='lg:w-[30px] md:w-[25px] animate__tada animate__animated animate__infinite infinite animate__slow animation' />
                            </a>
                            <a href="https://telegram.com" target='_blank'>
                                <Image src={tg.src} alt='phone' width={35} height={35} className='lg:w-[30px] md:w-[25px] animate__tada animate__animated animate__infinite infinite animate__slow animation' />
                            </a>
                            <a href="https://youtube.com" target='_blank'>
                                <Image src={youtube.src} alt='phone' width={35} height={35} className='lg:w-[30px] md:w-[25px] animate__tada animate__animated animate__infinite infinite animate__slow animation' />
                            </a>
                        </div>
                    </div>
                    <div className='flex gap-[100px] smd:w-full md:gap-[60px] smd:gap-x-0 smd:gap-y-[20px] smd:justify-between smd:grid smd:grid-cols-2'>
                        <div className='flex flex-col gap-[20px] smd:gap-[10px]'>
                            <h4>{linkss}</h4>
                            <div className='flex flex-col gap-[8px]'>
                                <div className='group flex items-center gap-[10px] translate-x-[-23px] hover:translate-x-0 cursor-pointer duration-400'>
                                    <span className='bg-green w-[13px] h-[13px] duration-400 translate-x-[23px] rounded-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 m-0' />
                                    <Link href={'/' + locale + '/'} locale={locale} className='text-[24px] lg:text-[18px] smd:text-[16px]'>{Home}</Link>
                                </div>
                                <div className='group flex items-center gap-[10px] translate-x-[-23px] hover:translate-x-0 cursor-pointer duration-400'>
                                    <span className='bg-green w-[13px] h-[13px] duration-400 translate-x-[23px] rounded-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 m-0' />
                                    <button className='text-[24px] lg:text-[18px] smd:text-[16px]'
                                        onClick={scrollToElement}>
                                        {Contact}
                                    </button>
                                </div>
                                <div className='group flex items-center gap-[10px] translate-x-[-23px] hover:translate-x-0 cursor-pointer duration-400'>
                                    <span className='bg-green w-[13px] h-[13px] duration-400 translate-x-[23px] rounded-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 m-0' />
                                    <Link href={pahtName === locale + '/tours' ? pahtName : '/' + locale + '/tours'} locale={locale} className='text-[24px] lg:text-[18px] smd:text-[16px]'>{Tours}</Link>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[20px] smd:gap-[10px]'>
                            <h4>{tourType}</h4>
                            <div className='flex flex-col gap-[8px]'>
                                {tours.map((l: any) => (
                                    <div key={l.name} className='group flex items-center gap-[10px] translate-x-[-23px] hover:translate-x-0 cursor-pointer duration-400'>
                                        <span className='bg-green w-[13px] h-[13px] duration-400 translate-x-[23px] rounded-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 m-0' />
                                        <Link href={pahtName} locale={locale} className='text-[24px] lg:text-[18px] smd:text-[16px]'>{l.name} {tour}</Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col gap-[20px] smd:gap-[10px] smd:w-[100%]'>
                            <h4>{contactUs}</h4>
                            <div className='flex flex-col gap-[8px]'>
                                <div className='flex items-center gap-[30px] smd:gap-[15px]'>
                                    <Image src={phone.src} alt='phone' width={18} height={18} className='animate__tada animate__animated animate__infinite infinite animate__slow animation' />
                                    <div className='flex flex-col'>
                                        <a href="tel: +9989565656" className='text-[24px] lg:text-[18px] smd:text-[16px] hover:underline'>
                                            +998 95 656 56
                                        </a>
                                        <a href="tel: +9989565656" className='text-[24px] lg:text-[18px] smd:text-[16px] hover:underline'>
                                            +998 95 656 56
                                        </a>
                                    </div>
                                </div>
                                <div className='flex items-center gap-[30px] smd:gap-[15px]'>
                                    <Image src={email.src} alt='email' width={18} height={18} className='animate__tada animate__animated animate__infinite infinite animate__slow animation' />
                                    <a href="mailto: alpertour@gmail.com" className='text-[24px] lg:text-[18px] smd:text-[16px] hover:underline'>alpertour@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-[27px] smd:py-[20px]'>
                    <span className='text-grey text-center text-[22px] smd:text-[18px] sm:text-[14px]'>{copy}</span>
                </div>
            </footer >
        </Zoom >
    )
}

export default Footer