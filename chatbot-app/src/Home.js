import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import './App.css';
import GemBot from './Gembot';

function Home() {
  return (
    <div className="App">
      <div className="navbar">
        <ul>
          <li className="logo">Rescue Hub</li>
          <li id="right-corner" className="volunteers-link colour">
            <Link to="/todo">Volunteers Click Here!</Link></li>
            <li className="colour">
            <Link to="/community">Community Forum</Link></li>
            <li className="colour">
            <Link to="/gembot">Our AI Bot</Link></li>
            <li className="colour">
            <Link to="/map">Safety Zones</Link></li>
        </ul>
        
      </div>
      <div id="heading"><h1>Rescue Hub</h1></div>
      <div id="subheading">Get information about how to prepare for natural disasters and safe evacuation zones before they hit</div>
      <div className="content-container">
      <div className="chatbot-container">

        <GemBot />
      </div>
    
      </div>
    </div>
  );
}

export default Home;
