import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import Simpletext from "./components/Simpletext";
import About from "./components/About";
import { useState } from 'react'
import Alert from "./components/Alert";
import React, { Component }  from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() 
{
  const [mode, updateMode] = useState('light');
  const [alert, updateAlert] = useState(null);

  const showAlert = (message,type)=>{
    updateAlert({
      message:message,
      type:type
    });
    setTimeout(() => 
    {  
      updateAlert(null); 
    }, 1500);
  }

  const toggleMode = ()=>
  {
    if(mode == 'light')
    {
      updateMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert('dark mode is enabled','success');
      document.title = 'Dark mode is enabled';
      setInterval(() => {
        document.title = 'Test';
      }, 1000);
      setInterval(() => {
        document.title = 'Test2';
      }, 1500);
    }
    else
    {
      updateMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enabled','success');
      document.title = 'Light mode is enabled';
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Textbox mode={mode} showAlert={showAlert}/>}/>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/simpletext" element={<Simpletext />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;