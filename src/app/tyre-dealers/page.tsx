import { DealersDetails } from '@/components/DealersDetails'
import PopularTyresBrand from '@/components/PopularTyresBrandCard'
import React from 'react'


export default function page() {
    return (
        <div>
            <DealersDetails />

            <PopularTyresBrand headingtext='Deals in' className='flex items-center justify-center gap-1 mt-6 text-xs md:text-sm' />
        </div>
    )
}
