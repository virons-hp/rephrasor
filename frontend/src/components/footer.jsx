// import React from "react";
import "./mainresponsive.css"
const Footer = () => {
  return (
    <footer className="mt-10 p-4 bg-gray-800 text-white footerSection ">
      <div className="flex justify-between footerDiv">
        <div>
          <a href="#privacy" className="px-4">Privacy Policy</a>
          <a href="#terms" className="px-4">Terms of Service</a>
        </div>
        <div>
          <a href="https://facebook.com" className="px-2">Facebook</a>
          <a href="https://twitter.com" className="px-2">Twitter</a>
          <a href="https://linkedin.com" className="px-2">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
