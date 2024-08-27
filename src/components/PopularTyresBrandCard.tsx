'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const companiesData = [
    {
        "id": "1",
        "name": "MRF",
        "img": "mrf.jfif"
    },
    {
        "id": "2",
        "name": "CEAT",
        "img": "ceat.jpg"
    },
    {
        "id": "3",
        "name": "Goodyear",
        "img": "goodyear.jfif"
    },
    {
        "id": "4",
        "name": "Apollo",
        "img": "apollo.jpg"
    },
    {
        "id": "5",
        "name": "JK Tyre",
        "img": "jk-tyre.jfif"
    }
]

type propsType = {
    headingtext: string,
    className: string,
}

const PopularTyresBrand = (props: propsType) => {
    return (
        <div className='px-2'>

            <div className="bg-white shadow-inner mt-3 border p-2">
                <span className="font-bold text-black text-xl">{props.headingtext}</span>

                <div className="flex items-center flex-wrap justify-center gap-3 my-3 px-3">
                    {
                        companiesData.map((item) => (
                            <div className="cursor-pointer h-28 flex flex-col justify-center items-center shadow-inner p-4 border w-40 rounded-md gap-3">
                                <img src={item.img} alt="JK Tyre" width={60} />
                                <span className='text-xs opacity-40'>{item.name}</span>
                            </div>
                        ))
                    }
                </div>
                {/* Brand links */}
                <div className={props.className}>
                    <Link href="#" className='no-underline hover:text-blue-500'>Car Tyres</Link>|
                    <Link href="#" className='no-underline hover:text-blue-500'>Bike Tyres</Link>|
                    <Link href="#" className='no-underline hover:text-blue-500'>Scooter Tyres</Link>|
                    <Link href="#" className='no-underline hover:text-blue-500'>Commercial Tyres</Link>
                </div>
            </div>
        </div>
    )
}

export default PopularTyresBrand