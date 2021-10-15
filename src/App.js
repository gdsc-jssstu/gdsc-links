import './App.css';
import DisplayLinks from "./containers/DisplayLinks";
import Navbar from "./containers/Navbar";
import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti'
 
function App() {
  const [mode, setMode] = useState('light'); 

  const setTheme = (theme) => {
    if ('light' === theme) {
      setMode('light');
      window.localStorage.setItem('theme', 'light');
      document.body.style.backgroundColor = 'white';
    } else if ('dark' === theme) {
      setMode('dark');
      window.localStorage.setItem('theme', 'dark');
      document.body.style.backgroundColor = '#111';
    }
  };

  const toggleMode = () => {
    setTheme(mode === 'light'? 'dark' : 'light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  }, []);

  return (
    <>
      <Confetti recycle={false} numberOfPieces={200} />
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <DisplayLinks mode={mode}/>
    </> 
  );
}

export default App;
