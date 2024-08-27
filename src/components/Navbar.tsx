'use client'
import React, { useEffect, useState } from 'react'
// import { IoIosContact } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { HiOutlineLogout } from "react-icons/hi";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [toggleActive, setToggleInactive] = useState(false);

    const handleToggle = () => {
        if (toggleActive == false) {
            setToggleInactive(true)
        } else
            setToggleInactive(false)
    }

    return (
        <div className="fixed z-50 w-full">
            {/* Navbar */}
            <nav className="w-full flex items-center justify-between border-b-2 border-2 py-3 lg:px-4 bg-white">
                <a href="/">
                    <Image src="TP-logo.webp" alt="logo" className='' />
                </a>

                <ul className={toggleActive == true ? "fixed flex flex-col justify-center items-center gap-2 top-14 bg-black text-white mx-auto py-2 w-[95%] sm:w-[97%] md:w-[98%] font-extrabold z-50 lg:hidden" : "hidden"}>
                    <li className="cursor-pointer hover:text-blue-600">
                        Car Tyers
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        Bike Tyers
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        Tyres Pressure
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        Commercial Tyres
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        Accessories
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        More
                    </li>
                    <li className='cursor-pointer hover:text-blue-600'>
                        Login
                    </li>
                </ul>

                <ul className="hidden font-bold lg:flex justify-around gap-4">
                    <li>
                        <Link href={'tyre-dealers'} className="cursor-pointe no-underline">Dealers page</Link>
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        Car
                        <br />
                        Tyres
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        Bike
                        <br />
                        Tyers
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        Tyres
                        <br />
                        Pressure
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        Commercial
                        <br />
                        Tyres
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        Accessories
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        More
                    </li>
                    <div className="cursor-pointer ml-4 flex items-center font-bold gap-1 hover:text-blue-600">
                        <HiOutlineLogout />
                        <span>
                            Login
                        </span>
                    </div>
                </ul>

                <div className="m-1 lg:hidden cursor-pointer">
                    {
                        toggleActive == true ?
                            <ImCross onClick={handleToggle} /> :
                            <GiHamburgerMenu onClick={handleToggle} height={100} />
                    }
                </div>
            </nav >

        </div >
    )
}

export default Navbar