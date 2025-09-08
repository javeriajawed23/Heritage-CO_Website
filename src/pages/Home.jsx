import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'

const Home = () => {
  return (
    <div className="pt-20 scroll-smooth font-[Poppins] bg-[#FDF5F0] text-[#4B0E1C]">
      {/* Hero Section */}
      <div className="bg-[#83162d]">
        <Hero 
          headingColor="#E9C8C2"        // Main heading color
          accentColor="#FBECEC"          // Small texts & lines
        />
      </div>

      {/* Latest Collection */}
      <div className="px-6 md:px-20 py-16">
        <LatestCollection 
          headingColor="#611627"       // Section heading
          textColor="#4B0E1C"          // Product names & description
          priceColor="#83162d"         // Prices
        />
      </div>

      {/* Best Sellers */}
      <div className="px-6 md:px-20 py-16">
        <BestSeller 
          headingColor="#611627"
          textColor="#4B0E1C"
          priceColor="#83162d"
        />
      </div>

      {/* Our Policy Section */}
      <div className="px-6 md:px-20 py-16 bg-[#F9F5F4]">
        <OurPolicy 
          headingColor="#611627"
          textColor="#4B0E1C"
        />
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#4B0E1C] py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-[Playfair_Display] mb-6" style={{ color: '#E9C8C2' }}>
            Stay Connected
          </h2>
          <p className="mb-8 text-lg" style={{ color: '#FBECEC' }}>
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

export default Home
