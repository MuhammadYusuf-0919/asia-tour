import React from 'react'
import Image from 'next/image'
import logo from '@/assets/header/logo.png'
import earth from '@/assets/header/lang.png'
import whatsapp from '@/assets/header/whatsapp.png'
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'

const Header = () => {
    return (
        <header className='container flex justify-between items-center animate__animated animate__zoomInDown'>
            <Image src={logo.src} alt='logo' width={125} height={125} />
            <aside className='flex items-center gap-[34px]'>
                <a href="https://youtube.com" target='_blank'>
                    <Image src={whatsapp.src} alt='logo' width={52} height={52} />
                </a>
                <Dropdown>
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            src={earth.src}
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="new">New file</DropdownItem>
                        <DropdownItem key="copy">Copy link</DropdownItem>
                        <DropdownItem key="edit">Edit file</DropdownItem>
                        <DropdownItem key="delete" className="text-danger" color="danger">
                            Delete file
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <div className='w-[52px] h-[40px] cursor-pointer flex flex-col justify-between'>
                    <span className=' w-full h-[8px] rounded-full bg-green' />
                    <span className=' w-full h-[8px] rounded-full bg-green' />
                    <span className=' w-full h-[8px] rounded-full bg-green' />
                </div>
            </aside>
        </header>
    )
}

export default Header