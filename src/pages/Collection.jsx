import React, { useContext, useEffect, useState } from "react"; 
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  const clearFilters = () => {
    setCategory([]);
    setSubCategory([]);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="bg-[#FAF8F7] min-h-screen">

      {/* Burgundy Banner Header */}
      <div className="bg-[#4B0E1C] text-white pt-24 pb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wider">
          Our Collections
        </h1>
        <p className="mt-2 text-lg sm:text-xl text-[#E9C8C2]">
          Curated styles for every occasion
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row gap-8 px-4 sm:px-20 mt-8">

        {/* Filter Sidebar */}
        <div className="sm:w-64 bg-white rounded-2xl shadow-lg p-6 sticky top-32 h-fit">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-[#4B0E1C]">Filters</h2>
            <button
              className="text-sm text-[#611627] hover:underline"
              onClick={clearFilters}
            >
              Clear
            </button>
          </div>

          {/* Category Filters */}
          <div className="mb-6">
            <p className="mb-2 font-semibold text-[#4B0E1C]">Category</p>
            <div className="flex flex-col gap-2 text-gray-700">
              {["Men", "Women", "Kids"].map((cat) => (
                <label key={cat} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    value={cat}
                    checked={category.includes(cat)}
                    onChange={toggleCategory}
                    className="w-4 h-4 accent-[#4B0E1C]"
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* Sub-Category Filters */}
          <div className="mb-6">
            <p className="mb-2 font-semibold text-[#4B0E1C]">Type</p>
            <div className="flex flex-col gap-2 text-gray-700">
              {["Topwear", "Bottomwear", "Winterwear"].map((sub) => (
                <label key={sub} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    value={sub}
                    checked={subCategory.includes(sub)}
                    onChange={toggleSubCategory}
                    className="w-4 h-4 accent-[#4B0E1C]"
                  />
                  {sub}
                </label>
              ))}
            </div>
          </div>

          {/* Sort Products */}
          <div>
            <p className="mb-2 font-semibold text-[#4B0E1C]">Sort By</p>
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B0E1C]"
            >
              <option value="relevant">Relevant</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProducts.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 mt-10">
              No products found.
            </p>
          ) : (
            filterProducts.map((item) => (
              <ProductItem
                key={item._id}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
