import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full py-6">
      <input
        className="w-full px-5 py-3 rounded-full shadow-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        placeholder="Search for ATM's near you"
        type="text"
      />
    </div>
  );
};

export default SearchBar;
