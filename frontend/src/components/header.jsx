// eslint-disable-next-line no-unused-vars
import React from "react";



const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-xl font-bold">Paraphraser</h1>
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
