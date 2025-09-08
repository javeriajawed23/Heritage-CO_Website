import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod')
  const { navigate } = useContext(ShopContext)

  return (
    <div className='flex flex-col sm:flex-row sm:gap-10 pt-28 px-6 sm:px-20 min-h-[90vh]'>
      
      {/* Left Side - Delivery Info */}
      <div className='flex flex-col w-full sm:w-2/3 gap-6'>
        <Title text1="DELIVERY" text2="INFORMATION" />

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <input 
            className='w-full px-4 py-3 border border-[#611627] rounded text-[#4B0E1C]' 
            type="text" 
            placeholder='First Name' 
          />
          <input 
            className='w-full px-4 py-3 border border-[#611627] rounded text-[#4B0E1C]' 
            type="text" 
            placeholder='Last Name' 
          />
        </div>

        <input 
          className='w-full px-4 py-3 border border-[#611627] rounded text-[#4B0E1C]' 
          type="email" 
          placeholder='Email Address' 
        />
        <input 
          className='w-full px-4 py-3 border border-[#611627] rounded text-[#4B0E1C]' 
          type="text" 
          placeholder='Street' 
        />

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <input 
            className='w-full px-4 py-3 border border-[#611627] rounded text-[#4B0E1C]' 
            type="text" 
            placeholder='City' 
          />
          <input 
            className='w-full px-4 py-3 border border-[#611627] rounded text-[#4B0E1C]' 
            type="text" 
            placeholder='State' 
          />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <input 
            className='w-full px-4 py-3 border border-[#611627] rounded text-[#4B0E1C]' 
            type="number" 
            placeholder='Zip Code' 
          />
          <input 
            className='w-full px-4 py-3 border border-[#611627] rounded text-[#4B0E1C]' 
            type="text" 
            placeholder='Country' 
          />
        </div>

        <input 
          className='w-full px-4 py-3 border border-[#611627] rounded text-[#4B0E1C]' 
          type="number" 
          placeholder='Mobile' 
        />
      </div>

      {/* Right Side - Order Summary + Payment */}
      <div className='w-full sm:w-1/3 mt-10 sm:mt-0 flex flex-col gap-8'>
        <div className='border p-4 rounded-lg shadow'>
          <CartTotal />
        </div>

        <div className='border p-4 rounded-lg shadow flex flex-col gap-4'>
          <Title text1="PAYMENT" text2="METHODS" />

          <div className='flex flex-col gap-3'>
            <div onClick={() => setMethod('stripe')} className={`flex items-center gap-3 p-3 border rounded cursor-pointer ${method==='stripe' ? 'border-[#611627]' : ''}`}>
              <p className={`w-3 h-3 rounded-full border ${method==='stripe' ? 'bg-[#611627]' : ''}`}></p>
              <img src={assets.stripe_logo} alt="Stripe" className='h-5'/>
            </div>

            <div onClick={() => setMethod('razorpay')} className={`flex items-center gap-3 p-3 border rounded cursor-pointer ${method==='razorpay' ? 'border-[#611627]' : ''}`}>
              <p className={`w-3 h-3 rounded-full border ${method==='razorpay' ? 'bg-[#611627]' : ''}`}></p>
              <img src={assets.razorpay_logo} alt="Razorpay" className='h-5'/>
            </div>

            <div onClick={() => setMethod('cod')} className={`flex items-center gap-3 p-3 border rounded cursor-pointer ${method==='cod' ? 'border-[#611627]' : ''}`}>
              <p className={`w-3 h-3 rounded-full border ${method==='cod' ? 'bg-[#611627]' : ''}`}></p>
              <p className='text-[#4B0E1C] font-medium'>CASH ON DELIVERY</p>
            </div>
          </div>

          <button 
            onClick={() => navigate('/orders')}
            className='mt-4 w-full px-4 py-3 text-white bg-[#611627] rounded hover:bg-[#4B0E1C] transition'>
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
