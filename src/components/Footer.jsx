import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#FDF5F0] text-[#4B0E1C] pt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-20 grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-10">
        
        {/* Logo and Description */}
        <div>
          <Link to="/">
            <img src={assets.logo} className="w-32 mb-5 cursor-pointer" alt="Heritage & Co." />
          </Link>
          <p className="text-gray-600 text-sm md:w-3/4">
            Heritage & Co. brings timeless elegance and quality craftsmanship to your wardrobe. 
            Explore our curated collections, stay inspired, and enjoy exclusive offers. 
            Subscribe to our newsletter for the latest arrivals and special promotions.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="mb-5 text-xl font-semibold">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <Link to="/"><li className="hover:text-[#611627] transition">Home</li></Link>
            <Link to="/about"><li className="hover:text-[#611627] transition">About Us</li></Link>
            <Link to="/shop"><li className="hover:text-[#611627] transition">Shop</li></Link>
            <Link to="/contact"><li className="hover:text-[#611627] transition">Contact</li></Link>
            <Link to="/privacy"><li className="hover:text-[#611627] transition">Privacy Policy</li></Link>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="mb-5 text-xl font-semibold">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <li>+92-300-123-4567</li>
            <li>support@heritageco.com</li>
            <li>123 Fashion Street, Karachi, Pakistan</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-300">
        <p className="py-5 text-sm text-center text-gray-500">
          &copy; 2025 Heritage & Co. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
