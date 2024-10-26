<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Map from './Map'; 
import Bot from './Bot'; 
=======
import React, { useState } from "react";
import axios from "axios";
>>>>>>> 38f3997110f868306f5d8da4d6ffcc4d5e2283a6
import './App.css';

function App() {
  const [response, setResponse] = useState("Hi there! Natural disasters are bad");
  const [value, setValue] = useState("");

  const onChange = (e) => {setValue(e.target.value);};
  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:3000/chatbot", {
      question: value,
    });
    setResponse(response.data);
  };
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/bot" element={<Bot />} />

      </Routes>
    </Router>
=======
    <div className="App">
            <div>
        <input
          type="text"
          value={value}
          onChange={onChange}
        ></input>
      </div>
      <div>
        <button onClick={handleSubmit}>Click me for answers!</button>
      </div>
      <div>
        <p>Chatbot: {response}</p>
      </div>
    </div>
>>>>>>> 38f3997110f868306f5d8da4d6ffcc4d5e2283a6
  );
}

export default App;
