// App.js
import React, { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import Preloaders from "./components/Preloaders";
import "./App.css"; // Make sure to create this file for custom styles


const App = () => {

  const [loading, setLoading] = useState(true);

const handleComplete = () => {
  setLoading(false);
};

  return (
    <div className="App">
      <header className="App-header">
      {loading && <Preloaders onComplete={handleComplete} />}
        {!loading && (
          <div>
            <h1>Dark Mode Toggle</h1>
            <DarkModeToggle />
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
