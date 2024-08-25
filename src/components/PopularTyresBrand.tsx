import React from 'react'

const PopularTyresBrand = () => {
    return (
        <div className='px-2'>
            <div className="bg-white shadow-inner mt-2 border p-2">
                <span className="font-bold text-black text-xl">Popular Tyre Brands</span>

                <div className="flex items-center flex-wrap justify-center gap-3 mt-4 px-3">

                    <div className="cursor-pointer h-28 flex flex-col justify-center items-center shadow-inner p-4 border w-40 rounded-md">
                        <img src="jk-tyre.jfif" alt="JK Tyre" width={100} height={100} />
                        <span>Jk Tyre</span>
                    </div>

                    <div className="cursor-pointer h-28 flex flex-col justify-center items-center shadow-inner p-4 border w-40 rounded-md">
                        <img src="ceat.jpg" alt="Ceat Tyre" width={50} />
                        <span>Ceat Tyre</span>
                    </div>

                    <div className="cursor-pointer h-28 flex flex-col justify-center items-center shadow-inner p-4 border w-40 rounded-md">
                        <img src="apollo.jpg" alt="apollo Tyre" width={50} />
                        <span>Apollo Tyre</span>
                    </div>

                    <div className="cursor-pointer h-28 gap-2 flex flex-col justify-center items-center shadow-inner p-4 border w-40 rounded-md">
                        <img src="mrf.jfif" alt="Mrf Tyre" width={100} />
                        <span>MRF Tyre</span>
                    </div>

                    <div className="cursor-pointer h-28 flex flex-col justify-center items-center shadow-inner p-4 border w-40 rounded-md">
                        <img src="goodyear.jfif" alt="Goodyear Tyre" width={80} />
                        <span>Goodyear Tyre</span>
                    </div>

                </div>

                <div className="flex items-center justify-center gap-1 mt-6 text-xs md:text-sm">
                    <a href="#" className='no-underline'>Car Tyres</a>|
                    <a href="#" className='no-underline'>Bike Tyres</a>|
                    <a href="#" className='no-underline'>Scooter Tyres</a>|
                    <a href="#" className='no-underline'>Commercial Tyres</a>
                </div>
            </div>
        </div>
    )
}

export default PopularTyresBrand