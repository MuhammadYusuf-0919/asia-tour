'use client'
import Image from 'next/image'
import { FC, useState } from 'react'

interface Props {
    url: string,
    fill?: boolean,
    alt: string
}
const CustomeImage: FC<Props> = ({ url, fill, alt }) => {
    const [loading, setLoading] = useState(true)
    return (
        <>
            {fill ?
                <Image src={url} alt={alt} fill className={`object-cover duration-700 ease-in-out group-hover:scale-110 ${loading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}`} onLoadingComplete={() => setLoading(false)} /> : ''}
        </>
    )
}

export default CustomeImage