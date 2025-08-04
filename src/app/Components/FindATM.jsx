"use client";
import React from 'react';
import { useState, useEffect } from 'react';

const FindATM = ({setUserCoordinate}) => {
  const [isLoading, setIsLoading] =useState(false)
  const [getCordinate, setGetCoordinate] =useState({
    longitude:"",
    latitude:"",
  })
  const[error, setError] =useState('')
  
  const successCallback = (position)=>{
  const {latitude, longitude} = position.coords;
  console.log("Coordinates found:", latitude, longitude);
  setGetCoordinate({ latitude, longitude });
  setUserCoordinate([ latitude, longitude ]);
  setIsLoading(false)
    
  }

  const errorCallback =(err)=>{
    console.log("error message")
    setError(err.message);
    setIsLoading(false)
  }

  const findATMHandler=()=>{
     console.log("Button Clicked")
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    
  }

   useEffect(() => {
    findATMHandler();
  }, []);
  return (
    <div>

      {/* <button onClick={findATMHandler} >
        
          Find ATM's Near Me...</button> */}
        {isLoading && <p>Fetching Location...</p> }
        {error && <p className="text-red-500 text-sm tracking-wide font-bold mt-2 text-center" style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)" }}>Error getting your location. Please try again ...</p>}
      {getCordinate.latitude && getCordinate.longitude &&<p>Latitude: {getCordinate.latitude}, Longitude: {getCordinate.longitude} </p> }

    </div>
  )
}

export default FindATM
