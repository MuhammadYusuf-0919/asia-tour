'use client'
import { useTranslations } from 'next-intl'
import React from 'react'
import { Slide } from 'react-awesome-reveal'

const LastMin = () => {
    const t = useTranslations('home')
    return (
        <Slide direction='up' triggerOnce>
            <div className='w-full flex flex-col gap-[30px] md:gap-[20px] smd:gap-[16px]'>
                <h1 className='text-dark sm:text-[28px]'>{t("Last Minute Offers")}</h1>
                <p className='text-[24px] md:text-[20px] sm:text-[16px] max-w-[900px] w-[80%]'>{t('lastDes')}</p>
            </div>
        </Slide>
    )
}

export default LastMin