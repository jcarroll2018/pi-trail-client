import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from '../NavBar'
import Home from '../Pages/Home'
import Camera from '../Pages/Camera'
import PiThings from '../Pages/PiThings'

// Routes for your webpage are defined here. You need to manually add it to the navbar files if you want it to show up there.
// It is possible to have "hidden" routes that are directly accessible, but do not show in the navbar if they are not added there.

const  App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/camera" element={<Camera/>} />
          <Route exact path="/piThings" element={<PiThings/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
