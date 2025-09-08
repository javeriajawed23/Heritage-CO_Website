import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="w-full pt-20">
      
      {/* Burgundy Header Section */}
      <div className="bg-[#4B0E1C] text-white py-16 text-center">
        <h1 className="text-4xl font-bold tracking-wider">Contact Heritage&Co.</h1>
        <p className="mt-4 text-lg text-[#E9C8C2]">
          We’re here to assist you in discovering timeless elegance
        </p>
      </div>

      {/* Contact Content */}
      <div className="flex flex-col justify-center gap-10 my-16 md:flex-row px-6 md:px-20">
        <img
          className="w-full md:max-w-[480px] rounded-lg shadow-lg"
          src={assets.contact_img}
          alt="Contact Heritage&Co."
        />
        <div className="flex flex-col items-start justify-center gap-6">
          <p className="text-2xl font-semibold text-[#611627]">Our Flagship Store</p>
          <p className="text-gray-600">
            Heritage&Co HQ <br />
            354 Artisan Lane <br />
            Karachi, Pakistan
          </p>
          <p className="text-gray-600">
            Tel: (+92) 21-3456-7890 <br />
            Email: support@heritageandco.com
          </p>

          <p className="text-2xl font-semibold text-[#611627]">Join Our Team</p>
          <p className="text-gray-600">
            Passionate about heritage craftsmanship and style? Join Heritage&Co and help us 
            celebrate timeless design. Explore career opportunities and grow with us.
          </p>
          <button className="px-8 py-3 text-sm font-semibold transition-all duration-500 border border-[#611627] text-[#611627] hover:bg-[#611627] hover:text-white">
            Explore Careers
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#4B0E1C] py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-[Playfair_Display] text-white mb-6">
            Stay Connected
          </h2>
          <p className="text-[#FBECEC] mb-8 text-lg">
            Join our newsletter and be the first to know about new arrivals, exclusive offers, and timeless inspirations.
          </p>

          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-2/3 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E9C8C2] shadow-md"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-[#E9C8C2] text-[#4B0E1C] font-semibold shadow-md hover:bg-[#f0d7d2] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
