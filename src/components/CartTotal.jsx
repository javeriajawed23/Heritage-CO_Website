import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  const subTotal = getCartAmount();
  const totalAmount = subTotal + delivery_fee;

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg p-6 border border-[#E9C8C2]">
      {/* Heading */}
      <div className="mb-6">
        <Title text1="CART" text2="TOTAL" />
      </div>

      {/* Sub Total */}
      <div className="flex justify-between items-center mb-3">
        <p className="text-lg font-medium text-gray-700">Sub Total</p>
        <p className="text-lg font-medium text-gray-700">
          {currency}&nbsp;{subTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </div>

      <hr className="border-gray-200 mb-3" />

      {/* Shipping Fee */}
      <div className="flex justify-between items-center mb-3">
        <p className="text-lg font-medium text-gray-700">Shipping Fee</p>
        <p className="text-lg font-medium text-gray-700">
          {currency}&nbsp;{delivery_fee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </div>

      <hr className="border-gray-200 mb-4" />

      {/* Total Amount */}
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold text-[#611627]">Total Amount</p>
        <p className="text-2xl font-semibold text-[#611627]">
          {currency}&nbsp;{subTotal === 0 ? 0 : totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </div>
    </div>
  )
}

export default CartTotal
