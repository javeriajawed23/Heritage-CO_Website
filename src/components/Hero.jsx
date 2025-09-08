import React from 'react'
import { assets } from '../assets/assets'

const Hero = ({
  headingColor = '#E9C8C2',
  subheadingColor = '#FBECEC',
  accentColor = '#611627'
}) => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero left side */}
      <div className='flex items-center justify-center w-full py-10 sm:w-1/2 sm:py-0'>
        <div>
          {/* Top small text */}
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px]' style={{ backgroundColor: accentColor }}></p>
            <p className='text-sm font-medium md:text-base' style={{ color: accentColor }}>
              OUR BEST SELLERS
            </p>
          </div>

          {/* Main Heading */}
          <h1
            className='text-3xl leading-relaxed sm:py-3 lg:text-5xl prata-regular'
            style={{ color: headingColor }}
          >
            Latest Arrivals
          </h1>

          {/* Bottom small text */}
          <div className='flex items-center gap-2'>
            <p className='text-sm font-semibold md:text-base' style={{ color: accentColor }}>
              SHOP NOW
            </p>
            <p className='w-8 md:w-11 h-[1px]' style={{ backgroundColor: accentColor }}></p>
          </div>
        </div>
      </div>

      {/* Hero right side */}
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="Hero Image" />
    </div>
  )
}

export default Hero
