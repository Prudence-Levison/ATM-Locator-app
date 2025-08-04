"use client";
import React from "react";
import { useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ChangeMapView =({coords})=>{
  const map = useMap();
  useEffect(() => {
    map.setView(coords);
  }, [coords]);
  return null
}


const customIcon = new L.Icon({
  iconUrl:"https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const MapView = ({userCoordinate}) => {
  return (
    <MapContainer
      center={[6.5244, 3.3792]} 
      zoom={13}
      scrollWheelZoom={true}
      className="h-full w-full z-0"
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={userCoordinate || [6.5244, 3.3792]} icon={customIcon}>
        <Popup>{userCoordinate ? "You are here" : "Default location"}</Popup>
      </Marker>
      {userCoordinate && <ChangeMapView  coords={userCoordinate} />}
    </MapContainer>
  );
};

export default MapView;
