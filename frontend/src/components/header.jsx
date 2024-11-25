
// import React from "react";

import "./header.css"

const Header = () => {
  return (
    <header className="navBar flex justify-between items-center p-4 text-white bg-gray-800 ">
      <h1 className="text-xl font-bold text-white">Paraphraser</h1>
      <nav>
        <a href="#features" className="px-4">Features</a>
        <a href="#pricing" className="px-4">Pricing</a>
        <a href="#contact" className="px-4">Contact</a>
      </nav>
      <div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Sign In</button>
        <button className="ml-2 px-4 py-2 bg-green-500 text-white rounded">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
