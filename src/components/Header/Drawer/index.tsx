'use client'
import Image from 'next/image'
import logo from '@/assets/header/logo.png'
import Link from 'next/link'
import { links } from '@/useIt/links'
import { scrollToElement } from '@/useIt/scroll'
import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react'
interface thisProps {
    open: boolean,
    setOpen: (val: boolean) => void,
    pathname: string,
    locale: string
}
const Drawer = ({ open, setOpen, pathname, locale }: thisProps) => {
    const bodyRef = useRef(typeof window !== 'undefined' && window.document.querySelector('body'));

    useEffect(() => {
        const updatePageScroll = () => {
            if (typeof window !== 'undefined' && bodyRef.current) {
                if (open) {
                    bodyRef.current.style.overflow = 'hidden';
                } else {
                    bodyRef.current.style.overflow = '';
                }
            }
        };
        updatePageScroll();
    }, [open]);

    return ReactDOM.createPortal(
        <div id='drawer'>
            <div className={`fixed z-[0] w-screen bottom-0 h-screen duration-0 drawer 
             ${open ? 'backdrop-blur-lg opacity-100 z-[1000] ' : 'opacity-0'}`}
                onClick={() => setOpen(false)} />
            <div className={`fixed shadow-card w-[300px] p-[16px] max-w-full
             !z-[1000] !duration-400 ml-[-20px] h-[100vh] 
             top-0 right-0 flex  shadow-lg flex-col gap-[16px] items-center
             ${open ? 'translate-x-[0] duration-400' : 'translate-x-[300px]'} bg-[white] pt-[110px] 
             md:pt-[70px] smd:pt-[100px] sm:pt-[135px]`}>
                <div className={open ? 'w-full !z-[1000]' : 'hidden'}>
                    <div className='flex justify-between w-full'>
                        <Image src={logo.src} alt='logo' width={125} height={125} className='cursor-pointer lg:w-[100px]
            smd:w-[80px]' />
                        <div />
                    </div>
                    <div className='flex flex-col gap-[10px] items-center'>
                        {links.map(l => (
                            l.href === '#contact' ? <button key={l.name}
                                onClick={scrollToElement}
                                className='cursor-pointer text-[24px] hover:underline lg:text-[18px] smd:text-[16px]'>{l.name}</button> :
                                <Link onClick={() => setOpen(false)} href={`/${locale}/${l.href}`} locale={locale} key={l.name} className={`text-[24px] hover:underline ${pathname === l.href && 'text-green'}`}>
                                    {l.name}
                                </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div >,
        document.body
    )
}

export default Drawer