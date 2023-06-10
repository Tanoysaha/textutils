// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   // Link,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert=(message,type)=>{
setalert({
  msg: message,
  type:type,
})
setTimeout(() => {
  setalert(null)
}, 2000);
  }

const toggleMode=()=>{
  if(mode==='light'){
    setmode('dark') ;
     document.body.style.backgroundColor='black';
     showAlert('Dark mode enabled','success');
  }else{
    setmode('light');
    document.body.style.backgroundColor='white';
    showAlert('Light mode enabled','success');
  }
  
}

  return (
    <>
  {/* <createBrowserRouter> */}
<Navbar title1="Textutils" mode={mode} toggleMode={toggleMode} title2="Home" title3="About"/>
<Alert alert={alert} />


  <div className="container my-3">
  <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
     {/* <RouterProvider> 
      <Route path="/about" element={<About />}> 
      </Route> 
      <Route path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}> 
      </Route> 
      </RouterProvider> */}
       </div>
  {/* </createBrowserRouter>  */}
  
    </>
  );
}

export default App;
