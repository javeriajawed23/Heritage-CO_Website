import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [inputValue, setInputValue] = useState(search || '');

  if (!showSearch) return null;

  return (
    <div className="fixed top-[80px] left-0 w-full z-50 bg-gray-50 border-t border-b shadow-sm py-3">
      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center w-11/12 sm:w-1/2 px-4 py-2 border border-gray-400 rounded-full bg-white shadow-sm">
          <input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setSearch(e.target.value);
            }}
            className="flex-1 text-sm outline-none bg-inherit"
            type="text"
            placeholder="Search..."
          />
          <img className="w-4 h-4 ml-2" src={assets.search_icon} alt="Search" />
        </div>
        <img
          onClick={() => setShowSearch(false)}
          className="w-5 h-5 cursor-pointer"
          src={assets.cross_icon}
          alt="Close"
        />
      </div>
    </div>
  );
};

export default SearchBar;
