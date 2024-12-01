import { useState } from "react";
import axios from "axios";

const MainInput = () => {
  const [text, setText] = useState("");
  const [tone, setTone] = useState("formal");
  const [language, setLanguage] = useState("English");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleRephrase = async () => {
    if (!text) return alert("Please enter text to rephrase!");
    // clear out whitespaces and empty newlines
    const cleanedText = text.replace(/\s+/g, " ").trim();
    if (!cleanedText) return alert("Please enter text to rephrase!");

    console.log("Rephrasing text...");

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/rephrase", {
        text,
        tone,
        language,
      });
      setResult(response.data.rephrasedText);
    } catch (error) {
      alert("Error rephrasing text.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <textarea
        className="w-full p-4 border rounded"
        placeholder="Enter text to rephrase"
        rows="6"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <div className="flex justify-between mt-4">
        <select
          className="p-2 border rounded"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        >
          <option value="formal">Formal</option>
          <option value="casual">Casual</option>
          <option value="creative">Creative</option>
        </select>

        <select
          className="p-2 border rounded"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="English">English</option>
        </select>
      </div>

      <button
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
        onClick={handleRephrase}
        disabled={loading}
        type="button"
      >
        {loading ? "Rephrasing..." : "Rephrase"}
      </button>

      {result && (
        <div className="mt-4">
          <h3 className="font-bold">Rephrased Text:</h3>
          <textarea
            className="w-full p-4 border rounded bg-gray-100"
            value={result}
            readOnly
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default MainInput;
