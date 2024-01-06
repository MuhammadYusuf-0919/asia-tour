'use client'
import { Slide } from "react-awesome-reveal";
import { data } from "../BestTours/data";
import Card from "@/themes/Card";

import React from 'react'

const BestAbroadTours = ({ title, span }: { title: string, span: string }) => {
    return (
        <div className='flex flex-col gap-[50px] md:gap-[30px] sm:gap-[16px]'>
            <Slide direction="up" triggerOnce>
                <div className='flex flex-col items-start gap-0'>
                    <span>{span}</span>
                    <h2>{title}</h2>
                </div>
            </Slide>
            <div className='grid grid-cols-3 2xl:grid-cols-2 gap-[70px] lg:gap-[40px] md:gap-[32px] container smd:flex smd:flex-col sm:p-0'>
                {data.slice(0, 2).map((d, index) => (
                    <Slide key={index} direction='up' triggerOnce>
                        <Card d={d} />
                    </Slide>
                ))}
            </div>
        </div>
    )
}

export default BestAbroadTours
