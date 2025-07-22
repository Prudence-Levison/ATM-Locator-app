"use client"
import React from "react";
import { useState } from 'react'

const SearchBar = () => {
  const[enterlocation, setEnterLocation] =useState("");

  const handleInputButton =(e)=>(
   setEnterLocation(e.target.value)
  )

  const submitHandler =(e) =>{
    e.preventDefault();
    console.log("submitted", enterlocation);
    setEnterLocation('')
  }

  return (
    <div className="w-full py-6">
      <form onSubmit={submitHandler}>
      <input onChange={handleInputButton}
        className="w-full px-5 py-3 rounded-full shadow-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        placeholder="Search for ATM's near you"
        type="text"
        value={enterlocation}
      />
      </form>
    </div>
  );
};

export default SearchBar;
