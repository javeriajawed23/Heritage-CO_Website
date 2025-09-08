import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col justify-around gap-12 py-8 text-xs text-center text-gray-700 sm:flex-row sm:gap-2 sm:text-sm md:text-base'>
      
      {/* Easy Returns & Exchanges */}
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-3' alt="Easy Returns & Exchange" />
        <p className='mb-2 font-semibold'>Hassle-Free Returns & Exchanges</p>
        <p className='text-gray-400'>
          Enjoy easy returns or exchanges within 10 days of purchase for a seamless shopping experience.
        </p>
      </div>

      {/* Premium Quality */}
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-3' alt="Premium Quality" />
        <p className='mb-2 font-semibold'>Premium Quality Guarantee</p>
        <p className='text-gray-400'>
          Heritage & Co. delivers only the finest products crafted with attention to detail and quality.
        </p>
      </div>

      {/* Customer Support */}
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-3' alt="Customer Support" />
        <p className='mb-2 font-semibold'>Dedicated Customer Support</p>
        <p className='text-gray-400'>
          Our friendly support team is available via email, phone, or chat to assist you anytime.
        </p>
      </div>

    </div>
  )
}

export default OurPolicy
