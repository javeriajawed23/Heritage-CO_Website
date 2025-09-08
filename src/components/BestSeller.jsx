import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = ({
  headingColor = "#611627",  // Burgundy heading color
  textColor = "#4B0E1C",    // Paragraph and product text
}) => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="py-8 text-center">
        <Title
          text1={"BEST"}
          text2={"SELLERS"}
          color={headingColor}
          className="text-4xl md:text-5xl lg:text-6xl"
        />
        <p
          className="w-3/4 m-auto text-xs sm:text-sm md:text-base mt-4"
          style={{ color: textColor }}
        >
          Our best sellers are a curated selection of top-rated items that have
          won over shoppers with their quality, style, and value.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            textColor={textColor} // Pass color to ProductItem
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
