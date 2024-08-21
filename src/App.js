// App.js
import React, { useState, useEffect, useRef } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import Preloaders from "./components/Preloaders";
import { gsap } from "gsap";
import "./App.css"; // Make sure to create this file for custom styles

const App = () => {
  const [loading, setLoading] = useState(true);
  const textRef = useRef(null);

  const handleComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      gsap.from(textRef.current, { y: 50, opacity: 0, duration: 0.5 });
    }
  }, [loading]);

  return (
    <div className="App">
      <header className="App-header">
        {loading && <Preloaders onComplete={handleComplete} />}
        {!loading && (
          <div>
            <h1 ref={textRef}>Hi, I'm Tushar Sahu</h1>
            <DarkModeToggle />
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
