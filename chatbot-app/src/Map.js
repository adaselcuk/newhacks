import React from 'react';
import './Map.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet'; 
import redIcon from './red.png'; 
import purpleIcon from './purple.png';
import orangeIcon from './orange.png';
import greenIcon from './green.png'; 
import blueIcon from './blue.png';


const createRedIcon = new Icon({
  iconUrl: redIcon,
  iconSize: [38, 38], 
});

const createPurpleIcon = new Icon({
  iconUrl: purpleIcon,
  iconSize: [38, 38], 
});

const createOrangeIcon = new Icon({
  iconUrl: orangeIcon,
  iconSize: [38, 38], 
});

const createGreenIcon = new Icon({
  iconUrl: greenIcon,
  iconSize: [38, 38], 
});

const createBlueIcon = new Icon({
  iconUrl: blueIcon,
  iconSize: [38, 38], 
});


function Map() {
  const markers = [
    {
      geocode: [43.6426, -79.3871],
      popup: "CN Tower",
      icon: createRedIcon
    },
    {
      geocode: [43.65107, -79.347015],
      popup: "Distillery District",
      icon: createPurpleIcon
    },
    {
      geocode: [43.6677, -79.3948],
      popup: "Royal Ontario Museum",
      icon: createOrangeIcon
    },
    {
      geocode: [43.6532, -79.3832],
      popup: "Toronto Downtown",
      icon: createOrangeIcon
    },
    {
      geocode: [43.6366, -79.4204],
      popup: "High Park",
      icon: createPurpleIcon
    },
    {
      geocode: [43.6896, -79.4205],
      popup: "Casa Loma",
      icon: createGreenIcon,
    },
    {
      geocode: [43.6433, -79.3795],
      popup: "Ripley's Aquarium",
      icon: createRedIcon,
    },
    {
      geocode: [43.70011, -79.4163],
      popup: "Bata Shoe Museum",
      icon: createBlueIcon,
    },
    {
      geocode: [43.6629, -79.3957],
      popup: "Kensington Market",
      icon: createGreenIcon,
    },
    {
      geocode: [43.6487, -79.3817],
      popup: "St. Lawrence Market",
      icon: createRedIcon,
    },
  ];

  return (
    <><MapContainer center={[43.6532, -79.3832]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.geocode} icon={marker.icon}> {/* Use the custom icon */}
          <Popup>{marker.popup}</Popup>
        </Marker>

      ))}
    </MapContainer><div className="legend" style={{ marginLeft: '20px', width: '30%' }}>
        <h3>Map Legend</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <img src={redIcon} alt="Red Icon" style={{ width: '25px', verticalAlign: 'middle' }} />
            <span> - Earthquake safey zone</span>
          </li>
          <li>
            <img src={orangeIcon} alt="Orange Icon" style={{ width: '25px', verticalAlign: 'middle' }} />
            <span> - Flood safety zone</span>
          </li>
          <li>
            <img src={purpleIcon} alt="Purple Icon" style={{ width: '25px', verticalAlign: 'middle' }} />
            <span> - Land slides safety zone</span>
          </li>
          <li>
            <img src={greenIcon} alt="Green Icon" style={{ width: '25px', verticalAlign: 'middle' }} />
            <span> - Droughts</span>
          </li>
          <li>
            <img src={blueIcon} alt="Black Icon" style={{ width: '25px', verticalAlign: 'middle' }} />
            <span> - wildfires</span>
          </li>
        </ul>
      </div></>
  );
}

export default Map;