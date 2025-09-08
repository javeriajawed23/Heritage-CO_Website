import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <>
      {/* Navbar */}
      <div className="w-full fixed top-0 left-0 bg-[#4B0E1C] text-white shadow-lg z-50 h-20 flex items-center">
        <div className="flex items-center justify-between w-full px-6 md:px-16 font-medium">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-3xl font-[Playfair_Display] tracking-wide">Heritage&CO.</h1>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden gap-10 text-sm sm:flex">
            {['HOME','COLLECTION','ABOUT','CONTACT'].map((item, idx) => (
              <NavLink 
                key={idx}
                to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`} 
                className="relative group hover:text-[#E9C8C2] transition-colors"
              >
                {item}
                <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-[#E9C8C2] transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            <img
              onClick={() => setShowSearch(true)}
              src={assets.search_icon}
              className="w-6 cursor-pointer invert hover:opacity-80"
              alt="Search Products"
            />

            <div className="relative group">
              <Link to="/login">
                <img src={assets.profile_icon} className="w-6 cursor-pointer invert hover:opacity-80" alt="Your Profile" />
              </Link>
            </div>

            <Link to="/cart" className="relative">
              <img src={assets.cart_icon} className="w-6 min-w-6 invert hover:opacity-80" alt="Cart" />
              <p className="absolute right-[-6px] bottom-[-6px] w-5 h-5 flex items-center justify-center bg-[#E9C8C2] text-[#4B0E1C] font-bold rounded-full text-[10px]">
                {getCartCount()}
              </p>
            </Link>

            <img
              onClick={() => setVisible(true)}
              src={assets.menu_icon}
              className="w-6 cursor-pointer invert sm:hidden"
              alt="Menu Icon"
            />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full bg-[#4B0E1C]/95 text-white shadow-lg transform transition-transform duration-300 ${visible ? 'translate-x-0 w-4/5' : 'translate-x-full w-0'}`}>
        <div className="flex flex-col h-full">
          <div onClick={() => setVisible(false)} className="flex items-center gap-3 p-4 cursor-pointer hover:bg-[#611627] transition">
            <img src={assets.dropdown_icon} className="h-4 rotate-180 invert" alt="Back" />
            <p>Back</p>
          </div>
          {['HOME','COLLECTION','ABOUT','CONTACT'].map((item, idx) => (
            <NavLink
              key={idx}
              onClick={() => setVisible(false)}
              className="py-4 pl-6 border-b border-[#E9C8C2] hover:bg-[#611627]"
              to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  )
}

export default NavBar
