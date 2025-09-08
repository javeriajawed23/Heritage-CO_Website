import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext)
  const [related, setRelated] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      const filtered = products.filter(
        (item) => item.category === category && item.subCategory === subCategory
      )
      setRelated(filtered.slice(0, 5))
    }
  }, [products, category, subCategory])

  if (related.length === 0) return null

  return (
    <div className='my-16 px-6 md:px-20'>
      <div className='text-3xl text-center mb-10'>
        <Title text1='RELATED' text2='PRODUCTS' />
      </div>
      <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {related.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
