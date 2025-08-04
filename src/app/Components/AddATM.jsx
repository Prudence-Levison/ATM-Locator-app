import React from 'react'
import { useState, useEffect} from "react"

const AddATM = () => {
   const [isLoading, setIsLoading] =useState(false)
    const [getCordinate, setGetCoordinate] =useState({
      longitude:"",
      latitude:"",
    }) 
    const [ error, setError] =useState(null)

    useEffect( ()=> {
      console.log("mounted")
      if (navigator.geolocation){
        setIsLoading(true)
      navigator.geolocation.getCurrentPosition((position)=>{
        setGetCoordinate({ latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          
        })
        console.log("added successfully")
      },
      (error) =>{
        setError(error.message)
      }
    )
    }
    else {
      setError("We have a problem fetching your location")
    }
    
    },[]
    )
  return (
    <div>
      {isLoading && <p>Adding ATM currently. Please wait...</p>}
      {error && <p className="text-red-500 text-sm tracking-wide font-bold mt-2 text-center" style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)" }}>Error getting your location. Please try again ...</p>}
       {/* {getCordinate.latitude && getCordinate.longitude &&<p>Latitude: {getCordinate.latitude}, Longitude: {getCordinate.longitude} </p> } */}
    </div>
  )
}

export default AddATM
