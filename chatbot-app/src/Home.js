import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import './App.css';
import Bot from './Bot';

function Home() {
  return (
    <div className="App">
      <div className="navbar">
        <ul>
          <li>Logo</li>
          <li id="right">Contact Us</li>
          <li id="right-corner" className="volunteers-link">
            <Link to="/todo">Volunteers Click Here</Link></li>
        </ul>
      </div>
      <div id="heading">Disaster Averter</div>
      <div id="subheading">Get information about how to prepare for natural disasters and safe evacuation zones before they hit</div>
      <div className="content-container">
      <div className="chatbot-container">
        <Bot />
      </div>
      <div className="map-container">
        <MapContainer center={[43.6532, -79.3832]} zoom={13}>
          <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          
        </MapContainer>
        <Link to="/map">
            <button id="but1">Nearest Evacuation Sites</button>
          </Link>
      </div>

      </div>
      <div className="cards-container">
        <Card title="Community" />
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
