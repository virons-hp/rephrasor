// import React from 'react'
import "./MainSection.css";

const MainSection = () => {
  // writedown funnctions here

  return (
    <>
      <section className="mainSection">
        <div className="toolContainer">
          <div className="toolContainerTopSection">
            <div>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>

          <div className="toolContainerBottomSection">
            <div className="toolContainerBottomMain">
              <div className="promptContainer flex flex-row gap-1 justify-center ">
                <div className="inputContainer w-[40%] bg-blue-400">
                  <div className="inputBox">
                    <textarea
                      className="w-full p-4 border rounded"
                      placeholder="Enter text to rephrase"
                      rows="16"
                    ></textarea>
                  </div>
                  <div className="inputContainerButtons w-full flex flex-row gap-2 py-2 ">
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
