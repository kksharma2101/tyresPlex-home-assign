import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-white shadow-inner mt-2 border p-2 mx-2'>
            <footer className='mx-auto w-full '>
                <div className='flex items-center justify-between'>
                    <img src="TP-logo.webp" alt="" width={70} />
                    <div className="flex gap-3">
                        <FaFacebookF className='cursor-pointer hover:text-blue-600' />
                        <FaInstagram className='cursor-pointer hover:text-blue-600' />
                    </div>
                </div>
                {/* <div> */}
                <ul className='w-full items-start p-1 py-3 md:flex gap-3 md:justify-center'>
                    <li className='cursor-pointer hover:text-blue-600 hover:underline'>Who We Are</li>
                    <li className='cursor-pointer hover:text-blue-600 hover:underline'>Are you a Tyre Dealer?</li>
                    <li className='cursor-pointer hover:text-blue-600 hover:underline'>Privacy Policy</li>
                    <li className='cursor-pointer hover:text-blue-600 hover:underline'>Terms of use</li>
                    <li className='cursor-pointer hover:text-blue-600 hover:underline'>Contact Us</li>
                    <li className='cursor-pointer hover:text-blue-600 hover:underline'>Career</li>
                    <li className='cursor-pointer hover:text-blue-600 hover:underline'>Shipping & Return Policy</li>
                </ul>
                {/* </div> */}
                <p className='text-xs text-center'>&copy; TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</p>
            </footer>
        </div>
    )
}

export default Footer