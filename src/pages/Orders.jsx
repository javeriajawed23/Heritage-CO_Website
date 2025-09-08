import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {

  const {products, currency} = useContext(ShopContext);

  return (
    <div className='pt-24 px-6 md:px-20'>
      {/* Page Title */}
      <div className='text-center mb-12'>
        <h1 className='text-4xl md:text-5xl font-[Playfair_Display] font-bold text-[#4B0E1C] tracking-wide'>
          YOUR ORDERS
        </h1>
        <p className='w-full md:w-2/3 mx-auto mt-2 text-[#611627] text-lg'>
          Here’s a summary of your recent purchases and their statuses.
        </p>
        <div className='w-24 h-1 bg-[#E9C8C2] mt-4 mx-auto rounded-full'></div>
      </div>

      {/* Orders List */}
      <div className='flex flex-col gap-6'>
        {products.slice(1, 4).map((item, index) => (
          <div key={index} className='flex flex-col gap-4 py-4 border-t border-b md:flex-row md:items-center md:justify-between'>
            
            {/* Product Info */}
            <div className='flex items-start gap-6 text-sm'>
              <img className='w-16 sm:w-20 rounded-md' src={item.image[0]} alt="Photo" />
              <div>
                <p className='font-semibold text-[#4B0E1C] sm:text-base'>{item.name}</p>
                <div className='flex items-center gap-3 mt-2 text-base text-[#611627]'>
                  <p className='text-lg'>{currency}&nbsp;{item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  <p>Quantity:&nbsp;1</p>
                  <p>Size:&nbsp;M</p>
                </div>
                <p className='mt-2 text-[#83162d]'>Date:&nbsp;<span className='text-[#A54B63]'>25 JUL 2024</span></p>
              </div>
            </div>

            {/* Order Status */}
            <div className='flex justify-between md:w-1/2 items-center'>
              <div className='flex items-center gap-2'>
                <p className='h-2 w-2 bg-green-500 rounded-full'></p>
                <p className='text-sm md:text-base text-[#611627]'>Ready for Shipping</p>
              </div>
              <button className='px-4 py-2 text-sm font-medium border border-[#611627] rounded-sm text-[#611627] hover:bg-[#611627] hover:text-white transition'>
                TRACK ORDER
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
