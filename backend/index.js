import express from "express";
import cors from "cors";
import fetch from "node-fetch"; // Ensure you install this: npm install node-fetch

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());

// Rephrase Endpoint
app.post("/api/rephrase", async (req, res) => {
  const { text, tone, language } = req.body;

  if (!text || !tone || !language) {
    return res.status(400).json({ error: "Missing required parameters." });
  }

  const prompt = `Rephrase this text to make it more ${tone} in ${language}: ${text}`;
  const encodedPrompt = encodeURIComponent(prompt);
  const apiUrl = `https://text.pollinations.ai/${encodedPrompt}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch rephrased text from Pollination API");
    }
    const rephrasedText = await response.text();
    res.json({ rephrasedText });
  } catch (error) {
    console.error("Error in /api/rephrase:", error.message);
    res.status(500).json({ error: "Error processing the rephrased text." });
  }
});

// Translate Endpoint (Mock Translation API for demonstration)
app.post("/api/translate", async (req, res) => {
  const { text, targetLanguage } = req.body;

  if (!text || !targetLanguage) {
    return res.status(400).json({ error: "Missing required parameters." });
  }

  // Mock translation logic - replace this with an actual translation API
  try {
    const translatedText = `${text} (translated to ${targetLanguage})`;
    res.json({ translatedText });
  } catch (error) {
    console.error("Error in /api/translate:", error.message);
    res.status(500).json({ error: "Error processing the translation." });
  }
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
