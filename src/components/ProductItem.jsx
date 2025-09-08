import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="group">
      <div className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
        <img
          className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          src={image[0]}
          alt={name}
        />
      </div>
      <div className="mt-3 text-center">
        <p className="text-base font-medium text-[#4B0E1C] group-hover:text-[#611627] transition-colors">
          {name}
        </p>
        <p className="mt-1 text-sm font-semibold text-[#83162d]">
          {currency}&nbsp;
          {price.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
