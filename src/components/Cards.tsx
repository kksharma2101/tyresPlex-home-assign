import React from 'react'

const Cards = () => {
    return (
        <div className='w-full flex flex-wrap items-center justify-center gap-3  p-2 my-2'>
            <div className="max-w-80 max-h-48 p-3 rounded-md shadow-inner border my-3">
                <div className="flex items-center gap-3">
                    <span className='bg-blue-500 text-white px-3 py-2 font-bold rounded-full'>J</span>
                    <span>J. sharam</span>
                </div>
                <p className="flex flex-wrap mt-3 px-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, molestiae.</p>
            </div>

            <div className="max-w-80 max-h-48 p-3 rounded-md shadow-inner border my-3">
                <div className="flex items-center gap-3">
                    <span className='bg-blue-500 text-white px-3 py-2 font-bold rounded-full'>T</span>
                    <span>Rohit Bhati</span>
                </div>
                <p className="flex flex-wrap mt-3 px-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, molestiae.</p>
            </div>

            <div className="max-w-80 max-h-48 p-3 rounded-md shadow-inner border my-3">
                <div className="flex items-center gap-3">
                    <span className='bg-blue-500 text-white px-3 py-2 font-bold rounded-full'>P</span>
                    <span>Pradeep Kumar</span>
                </div>
                <p className="flex flex-wrap mt-3 px-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, molestiae.</p>
            </div>
        </div>
    )
}

export default Cards