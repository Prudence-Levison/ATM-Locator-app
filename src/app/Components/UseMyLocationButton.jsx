"use client";
import React from 'react';
import { useState } from 'react';
import FindATM from './FindATM';
import AddATM from './AddATM';
const UseMyLocationButton = ({setUserCoordinate}) => {
  const [dropdown, setDropdown] =useState(false)
  const [selectedState, setSelectedState] = useState();
  
  const handleDropdown =( ) =>{
    setDropdown(!dropdown)
  }
  const handleFindATM =()=>{
    setSelectedState("find");
    setDropdown(false)
  }
  const handleAddATM =()=>{
    setSelectedState("add");
    setDropdown(false)
  }


  return (
    <div className="relative inline-block text-left"
    >
  <button onClick={handleDropdown}
        className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-4 rounded-full shadow-lg transition duration-200">
          Use my Location
  </button>
          {dropdown && 
          <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg transition-all duration-200">
              <div   onClick={handleFindATM} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Find ATM's near me...</div>
              <div   onClick={handleAddATM} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Add this ATM</div>
            
            </div>}
            {selectedState === 'find' && <FindATM setUserCoordinate={setUserCoordinate} />}
            {selectedState === 'add' && <AddATM />}
    </div>
  )

}

export default UseMyLocationButton
