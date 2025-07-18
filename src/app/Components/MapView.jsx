"use client";
import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapView = () => {
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
      <Marker position={[6.5244, 3.3792]}>
        <Popup>You are here</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
