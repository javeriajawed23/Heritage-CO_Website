import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = ({
  headingColor = "#611627",   // Burgundy heading color
  textColor = "#4B0E1C",     // Paragraph and product text
}) => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="py-8 text-center">
        <Title
          text1={"LATEST"}
          text2={"COLLECTIONS"}
          color={headingColor}
          className="text-4xl md:text-5xl lg:text-6xl" // Larger heading
        />
        <p
          className="w-3/4 m-auto text-sm md:text-base mt-4"
          style={{ color: textColor }}
        >
          Step into a world of style with our newest collections, carefully
          curated to bring you the best in fashion, home decor, and more.
        </p>
      </div>

      {/* Rendering Product Items */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {latestProducts.map((item, index) => (
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

export default LatestCollection;
