import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  }, [productId, products]);

  if (!productData) return <div className="pt-24"></div>;

  return (
    <div className="pt-24 px-6 md:px-20 bg-[#FDF5F0] text-[#4B0E1C]">
      {/* Product Main Section */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        
        {/* Left - Images */}
        <div className="flex flex-col lg:flex-row gap-4 lg:w-1/2">
          <div className="flex overflow-x-auto lg:flex-col lg:overflow-y-auto gap-2">
            {productData.image.map((img, idx) => (
              <img 
                key={idx}
                src={img}
                alt={`Thumbnail ${idx}`}
                onClick={() => setImage(img)}
                className={`cursor-pointer rounded-lg border-2 ${image === img ? 'border-[#611627]' : 'border-transparent'} w-20 h-20 object-cover lg:w-full lg:h-auto`}
              />
            ))}
          </div>
          <div className="flex-1">
            <img src={image} alt="Product" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Right - Info */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-semibold">{productData.name}</h1>

          {/* Ratings */}
          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => <img key={i} src={assets.star_icon} className="w-5" alt="star" />)}
            <img src={assets.star_dull_icon} className="w-5" alt="star" />
            <span className="pl-2 text-sm text-gray-600">(122 reviews)</span>
          </div>

          <p className="text-2xl font-bold">{currency}{productData.price}</p>
          <p className="text-gray-600 md:w-4/5">{productData.description}</p>

          {/* Size Selection */}
          <div className="flex flex-col gap-2">
            <span className="font-medium">Select Size</span>
            <div className="flex gap-3">
              {productData.sizes.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2 border rounded-md ${size === s ? 'border-[#611627] bg-[#FBECEC]' : 'border-gray-300 bg-white'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button 
            onClick={() => addToCart(productData._id, size)}
            className="px-8 py-3 bg-[#611627] text-white rounded-md font-semibold hover:bg-[#4B0E1C] transition"
          >
            ADD TO CART
          </button>

          {/* Guarantee Info */}
          <div className="flex flex-col gap-1 text-sm text-gray-600 mt-4">
            <p>Guaranteed 100% Authentic – Shop with Confidence!</p>
            <p>Cash on Delivery – Pay at Your Doorstep!</p>
            <p>Hassle-Free Returns & Exchanges – 10 Days, No Questions Asked!</p>
          </div>
        </div>
      </div>

      {/* Description & Reviews */}
      <div className="mt-16 border-t border-gray-200">
        <div className="flex border-b border-gray-200">
          <button className="px-6 py-3 font-medium text-[#611627] border-b-2 border-[#611627]">Description</button>
          <button className="px-6 py-3 text-gray-400">Reviews (122)</button>
        </div>
        <div className="p-6 text-gray-700 space-y-4">
          <p>Elevate your style with our meticulously crafted Trendify quality products...</p>
          <p>Whether you're dressing up for a special occasion or adding sophistication to your everyday look...</p>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      </div>
    </div>
  )
}

export default Product
