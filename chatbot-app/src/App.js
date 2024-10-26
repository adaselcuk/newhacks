import React, { useState } from "react";
import axios from "axios";
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
  );
}

export default App;
