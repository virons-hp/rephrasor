// import React from 'react'
import "./MainSection.css";

const MainSection = () => {
  // writedown funnctions here

  return (
    <>
      <section className="mainSection w-full flex justify-center align-middle items-center">
        <div className="toolContainer bg-gray-500 w-[80%]">
          <div className="toolContainerTopSection">
            <div className="toolContainerTopSectionButtons py-4 bg-pink-400 flex flex-row justify-evenly">
              <div className=""><p>Type:-</p></div>
              <div className=""><button type="button">Informal</button></div>
              <div className=""><button type="button">Formal</button></div>
              <div className=""><button type="button">Creative</button></div>
              <div className=""><button type="button"> Concise</button></div>
            </div>
          </div>

          <div className="toolContainerBottomSection p-2">
            <div className="toolContainerBottomMain">
              <div className="promptContainer flex flex-row gap-4 justify-center ">
                <div className="inputContainer w-[40%] bg-blue-400">

                  <div className="inputBox">
                    <textarea
                      className="w-full p-4 border rounded"
                      placeholder="Enter text to rephrase"
                      rows="16"
                    ></textarea>

                  </div>
                  <div className="inputContainerButtons w-full flex flex-row gap-2 py-4 justify-evenly ">
                    <div className="wordCountDiv"><span className="font-semibold ">words:</span> 100/200</div>
                    <div className="restButtonDiv">
                      {" "}
                      <button type="reset">Reset</button>{" "}
                    </div>
                    <div className="rephraseButtonDiv">
                      {" "}
                      <button type="submit">Rephrase</button>{" "}
                    </div>
                  </div>
                </div>
                <div className="loaderDiv w-[20%] h-20vh bg-red-300"></div>
                <div className="outputContainer w-[40%] h-20vh bg-red-800 "></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
