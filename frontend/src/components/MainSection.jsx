import { useState } from "react";
import axios from "axios";
import "./MainSection.css";
import "./mainresponsive.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaCopy } from "react-icons/fa";

const MainSection = () => {
  const [text, setText] = useState("");
  const [tone, setTone] = useState("formal"); // Track the selected tone
  const [language, setLanguage] = useState("english"); // Ensure lowercase consistency
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

  const handleTranslate = async (selectedLanguage) => {
    if (!text) return alert("Please enter text to translate!");
    const cleanedText = text.replace(/\s+/g, " ").trim();
    if (!cleanedText) return alert("Please enter text to translate!");

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/translate", {
        text: cleanedText,
        targetLanguage: selectedLanguage,
      });
      setLanguage(selectedLanguage.toLowerCase());
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
    setLanguage("english");
  };

  const handleCopy = () => {
    if (!result) return alert("No text available to copy!");
    navigator.clipboard
      .writeText(result)
      .then(() => alert("Text copied to clipboard!"))
      .catch(() => alert("Failed to copy text."));
  };

  const countWords = (str) =>
    str.trim() === "" ? 0 : str.trim().split(/\s+/).length;

  return (
    <section className="mainSection w-full flex justify-center align-middle items-center">
      <div className="toolContainer bg-sky-900 w-[90%] shadow-2xl rounded-xl">
        <div className="toolContainerTopSection p-2">
          <nav className="bg-sky-900 p-4 text-center">
            <div className="container mx-auto flex justify-center items-center ">
              <ul className="flex space-x-6 py-3 ">
                {[
                  "English",
                  "Spanish",
                  "French",
                  "German",
                  "Korean",
                  "Hindi",
                ].map((lang) => (
                  <li
                    key={lang}
                    onClick={() => handleTranslate(lang.toLowerCase())}
                    className={`px-4 py-2 rounded-lg cursor-pointer ${
                      language === lang.toLowerCase()
                        ? "bg-green-500 text-white "
                        : "bg-transparent text-white hover:text-green-300"
                    }`}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="toolContainerTopSectionButtons rounded-t-xl py-2 bg-sky-900 text-white flex justify-evenly">
            {["Formal", "Informal", "Creative", "Concise"].map((toneOption) => (
              <button
                key={toneOption}
                type="button"
                onClick={() => setTone(toneOption.toLowerCase())}
                className={`py-2 px-4 rounded-lg cursor-pointer ${
                  tone === toneOption.toLowerCase()
                    ? "border-b-4 border-green-500 text-white"
                    : "bg-slate-800 hover:bg-green-700"
                }`}
              >
                {toneOption}
              </button>
            ))}
          </div>
        </div>

        <div className="toolContainerBottomSection p-2">
          <div className="toolContainerBottomMain p-2 border-2 border-slate-500 rounded-xl">
            <div className="promptContainer flex flex-row gap-4 justify-center">
              <div className="inputContainer w-[50%] bg-slate-200 rounded-b-xl">
                <textarea
                  className="w-full p-4 border rounded"
                  placeholder="Enter text to rephrase"
                  rows="12"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
                <div className="inputContainerButtons flex gap-2 py-3 px-4 justify-between text-end">
                  <div className="wordCountDiv py-3 px-8 bg-slate-300 rounded-xl text-black">
                    <span className="font-semibold">Words:</span>{" "}
                    {countWords(text)}
                  </div>
                  <button
                    onClick={handleRephrase}
                    className="py-3 px-8 bg-slate-500 rounded-xl text-white hover:bg-green-600"
                  >
                    {loading ? "Processing... " : "Rephrase"}
                  </button>
                  <button
                    type="reset"
                    onClick={handleReset}
                    className="py-3 px-3 bg-slate-300 rounded-xl text-black text-2xl hover:text-red-800"
                  >
                    <RiDeleteBin5Fill />
                  </button>
                </div>
              </div>

              <div className="outputContainer w-[50%] bg-slate-200 rounded-b-xl">
                <textarea
                  className="w-full p-4 border rounded"
                  placeholder="Translated/Rephrased text"
                  rows="12"
                  value={result}
                  readOnly
                ></textarea>
                <div className="outputContainerButtons flex gap-4 py-3 justify-end">
                  <div className="wordCountDiv py-3 px-8 bg-slate-300 rounded-xl text-black">
                    <span className="font-semibold">Words:</span>{" "}
                    {countWords(result)}
                  </div>
                  <button
                    className="py-3 px-3 bg-slate-300 rounded-xl text-black text-2xl hover:text-green-700 mr-3"
                    onClick={handleCopy}
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
