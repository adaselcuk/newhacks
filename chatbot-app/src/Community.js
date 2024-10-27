import React from 'react';
import { Link } from 'react-router-dom';
import './Community.css';

function Community() {
  return (
    <div className="community-container">
      <h1>Community Tab</h1>
      <div className="resources-container">
        <div className="ask-res">
          <h3>Ask for Resources</h3>
          <div className="ask-res-question">
            <label>What resource do you need?</label>
            <input type="text" placeholder="Enter resource here" />
            <label>Quantity?</label>
            <input type="text" placeholder="Enter quantity here" />
          </div>
        </div>

        <div className="give-res">
          <h3>Give Resources</h3>
          <div className="give-res-question">
            <label>What excess resource do you have?</label>
            <input type="text" placeholder="Enter resource here" />
            <label>Quantity?</label>
            <input type="text" placeholder="Enter quantity here" />
            <label>Location and time to meet</label>
            <input type="text" placeholder="Enter location and time here" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;