import React, { useState } from 'react';
import './Community.css';

function Community() {
  const [resourceRequest, setResourceRequest] = useState('');
  const [quantityRequest, setQuantityRequest] = useState('');
  const [submittedRequests, setSubmittedRequests] = useState([]);
  
  const [resourceOffer, setResourceOffer] = useState('');
  const [quantityOffer, setQuantityOffer] = useState('');
  const [locationOffer, setLocationOffer] = useState('');
  const [submittedOffers, setSubmittedOffers] = useState([]);

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    if (resourceRequest && quantityRequest) {
      setSubmittedRequests(prev => [...prev, { resource: resourceRequest, quantity: quantityRequest }]);
      setResourceRequest('');
      setQuantityRequest('');
    }
  };

  const handleOfferSubmit = (e) => {
    e.preventDefault();
    if (resourceOffer && quantityOffer && locationOffer) {
      const newOffer = { resource: resourceOffer, quantity: quantityOffer, location: locationOffer };
      setSubmittedOffers(prev => [...prev, newOffer]);
      setResourceOffer('');
      setQuantityOffer('');
      setLocationOffer('');
    }
  };

  const handleAccept = (resource) => {
    // Filter out offers that match the accepted resource
    const updatedOffers = submittedOffers.filter(offer => offer.resource.toLowerCase() !== resource.toLowerCase());
    setSubmittedOffers(updatedOffers); // Update state
  };

  return (
    <div className="community-container">
      <h1>Community Tab</h1>
      <div className="resources-container">
        <div className="ask-res">
          <h3>Ask for Resources</h3>
          <form onSubmit={handleRequestSubmit}>
            <div className="ask-res-question">
              <label>What resource do you need?</label>
              <input 
                type="text" 
                value={resourceRequest} 
                onChange={(e) => setResourceRequest(e.target.value)} 
                placeholder="Enter resource here" 
              />
              <label>Quantity?</label>
              <input 
                type="text" 
                value={quantityRequest} 
                onChange={(e) => setQuantityRequest(e.target.value)} 
                placeholder="Enter quantity here" 
              />
            </div>
            <button type="submit">Submit Request</button>
          </form>

          {submittedRequests.map((req, index) => (
            <div key={index} className="submitted-request">
              <h4>Requested:</h4>
              <p>{req.quantity} of {req.resource}</p>

              {submittedOffers
                .filter(offer => offer.resource.toLowerCase() === req.resource.toLowerCase())
                .map((offer, offerIndex) => (
                  <div key={offerIndex}>
                    <p>Offer: {offer.quantity} of {offer.resource} available at {offer.location}</p>
                    <button onClick={() => handleAccept(offer.resource)}>Accept</button>
                  </div>
                ))}
            </div>
          ))}
        </div>

        <div className="give-res">
          <h3>Give Resources</h3>
          <form onSubmit={handleOfferSubmit}>
            <div className="give-res-question">
              <label>What excess resource do you have?</label>
              <input 
                type="text" 
                value={resourceOffer} 
                onChange={(e) => setResourceOffer(e.target.value)} 
                placeholder="Enter resource here" 
              />
              <label>Quantity?</label>
              <input 
                type="text" 
                value={quantityOffer} 
                onChange={(e) => setQuantityOffer(e.target.value)} 
                placeholder="Enter quantity here" 
              />
              <label>Location and time to meet</label>
              <input 
                type="text" 
                value={locationOffer} 
                onChange={(e) => setLocationOffer(e.target.value)} 
                placeholder="Enter location and time here" 
              />
            </div>
            <button type="submit">Submit Offer</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Community;
