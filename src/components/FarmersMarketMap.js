import React from "react";

import { Marker, MapContainer, Popup, TileLayer, useMap } from "react-leaflet";

const FarmersMarketMap = () => {
  // Sample data for demonstration
  const markets = [
    { id: 1, name: "Local Farmers Market 1", lat: 40.7128, lng: -74.006 },
    { id: 2, name: "Local Farmers Market 2", lat: 34.0522, lng: -118.2437 },
    // Add more markets as needed
  ];

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
    // <MapContainer center={[40, -100]} zoom={4} style={{ height: "400px", width: "100%" }}>
    //   <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />

    //   {markets.map((market) => (
    //     <Marker key={market.id} position={[market.lat, market.lng]}>
    //       <Popup>{market.name}</Popup>
    //     </Marker>
    //   ))}
    // </MapContainer>
  );
};

export default FarmersMarketMap;
