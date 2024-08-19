// App.js
import React from 'react';
import DarkModeToggle from './component/DarkModeToggle';
import './App.css'; // Make sure to create this file for custom styles

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dark Mode Toggle</h1>
        <DarkModeToggle/>
        
      </header>
    </div>
  );
};

export default App;
