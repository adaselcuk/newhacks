import {React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Map from './Map'; 
import Todo from './Todo';
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
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/todo" element={<Todo />} />

      </Routes>
    </Router>
  );
}

export default App;
