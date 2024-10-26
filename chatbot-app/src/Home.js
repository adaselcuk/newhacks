import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import './App.css';

function Home() {
  return (
    <div className="App">
      <div className="navbar">
        <ul>
          <li>Logo</li>
          <li id="right">Contact Us</li>
        </ul>
      </div>
      <div id="heading">Welcome to the Home Page</div>
      <div className="map-container">
        <MapContainer center={[43.6532, -79.3832]} zoom={13}>
          <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
      <Link to="/map">
        <button id="but1">Nearest Evacuation Sites</button>
      </Link>
      <div className="cards-container">
        <Card title="Our Bot" />
        <Card title="Community" />
        <Card title="Volunteers" />
      </div>
    </div>
  );
}

function Card({ title }) {
  return (
    <div className="card">
      <h3>{title}</h3>
    </div>
  );
}

export default Home;
