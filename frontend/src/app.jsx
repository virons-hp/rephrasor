// import React from "react";
import Header from "./components/Header";
import MainInput from "./components/MainInput";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* <MainInput /> */}
        <MainSection/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
