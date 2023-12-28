import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Slider from '@/components/Slider'
import Tabs from '@/components/Tabs'
import { useTranslations } from 'next-intl'
import React from 'react'

const Tours = () => {
    const t = useTranslations('tours')
    const f = useTranslations('footer')
    const tours = [
        {
            name: f('Adventure'),
            href: '/adventure'
        },
        {
            name: f('Couple'),
            href: '/couple'
        },
        {
            name: f("Family"),
            href: '/family'
        }
    ]
    return (
        <div>
            <Header />
            <Slider />
            <Tabs
                info={t('Information')}
                tourG={t('Tour galery')}
                location={t('Location')}
                popP={t('Popular places')}
                Cities={t('Cities')}
                Nights={t('Nights')}
                Hotels={t('Hotels')}
            />
            <Footer
                follow={f('Follow us on')}
                linkss={f('Links')}
                Home={f('Home')}
                Contact={f('Contact')}
                Tours={f('Tours')}
                tourType={f('Tour Type')}
                contactUs={f('Contact us')}
                copy={f('Copyright 2020 2023 by Alper Tungo Tour')}
                tours={tours}
                tour={f('tour')}
            />
        </div>
    )
}

export default Tours