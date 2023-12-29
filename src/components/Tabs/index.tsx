'use client'
import { Tab, Tabs } from '@nextui-org/react'
import React, { useState } from 'react'
import { data } from './data'
import Image from 'next/image'
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import { Fade, Slide } from 'react-awesome-reveal'
import { useTranslations } from 'next-intl'

const TourTabs = () => {
    const [tab, setTab] = useState(data[0])

    const t = useTranslations('tours')

    const defaultState = {
        center: [tab.loc.long, tab.loc.lat],
        zoom: 15,
    };

    return (
        <Slide triggerOnce direction='up'>
            <div className='px-[123px] 2xl:px-[32px] sm:px-[16px] w-full flex flex-col gap-[36px] xl:gap-[20px]'>
                <h2 className='md:text-center'>{tab?.location}</h2>
                <div className='flex lg:flex-col-reverse lg:items-center gap-[60px] xl:gap-[40px]'>
                    <div className='smd:w-full'>
                        <Tabs
                            variant='light'
                            className='smd:w-full'
                            classNames={{
                                tabList: "gap-[45px] sm:gap-[10px] md:justify-between md:flex w-full  relative rounded-none p-0 border-b border-divider overflow-hidden",
                                cursor: "w-full !bg-green !h-[8px] !top-[60px] xl:!top-[50px] smd:!top-[40px] !z-[999] !shadow-[none]",
                                tab: "max-w-fit px-0 h-auto text-[32px] xl:text-[25px] smd:text-[20px] sm:text-[18px] !text-[#838383] pb-[10px]",
                                tabContent: "group-data-[selected=true]:text-green pb-[3px]",
                                panel: '!px-0 !pb-0 pt-[50px] md:!pt-[20px]'
                            }}
                        >
                            <Tab key="Information" title={t('Information')} className='bg-[transparent] !border-none' >
                                <Fade direction='left'>
                                    <table className='w-full p-0'>
                                        <thead className='border-[2.5px] border-gray'>
                                            <th className='border-[2.5px] border-gray text-[26px] text-gray text-left pl-[23px] sm:pl-[16px] py-[10px] xl:text-[20px] sm:text-[16px]'>{t("Cities")}</th>
                                            <th className='border-[2.5px] border-gray text-[26px] text-gray text-center py-[10px] xl:text-[20px] sm:text-[16px]'>{t("Nights")}</th>
                                            <th className='border-[2.5px] border-gray text-[26px] text-gray text-center py-[10px] xl:text-[20px] sm:text-[16px]'>{t("Hotels")}</th>
                                        </thead>
                                        <tbody>
                                            {tab.info.map((i, index) => (
                                                <tr key={index} className='border-[2.5px] border-gray'>
                                                    <td className='border-[2.5px] border-gray text-[26px] text-gray text-left pl-[23px] sm:pl-[16px] py-[10px] xl:text-[20px] sm:text-[16px]' >{i.city}</td>
                                                    <td className='border-[2.5px] border-gray text-[26px] text-gray text-center py-[10px] xl:text-[20px] sm:text-[16px]' >{i.nights}</td>
                                                    <td className='border-[2.5px] border-gray text-[26px] text-gray text-center py-[10px] xl:text-[20px] sm:text-[16px]' >{i.hotel}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </Fade>
                            </Tab>
                            <Tab key="Tour galery" title={t('Tour galery')}>
                                <div className='w-full smd:w-full grid grid-cols-2 gap-y-[15px] xl:gap-[15px] gap-x-[33px]'>
                                    {tab.galery.map(g => (
                                        <Fade key={g} direction='left'>
                                            <div className='w-full aspect-[5/3] overflow-hidden rounded-[5px]'>
                                                <Image src={g} width={250} height={150} alt='img' key={g} className='!w-full hover:scale-125 cursor-pointer duration-400 !object-contain !rounded-[5px]' loading='lazy' />
                                            </div>
                                        </Fade>
                                    ))}
                                </div>
                            </Tab>
                            <Tab key="Location" title={t('Location')}>
                                <Fade direction='left' className='xl:!animate-none'>
                                    <div className='w-[100%] aspect-[533/480]'>
                                        <YMaps>
                                            <Map state={defaultState} width='100%' height='100%'>
                                                <Placemark geometry={[tab.loc.long, tab.loc.lat]} />
                                            </Map>
                                        </YMaps>
                                    </div>
                                </Fade>
                            </Tab>
                        </Tabs>
                    </div>
                    <div className='w-[500px] smd:w-full translate-y-[117px] xl:translate-y-[103px] lg:translate-y-0 shadow-card h-max rounded-t-[10px]'>
                        <div className='px-[25px] sm:px-[10px] py-[16px] xl:py-[10px] bg-green rounded-t-[10px]'>
                            <h4 className='text-[white]'>{t('Popular places')}</h4>
                        </div>
                        <div className='flex flex-col gap-[25px] px-[25px] sm:px-[10px] pt-[25px] bg-[white] overflow-y-auto h-[410px] pb-[5px] xl:h-[360px] rounded-b-[10px] scrollbar'>
                            {data.map((d, index) => (
                                <div key={index} className={`flex gap-[23px] cursor-pointer hover:text-green duration-400 ${tab === d && 'text-green'}`} onClick={() => setTab(d)}>
                                    <Image src={d.img} width={100} height={80} loading='lazy' alt='img' className='rounded-[8px] xl:w-[80px]' />
                                    <div className='flex flex-col justify-between'>
                                        <h5 className='text-[24px] xl:text-[18px] sm:text-[16px] leading-7 sm:leading-5'>{d.location}</h5>
                                        <p className='sm:text-[14px]'>per person</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </Slide>
    )
}

export default TourTabs