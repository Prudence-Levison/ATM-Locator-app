"use client"
import React from "react";
import { useState } from 'react';
import { PiArrowElbowRightUpBold } from "react-icons/pi";

const SearchBar = () => {
  const[enterlocation, setEnterLocation] =useState("");
  const [error, setError] =useState("");

  const handleInputButton =(e)=>(
   setEnterLocation(e.target.value)
  )

  const submitHandler =(e) =>{ 
    e.preventDefault();
    if (enterlocation === ''){
      setError("Location cammot be empty")
    } 
    console.log("submitted", enterlocation);
    setEnterLocation('')
  }

  return (
    <div className="w-full py-6 relative">
      <form onSubmit={submitHandler}>
      <input onChange={handleInputButton}
        className="w-full px-5 py-3 rounded-full shadow-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        placeholder="Search for ATM's near you"
        type="text"
        value={enterlocation}
      />
     
      <button type="submit"
      className="text-gray-600 hover:text-black absolute right-4 top-1/2 -translate-y-1/2">
         <PiArrowElbowRightUpBold size={24} />
      </button>
      </form>
       {error && <p className="text-red-500 text-sm tracking-wide font-bold mt-2 text-center" style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)" }}>{error}</p>}
    </div>
  );
};

export default SearchBar;
