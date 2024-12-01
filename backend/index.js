// create a new express app

import express from "express";
import cors from "cors";
const PORT = 5000;

const app = express();

app.use(cors());

app.use(express.json());

app.post("/api/rephrase", async (req, res) => {
  const { text, tone, language } = req.body;
  const prompt = `Rephrase this text to make it more ${tone} in ${language}: ${text}`;
  const encodedPrompt = encodeURIComponent(prompt);
  const apiUrl = `https://text.pollinations.ai/${encodedPrompt}`;

  const response = await fetch(apiUrl);
  console.log(response);
  const data = await response.text();

  console.log(data);

  res.json({ rephrasedText: data });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
