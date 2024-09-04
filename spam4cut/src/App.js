import React from "react";
import { Routes, Route } from "react-router-dom";
import StartScreen from "./components/StartScreen";
import PhotoCapture from "./components/PhotoCapture";
import ReviewPhotos from "./components/ReviewPhotos";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/capture" element={<PhotoCapture />} />
        <Route path="/review" element={<ReviewPhotos />} />
      </Routes>
    </div>
  );
}

export default App;
