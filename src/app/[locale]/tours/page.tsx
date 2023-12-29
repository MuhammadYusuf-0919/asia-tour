import React from 'react'
import Tabs from '@/components/Tabs'
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
        <div>
            <Header />
            <Slider />
            <Static />
            <BestResults />
            <Tabs />
            <Includes />
            <Contact />
            <Footer />
        </div>
    )
}

export default Tours