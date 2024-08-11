import "./App.css";
// import { BrowserRouter as Route, Routes, Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Homescreen";
import Navbar from "./Pages/Home/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 not fount</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
