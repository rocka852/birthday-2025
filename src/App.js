import logo from './logo.svg';
import './App.css';
//import { Routes, Route, Navigate } from "react-router";
import { HashRouter } from "react-router-dom"
import Birthday from "./Birthday-2025"
//import Greetings from "./Birthday-2025/Greetings" 
// you can call it anything you want but first letter must capitalized
// import from Greetings or Greetings/index.jsx both work
//import Photos from "./Birthday-2025/Photos"


function App() {
  return (
    <HashRouter>
      <div>
        <Birthday />
      </div>
    </HashRouter>    
  );
}

export default App;
