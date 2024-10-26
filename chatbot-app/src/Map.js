import React from 'react';
import './Map.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import redIcon from './red.png'; 

const customIcon = new Icon({
  iconUrl: redIcon,
  iconSize: [38, 38], 
});

function Map() {
  const markers = [
    {
      geocode: [43.6426, -79.3871],
      popup: "pop up 1",
    },
  ];

  return (
    <MapContainer center={[43.6532, -79.3832]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.geocode} icon={customIcon}> {/* Use the custom icon */}
          <Popup>{marker.popup}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
