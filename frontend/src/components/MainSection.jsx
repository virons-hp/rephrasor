// import React from 'react'
import "./MainSection.css";

const MainSection = () => {
  // writedown funnctions here

  return (
    <>
      <section className="mainSection w-full flex justify-center align-middle items-center">
        <div className="toolContainer bg-slate-800 w-[85%] shadow-2xl rounded-xl ">
          <div className="toolContainerTopSection p-2">
            <div className="toolContainerTopSectionButtons rounded-t-xl py-4 bg-slate-800  text-white flex flex-row justify-evenly ">
              <div className=" text-center justify-center align-middle  text-white border-r-gray-500 ">
                <button type="button">Type:-</button>
              </div>
              <div className="">
                <button type="button">Informal</button>
              </div>
              <div className="">
                <button type="button">Formal</button>
              </div>
              <div className="">
                <button type="button">Creative</button>
              </div>
              <div className="">
                <button type="button"> Concise</button>
              </div>
            </div>
          </div>

          <div className="toolContainerBottomSection p-2">
            <div className="toolContainerBottomMain p-2 border-2 border-slate-500 rounded-xl">
              <div className="promptContainer flex flex-row gap-4 justify-center ">
                <div className="inputContainer w-[40%] bg-slate-200  rounded-b-xl">
                  <div className="inputBox">
                    <textarea
                      className="w-full p-4 border rounded"
                      placeholder="Enter text to rephrase"
                      rows="10"
                    ></textarea>
                  </div>
                  <div className="inputContainerButtons w-full flex flex-row gap-2 py-3 px-4 justify-between  text-end  text-white ">
                    <div className="wordCountDiv py-3 px-8 border-2 border-gray-300 rounded-xl bg-green-800 ">
                      <span className="font-semibold ">words:</span> 100/200
                    </div>
                    <div className="restButtonDiv py-3 px-8 border-2 border-gray-300 rounded-xl bg-green-800">
                      {" "}
                      <button type="reset">Reset</button>{" "}
                    </div>
                  </div>
                </div>
                <div className="loaderDiv w-[20%] bg-slate-200 flex flex-col text-center ">
                  <div className="h-[50%]">
                    <div className="loader bg-green-800 text-white  ">
                      Loading...
                    </div>
                  </div>
                  <div className="h-[50%]   py-3 w-full justify-items-end flex ">
                    <div className="rephraseButtonDiv  w-full h-full    ">
                      {" "}
                      <button
                        type="submit"
                        className="py-3 px-8 border-2 border-gray-300 rounded-xl text-white bg-green-800 "
                      >
                        Rephrase
                      </button>{" "}
                    </div>
                  </div>
                </div>

                <div className="outputContainer w-[40%] bg-slate-200 rounded-b-xl">
                  <div className="outputBox">
                    <textarea
                      className="w-full p-4 border rounded"
                      placeholder="Text after rephrase"
                      rows="10"
                    ></textarea>
                    <div className="outputContainerButtons w-full text-center  py-3 justify-end text-white ">
                      <div className="copyDiv  ">
                        {" "}
                        <button
                          type="button"
                          className="border-2 border-gray-300 rounded-xl py-3 px-8 bg-green-800 "
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
