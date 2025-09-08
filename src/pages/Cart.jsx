import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const isCartEmpty = cartData.length === 0;

  return (
    <div className="bg-[#FAF8F7] min-h-screen">
      {/* Burgundy Header - directly under nav */}
      <div className="bg-[#4B0E1C] py-16 flex justify-center items-center mt-[80px] sm:mt-[80px]">
        <h1 className="text-white text-3xl sm:text-4xl font-semibold">YOUR CART</h1>
      </div>

      {/* Cart Layout */}
      <div className="px-4 sm:px-20 flex flex-col lg:flex-row gap-10 mt-10">
        {/* Left: Cart Items */}
        <div className="flex-1 space-y-6">
          {cartData.length === 0 ? (
            <p className="text-center text-[#4B0E1C] font-medium">Your cart is empty</p>
          ) : (
            cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id);

              return (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white rounded-2xl shadow-md border border-[#E9C8C2]"
                >
                  {/* Product Info */}
                  <div className="flex items-center gap-4 sm:gap-6 flex-1">
                    <img
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover"
                      src={productData.image[0]}
                      alt="Photo"
                    />
                    <div className="flex-1">
                      <p className="text-[#4B0E1C] font-semibold sm:text-lg">{productData.name}</p>
                      <div className="flex items-center gap-4 mt-1 text-sm sm:text-base">
                        <p className="font-medium">
                          {currency} {productData.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                        <p className="px-2 py-1 text-xs font-semibold border rounded-lg bg-[#FAF8F7] border-[#E9C8C2]">
                          {item.size}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quantity and Remove */}
                  <div className="flex items-center gap-4 mt-3 sm:mt-0">
                    <input
                      onChange={(e) =>
                        e.target.value === '' || e.target.value === '0'
                          ? null
                          : updateQuantity(item._id, item.size, Number(e.target.value))
                      }
                      className="w-16 px-2 py-1 text-center border rounded-lg border-[#E9C8C2] focus:ring-2 focus:ring-[#4B0E1C] outline-none"
                      type="number"
                      min={1}
                      defaultValue={item.quantity}
                    />
                    <img
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                      className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                      src={assets.bin_icon}
                      alt="Remove"
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right: Cart Total */}
        <div className="lg:w-[400px] flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#E9C8C2] sticky top-[calc(80px+2rem)]">
            <CartTotal />
            <div className="mt-6 text-end">
              <button
                onClick={() => navigate('/place-order')}
                disabled={isCartEmpty}
                className={`px-6 py-3 text-white font-semibold rounded-lg w-full transition-all duration-300 bg-gradient-to-r from-[#4B0E1C] to-[#611627] hover:opacity-90 ${
                  isCartEmpty ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
