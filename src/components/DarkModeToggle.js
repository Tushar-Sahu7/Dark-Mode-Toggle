// DarkModeToggle.js
import React, { useState, useEffect } from "react";
import "./DarkMode.css";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] =  useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.querySelector(".mode-tog").classList.add("active");
      document.querySelector(".dark-mode").classList.add("active");
      document.querySelector(".toggle-switch").classList.add("active");
    } else {
      document.querySelector(".mode-tog").classList.remove("active");
      document.querySelector(".dark-mode").classList.remove("active");
      document.querySelector(".toggle-switch").classList.remove("active");
    }
  }, [darkMode]);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };



  return (
    <span>
      <div className="mode-tog">
        <div className="container">
            <div className="dark-mode"></div>
        </div>
    </div>
    <div className="toggle-container" onClick={ toggleDarkMode }>
        <div className="toggle-switch">
            <div className="toggle-circle"></div>
        </div>
    </div>
    </span>
  );
};
export default DarkModeToggle;
