import Image from 'next/image'
import logo from '@/assets/header/logo.png'
import Link from 'next/link'
import { links } from '@/useIt/links'
import { scrollToElement } from '@/useIt/scroll'
interface thisProps {
    open: boolean,
    setOpen: (val: boolean) => void,
    pathname: string,
    locale: string
}
const Drawer = ({ open, setOpen, pathname, locale }: thisProps) => {
    return (
        <div className={`fixed w-[0] !overflow-hidden p-[16px] max-w-full z-[99] duration-400 ml-[-20px] h-[100vh] top-0 flex  shadow-lg flex-col gap-[16px] items-center opacity-0 ${open ? 'right-0 !w-[300px]  opacity-100' : 'right-[0]'} bg-[white] pt-[110px] md:pt-[70px] smd:pt-[100px] sm:pt-[135px]`}>
            <div className={open ? 'w-full z-[99]' : 'hidden'}>
                <div className='flex justify-between w-full'>
                    <Image src={logo.src} alt='logo' width={125} height={125} className='cursor-pointer lg:w-[100px]
            smd:w-[80px]' />
                    <div />
                </div>
                <div className='flex flex-col gap-[10px] items-center'>
                    {links.map(l => (
                        l.href === '#contact' ? <button key={l.name} onClick={scrollToElement} className='cursor-pointer text-[24px] lg:text-[18px] smd:text-[16px]'>{l.name}</button> : <Link onClick={() => setOpen(false)} href={`/${locale}/${l.href}`} locale={locale} key={l.name} className={`text-[24px] hover:underline ${pathname === l.href && 'text-green'}`}>
                            {l.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Drawer