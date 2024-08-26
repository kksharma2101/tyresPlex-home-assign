import React from 'react'
import { AiOutlineStar } from 'react-icons/ai';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

const StarsReview = () => {
    const rating = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        let val = 3;
        return (
            <span key={index} >
                {
                    val >= index + 1 ? (<FaStar className='text-yellow-400' />) : (val >= number ? (<FaStarHalfAlt className='text-yellow-400' />) : <AiOutlineStar className='text-yellow-400' />)
                }
            </span>
        )
    })

    return (
        <div className='flex items-baseline justify-start gap-2 w-full pt-3'>
            {rating}
            <p className='underline'>234 Review</p>
        </div>
    )
}

export default StarsReview