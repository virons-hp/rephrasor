import React, useState from "react"; 
import axios from "axios";
import "./MainSection.css";
import "./mainresponsive.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaCopy } from "react-icons/fa";
import { useState } from "react";

const MainSection = () => {
  const [text, setText] = useState("");
  const [tone, setTone] = useState("formal");
  const [language, setLanguage] = useState("English");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleRephrase = async () => {
    if (!text) return alert("Please enter text to rephrase!");
    const cleanedText = text.replace(/\s+/g, " ").trim();
    if (!cleanedText) return alert("Please enter text to rephrase!");

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

  const handleTranslate = async () => {
    if (!text) return alert("Please enter text to translate!");
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/translate", {
        text,
        targetLanguage: language,
      });
      setResult(response.data.translatedText);
    } catch (error) {
      alert("Error translating text.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setText("");
    setResult("");
  };

  const handleCopy = () => {
    if (!result) {
      alert("No text available to copy!");
      return;
    }
    navigator.clipboard
      .writeText(result)
      .then(() => alert("Text copied to clipboard!"))
      .catch(() => alert("Failed to copy text."));
  };

  const countWords = (str) => {
    const words = str.trim().split(/\s+/);
    return str.trim() === "" ? 0 : words.length;
  };

  return (
    <section className="mainSection w-full flex justify-center align-middle items-center">
      <div className="toolContainer bg-sky-900 w-[90%] shadow-2xl rounded-xl">
        <div className="toolContainerTopSection p-2">
          <nav className="bg-sky-900 p-4 justify-center text-center">
            <div className="container mx-auto flex justify-between items-center text-center">
              <ul className="flex space-x-6">
                <li
                  className="text-white hover:text-gray-300 cursor-pointer"
                  onClick={() => setLanguage("English")}
                >
                  English
                </li>
                <li
                  className="text-white hover:text-gray-300 cursor-pointer"
                  onClick={() => setLanguage("Spanish")}
                >
                  Spanish
                </li>
                <li
                  className="text-white hover:text-gray-300 cursor-pointer"
                  onClick={() => setLanguage("French")}
                >
                  French
                </li>
                <li
                  className="text-white hover:text-gray-300 cursor-pointer"
                  onClick={() => setLanguage("German")}
                >
                  German
                </li>
                <li
                  className="text-white hover:text-gray-300 cursor-pointer"
                  onClick={() => setLanguage("Korean")}
                >
                  Korean
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="toolContainerBottomSection p-2">
          <div className="toolContainerBottomMain p-2 border-2 border-slate-500 rounded-xl">
            <div className="promptContainer flex flex-row gap-4 justify-center">
              {/* Input Section */}
              <div className="inputContainer w-[50%] bg-slate-200 rounded-b-xl">
                <textarea
                  className="w-full p-4 border rounded"
                  placeholder="Enter text"
                  rows="15"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
                <div className="inputContainerButtons w-full flex flex-row gap-2 py-3 px-4 justify-between text-end text-white">
                  <div className="wordCountDiv py-3 px-8 border-2 border-gray-300 rounded-xl bg-slate-500">
                    <span className="font-semibold">Words:</span> {countWords(text)}
                  </div>
                  <button
                    onClick={handleRephrase}
                    type="submit"
                    className="py-3 px-8 border-2 border-gray-300 rounded-xl bg-slate-500"
                  >
                    {loading ? "Processing..." : "Rephrase"}
                  </button>
                  <button
                    onClick={handleTranslate}
                    type="button"
                    className="py-3 px-8 border-2 border-gray-300 rounded-xl bg-slate-500"
                  >
                    {loading ? "Processing..." : "Translate"}
                  </button>
                  <button
                    type="reset"
                    onClick={handleReset}
                    className="text-2xl pt-3 pb-1 px-3 border-2 border-gray-300 rounded-xl bg-slate-300 text-black"
                  >
                    <RiDeleteBin5Fill />
                  </button>
                </div>
              </div>

              {/* Output Section */}
              <div className="outputContainer w-[50%] bg-slate-200 rounded-b-xl">
                <textarea
                  className="w-full p-4 border rounded"
                  placeholder="Result"
                  rows="15"
                  value={result}
                  readOnly
                ></textarea>
                <div className="outputContainerButtons w-full text-center flex gap-4 py-3 justify-end text-white">
                  <div className="wordCountDiv py-3 px-8 border-2 border-gray-300 rounded-xl bg-slate-500">
                    <span className="font-semibold">Words:</span> {countWords(result)}
                  </div>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="text-2xl pt-3 pb-1 px-3 border-2 border-gray-300 rounded-xl bg-slate-300 text-black"
                  >
                    <FaCopy />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
