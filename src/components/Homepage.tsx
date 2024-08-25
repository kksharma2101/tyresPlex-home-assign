'use client'

import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import PopularTyresBrand from './PopularTyresBrand';

const Homepage = () => {
    const [findTyre, setFindTyre] = useState(false)

    const handleDropDown = () => {
        if (findTyre == false) {
            setFindTyre(true)
        } else
            setFindTyre(false)
    }

    return (
        <>
            {/* find tyre by the categories */}
            <div className='px-2 w-full'>
                <img src="hm-banner-new.webp" alt="Banner" className=' h-full w-full lg:h-96' />

                <div className="absolute -top-[100%] w-[42%] h-56 lg:h-80 md:top-16 md:left-10 lg:top-24 lg:left-16">
                    <div className="bg-white flex items-center justify-between px-2 w-full rounded-t-md">
                        <p className="font-bold text-xl lg:text-2xl xl:text-3xl xl:font-extrabold">Find The Right Tyre</p>
                        {
                            findTyre == true ? <FaAngleUp className="size-6 xl:size-10" onClick={handleDropDown} /> : <FaAngleDown className="size-6 xl:size-10" onClick={handleDropDown} />
                        }
                    </div>
                    <div className={findTyre == true ? "w-full flex items-start flex-col justify-center gap-2 bg-white px-2 py-2" : "hidden"}>
                        <div className="flex items-center justify-start gap-2 w-full">
                            <button className="p-2 font-normal border rounded-md bg-black text-white">By Vehicle</button>
                            <button className="p-2 font-normal border opacity-70 rounded-md">By Size</button>
                            <button className="p-2 font-normal border opacity-70 rounded-md">By Vehicle Number</button>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className='text-red-500'>CAR</p>
                            <p className='opacity-70 '>BIKE</p>
                        </div>
                        <div className="w-full px-2 flex items-center flex-col justify-center gap-2">
                            {/* <label>Choose Brand</label> */}
                            <select className='w-full border px-1 py-2' name="fruit">
                                <option value="apple">Choose Brand</option>
                                <option value="apple">Maruti Suzki</option>
                                <option value="banana">Kia</option>
                                <option value="orange">Thar</option>
                                <option value="grape">Altos</option>
                            </select>
                            <select className='w-full border px-1 py-2' name="fruit">
                                <option value="apple">Choose Model</option>
                                <option value="apple">Yaris</option>
                                <option value="banana">Fortuner new</option>
                                <option value="orange">Innova</option>
                                <option value="grape">Urban Cruiser</option>
                            </select>
                            <select className='w-full border px-1 py-2' name="fruit">
                                <option value="apple">Choose Variant</option>
                                <option value="apple">Maruti Suzki</option>
                                <option value="banana">Kia</option>
                                <option value="orange">Thar</option>
                                <option value="grape">Altos</option>
                            </select>
                        </div>
                        <button className="w-full bg-red-600 rounded-lg text-white mx-auto py-2">Search</button>
                    </div>
                </div>
            </div>

            {/* import popular tyre brand component */}
            <PopularTyresBrand />
        </>
    )
}

export default Homepage