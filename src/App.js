import './App.css';
import DisplayLinks from "./containers/DisplayLinks";
import Navbar from "./containers/Navbar";
import React, { useState } from 'react';
import Confetti from 'react-confetti'

 
function App() {
  const [mode, setMode] = useState('light'); 

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#111';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Confetti recycle={false} numberOfPieces={200} />
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <DisplayLinks mode={mode}/>
    </> 
  );
}

export default App;
