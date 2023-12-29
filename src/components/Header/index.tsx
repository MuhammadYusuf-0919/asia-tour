'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import logo from '@/assets/header/logo.png'
import earth from '@/assets/header/lang.png'
import arrow from '@/assets/header/arrow.png'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/navigation'
import Drawer from './Drawer'
import HeaderContact from './HeaderContact'

const Header = () => {
    const [open, setOpen] = useState(false)
    const [drawer, setDrawer] = useState(false)
    const locale = useLocale()
    const pathname = usePathname()
    const router = useRouter()
    const changelang = (e: any) => {
        router.replace(pathname, { locale: `${e}` })
    }

    useEffect(() => {
        scrollTo({ behavior: 'smooth', top: 0 })
    }, [])
    return (
        <header className='animate__animated animate__zoomInDown'>
            <HeaderContact />
            <div className='flex justify-between items-center px-[35px] md:px-[16px]'>
                <Image src={logo.src} alt='logo' width={125} height={125} className={`cursor-pointer lg:w-[100px] smd:w-[80px]`} />
                <aside className='flex items-center gap-[34px] lg:gap-[25px] smd:gap-[16px]'>
                    <Dropdown isOpen={open} onOpenChange={(e) => setOpen(e)} className='dropdown min-w-[100px]' >
                        <DropdownTrigger>
                            <div className='flex items-center cursor-pointer'>
                                <Image src={earth.src} alt='earth' width={60} height={60} className='lg:w-[45px] smd:w-[40px]' />
                                <Image src={arrow.src} className={`${open ? '-rotate-180 duration-300' : 'rotate-0 duration-300'} lg:w-[30px]`} alt='logo' width={44} height={44} />
                            </div>
                        </DropdownTrigger>
                        <DropdownMenu className='text-center'>
                            <DropdownItem
                                key="en"
                                className={locale === 'en' ? 'green' : ''}
                                onClick={() => changelang('en')}
                            >
                                English
                            </DropdownItem>
                            <DropdownItem
                                key="ru"
                                className={locale === 'ru' ? 'green' : ''}
                                onClick={() => changelang('ru')}
                            >
                                Russian
                            </DropdownItem>
                            <DropdownItem
                                key="tu"
                                className={locale === 'tu' ? 'green' : ''}
                                onClick={() => changelang('tu')}
                            >
                                Turkey
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <div className={`w-[52px] h-[40px] lg:w-[40px] lg:h-[30px] smd:h-[25px] smd:w-[35px] cursor-pointer flex flex-col justify-between  duration-400 ${drawer && 'absolute right-[35px] md:right-[16px] !z-[100001]'}`} onClick={() => setDrawer(!drawer)}>
                        <span className={`w-full h-[8px] lg:h-[6px] duration-400 smd:h-[5px] rounded-full bg-green ${drawer && 'rotate-45 translate-y-[200%]'} m-0`} />
                        <span className={`w-full duration-300 h-[8px] lg:h-[6px] smd:h-[5px] rounded-full bg-green ${drawer && 'opacity-0'} m-0`} />
                        <span className={`w-full h-[8px] lg:h-[6px] duration-400 smd:h-[5px] rounded-full bg-green ${drawer && "-rotate-45 translate-y-[-200%]"} m-0`} />
                    </div>
                    <div className={drawer ? "w-[52px] lg:w-[40px] smd:w-[35px]" : "hidden"} />
                </aside>
                <Drawer open={drawer} setOpen={setDrawer} pathname={pathname} locale={locale} />
            </div >
        </header>
    )
}

export default Header