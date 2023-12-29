import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Slider from '@/components/Slider'
import Tabs from '@/components/Tabs'
import Static from '@/components/static'
import Contact from '@/components/contact'
import Includes from '@/components/Includes'
import BestResults from '@/components/best-results'

const Tours = () => {
    return (
        <div className='flex flex-col gap-[115px] lg:gap-[80px] md:gap-[60px] smd:gap-[40px]'>
            <div>
                <Header />
                <Slider />
            </div>
            <div className='container-lg flex flex-col gap-[80px] lg:gap-[60px] md:gap-[40px] smd:gap-[20px]'>
                <Static />
                <div className='flex flex-col gap-[115px] lg:gap-[80px] md:gap-[60px] smd:gap-[40px]'>
                    <BestResults />
                    <Tabs />
                    <Includes />
                    <Contact />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Tours