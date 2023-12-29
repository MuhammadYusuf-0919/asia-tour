'use client'
import img from '@/assets/notFound.jpg'
import Image from 'next/image'
import Link from 'next/link'
const NotFound = () => {
    return (
        <div className='flex flex-col gap-[20px] justify-center items-center w-full h-[90vh]'>
            <Image width={500} height={500} className='w-max animate__animated animate__zoomInDown ' src={img.src} alt='not found image' />
            <Link href='/' className='text-[24px] sm:text-[18px] animate__animated animate__heartBeat animate__infinite infinite text-green'>Go Home Page</Link>
        </div>
    )
}

export default NotFound