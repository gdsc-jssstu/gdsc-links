import './App.css';
import DisplayLinks from "./containers/DisplayLinks";
import Navbar from "./containers/Navbar";
import React, { useState } from 'react';

 
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
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <DisplayLinks mode={mode}/>
    </> 
  );
}

export default App;
