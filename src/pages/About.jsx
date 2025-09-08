import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="scroll-smooth font-[Poppins]">
      {/* HERO - burgundy banner trimmed like other pages */}
      <div className="bg-[#4B0E1C] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-[Playfair_Display] tracking-wide">
            About <span className="text-[#E9C8C2]">Heritage&CO</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-[#F8EDED] leading-relaxed">
            Where timeless tradition meets modern sophistication. Crafted for elegance, designed for you.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col gap-12 my-20 md:flex-row px-6 md:px-16">
        <img
          className="w-full md:max-w-[450px] rounded-xl shadow-2xl"
          src={assets.about_img}
          alt="About Heritage&CO"
        />
        <div className="flex flex-col justify-center gap-6 text-gray-700 md:w-2/4">
          <p className="text-lg leading-relaxed">
            Welcome to <b className="text-[#4B0E1C]">Heritage&CO</b>, where timeless elegance meets modern design.
            Our mission is to preserve the beauty of tradition while blending it with contemporary craftsmanship.
            Each collection is a reflection of artistry, quality, and passion, curated to inspire confidence and sophistication.
          </p>
          <p className="text-lg leading-relaxed">
            Every piece we offer carries a story of heritage and modern relevance. From careful selection to premium quality,
            we are honored to be part of your lifestyle journey.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-[#F9F5F4] py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-[Playfair_Display] text-[#4B0E1C] mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="p-10 bg-[#4B0E1C] text-white rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-[#FBECEC] leading-relaxed">
              To bring you curated collections that celebrate culture, craftsmanship, and elegance.
              We strive to make premium designs accessible, empowering individuality with confidence.
            </p>
          </div>
          <div className="p-10 bg-[#4B0E1C] text-white rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-[#FBECEC] leading-relaxed">
              To be a global name in heritage-inspired lifestyle and fashion, known for authenticity, artistry, and timeless relevance.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 px-6 md:px-20 text-center">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          <div className="p-10 bg-white rounded-xl shadow-md hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-[#4B0E1C] mb-4">Uncompromised Quality</h3>
            <p className="text-gray-700 leading-relaxed">
              Crafted with premium materials, inspected with care. When you choose us, you choose excellence that lasts.
            </p>
          </div>
          <div className="p-10 bg-white rounded-xl shadow-md hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-[#4B0E1C] mb-4">Effortless Experience</h3>
            <p className="text-gray-700 leading-relaxed">
              Intuitive browsing, timely deliveries, and seamless returns — we make your journey smooth and enjoyable.
            </p>
          </div>
          <div className="p-10 bg-white rounded-xl shadow-md hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-[#4B0E1C] mb-4">Dedicated Service</h3>
            <p className="text-gray-700 leading-relaxed">
              Exceptional care and support to ensure your experience reflects our values of trust, respect, and excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter */}
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

export default About
