import React from 'react'
import { IoIosCheckmark } from "react-icons/io";
import StarsReview from './StarsReview';
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import Cards from './Cards';


export const DealersDetails = () => {
    return (
        <>
            <div className='mx-2 p-2 lg:mx-4 lg:p-3 shadow-inner border'>
                {/* dealers informations */}
                <div className=" lg:flex justify-between">
                    <div className="">
                        {/* dealer name */}
                        <div className="flex items-baseline justify-between">
                            <h2 className="uppercase font-bold">shree hemkunt tyres and <br /> services</h2>
                            <span className='text-green-400 flex items-center'>
                                <IoIosCheckmark className='text-white rounded-md mx-1 bg-green-500' />
                                Verified</span>
                        </div>

                        {/* rating container */}
                        <div>
                            <StarsReview />
                        </div>

                        {/* address and location */}
                        <div className='flex items-center gap-3'>
                            <CiLocationOn className='size-8' />
                            <p className="uppercase text-xs pt-3">plot number-09 ground floor cisf campus road, ahinsa khand-02 indirapuram, Ghaziabad, Uttar Pradesh, 201014</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <CiClock2 className='size-5' />
                            <p className="text-sm pt-3">Open - Monday  to  Sunday - 10:00AM to 8:00PM</p>
                        </div>

                        {/* get direction button */}
                        <button className="border-1 rounded-md border-red-500 text-red-500 py-2 lg:py-3 px-5 text-lg font-bold mt-4">Get Directions</button>
                    </div>

                    {/* shop images */}
                    <div className='flex justify-center flex-col pt-6 lg:px-5'>
                        <img src="shop-image.jpg" alt="shop" className='rounded-md' />
                    </div>
                </div>

                {/* review cards */}
                <p className="font-bold my-3">3201 Google Review</p>
                <Cards />
            </div>
        </>
    )
}

// export default DealersDetails