import "./App.css";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React,{useState} from "react";

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not

  const toggleMode=()=>{
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      document.title="TextUtils-Dark mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title="TextUtils-Light mode"
    }
  } 
  return (
    <>
    {/* <Router> */}
      {/* <Navbar title={"TextUtils"} aboutText="About TextUtils"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      {/* <Routes>
            <Route exact path="/about" element={<About />}>
            </Route> */}
            {/* <Route path="/home" element={<TextForm heading="Enter text to analyze"  mode={mode}  />}> */}
            <TextForm heading="Enter text to analyze"  mode={mode}  />
            {/* { </Route>
          </Routes> */}
      </div> 
      {/* } */}
      {/* </Router> */}
    </>
  );
}

export default App;
