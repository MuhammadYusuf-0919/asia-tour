'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import logo from '@/assets/header/logo.png'
import arrow from '@/assets/header/arrow.png'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/navigation'
import HeaderContact from './HeaderContact'
import dynamic from 'next/dynamic'
import { links } from '@/useIt/links'
import Link from 'next/link'
import { scrollToElement } from '@/useIt/scroll'
const Drawer = dynamic(() => import('./Drawer'), { ssr: false })

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
        <header className='animate__animated animate__zoomInDown animate__slow'>
            <HeaderContact />
            <div className='flex justify-between items-center px-[35px] md:px-[16px]'>
                <Image src={logo.src} alt='logo' width={200} height={160} className={`cursor-pointer lg:w-[150px] smd:w-[100px]`} />
                <aside className='flex items-center gap-[34px] lg:gap-[25px] smd:gap-[16px]'>
                    <div className='flex gap-[45px] md:gap-[30px] smd:hidden'>
                        {links.map(l => (
                            l.href.includes('#') ? <button key={l.name}
                                onClick={() => scrollToElement(l.href.slice(1))}
                                className={`cursor-pointer text-[24px] md:text-[20px] hover:text-green`}>{l.name}</button> :
                                <Link key={l.href} href={l.href} locale={locale} className={`text-[24px] md:text-[20px] hover:text-green duration-400 p-[5px] pb-0 ${pathname === l.href && 'border-b-[2px] border-green'}`}>
                                    {l.name}
                                </Link>
                        ))}
                    </div>
                    <Dropdown isOpen={open} onOpenChange={(e) => setOpen(e)} className='dropdown min-w-[100px]' >
                        <DropdownTrigger>
                            <Button variant='bordered' className='border-green capitalize flex items-center cursor-pointer text-[24px] md:text-[20px] sm:text-[16px] text-[#888] gap-0'>
                                {locale}
                                <Image src={arrow.src} className={`${open ? '-rotate-180 duration-300' : 'rotate-0 duration-300'} mb-[-5px]`} alt='logo' width={20} height={20} />
                            </Button>
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
                                key="tu"
                                className={locale === 'tu' ? 'green' : ''}
                                onClick={() => changelang('tu')}
                            >
                                Turkey
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <div className={`h-[25px] w-[35px] cursor-pointer hidden smd:flex flex-col justify-between`} onClick={() => setDrawer(!drawer)}>
                        <span className={`w-full h-[5px] rounded-full bg-green m-0`} />
                        <span className={`w-full h-[5px] rounded-full bg-green m-0`} />
                        <span className={`w-full h-[5px] rounded-full bg-green m-0`} />
                    </div>
                </aside>
                <Drawer open={drawer} setOpen={setDrawer} pathname={pathname} locale={locale} />
            </div >
        </header>
    )
}

export default Header