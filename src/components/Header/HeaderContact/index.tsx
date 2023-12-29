import phone from '@/assets/headerContact/phone.png'
import email from '@/assets/headerContact/email.png'
import whatsapp from '@/assets/header/whatsapp.png'
import face from '@/assets/headerContact/face.png'
import tg from '@/assets/headerContact/tg.png'
import insta from '@/assets/headerContact/insta.png'
import youtube from '@/assets/headerContact/youtube.png'
import Image from 'next/image'
const HeaderContact = () => {
    return (
        <div className='flex smd:flex-col container text-[white] smd:gap-[16px] justify-between py-[33px] md:py-[16px] bg-[#212121]'>
            <div className='flex items-center gap-[50px] lg:gap-[25px] sm:gap-[10px] smd:justify-between sm:flex-col sm:items-start'>
                <a href='tel: +998999999999' className='flex items-center gap-[10px] lg:gap-[5px] group'>
                    <Image src={phone.src} alt='phone' width={35} height={35} className='lg:w-[30px] md:w-[25px] smd:w-[20px] animate__tada animate__animated animate__infinite infinite animate__slow ' />
                    <p className='text-[24px] lg:text-[20px] smd:text-[16px]'>+998 99 999 99 99</p>
                </a>
                <a href='mailto: alpertungotour@gmail.com' className='flex items-center gap-[10px] lg:gap-[5px]'>
                    <Image src={email.src} alt='phone' width={35} height={35} className='lg:w-[30px] md:w-[25px] smd:w-[20px]  animate__tada animate__animated animate__infinite infinite animate__slow ' />
                    <p className='text-[24px] lg:text-[20px] smd:text-[16px]'>alpertungotour@gmail.com</p>
                </a>
            </div>
            <div className='flex gap-[12px] smd:justify-end'>
                <a href="https://facebook.com" target='_blank'>
                    <Image src={face.src} alt='phone' width={35} height={35} className='lg:w-[30px] md:w-[25px]  animate__tada animate__animated animate__infinite infinite animate__slow ' />
                </a>
                <a href="https://whatsapp.com" target='_blank'>
                    <Image src={whatsapp.src} alt='phone' width={35} height={35} className='lg:w-[30px] md:w-[25px]  animate__tada animate__animated animate__infinite infinite animate__slow ' />
                </a>
                <a href="https://instagramm.com" target='_blank'>
                    <Image src={insta.src} alt='phone' width={35} height={35} className='lg:w-[30px] md:w-[25px]  animate__tada animate__animated animate__infinite infinite animate__slow ' />
                </a>
                <a href="https://telegram.com" target='_blank'>
                    <Image src={tg.src} alt='phone' width={35} height={35} className='lg:w-[30px] md:w-[25px]  animate__tada animate__animated animate__infinite infinite animate__slow ' />
                </a>
                <a href="https://youtube.com" target='_blank'>
                    <Image src={youtube.src} alt='phone' width={35} height={35} className='lg:w-[30px] md:w-[25px]  animate__tada animate__animated animate__infinite infinite animate__slow ' />
                </a>
            </div>
        </div>
    )
}

export default HeaderContact