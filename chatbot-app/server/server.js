const PORT = process.env.GEMINI_API_URL || 8000;
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

app.post("/gemini", async (req, res) => {
  const { history, message } = req.body;
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const chat = model.startChat({
    history: req.body.history,
  });
  const msg = req.body.message;

  const result = await chat.sendMessage(msg);
  const response = await result.response;
  const text = response.text();
  res.send(text);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));