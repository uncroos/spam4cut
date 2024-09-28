import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartScreen from "./screen/StartScreen";
import ChooseScreen from "./screen/ChooseScreeen";
import WebcamCapture from "./screen/WebcamCapture";
import PhotoFrame from "./screen/PhotoFrame";
import Idolwebcam from "./screen/idol/Idolwebcam";
import DownloadButton from "./screen/DownloadButton";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [isCapturing, setIsCapturing] = useState(false);
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [selectedFrame, setSelectedFrame] = useState(null);

  const addPhoto = (photo) => {
    if (photos.length < 4) {
      setPhotos((prevPhotos) => [...prevPhotos, photo]);
    }
    if (photos.length === 3) {
      setIsCapturing(false);
    }
  };

  const handleStart = () => {
    setShowStartScreen(false);
  };

  const handleFrameSelect = (frame) => {
    setSelectedFrame(frame);
    setIsCapturing(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            showStartScreen ? (
              <StartScreen onStart={handleStart} />
            ) : !selectedFrame ? (
              <ChooseScreen selectFrame={handleFrameSelect} />
            ) : isCapturing ? (
              <WebcamCapture addPhoto={addPhoto} photoCount={photos.length} />
            ) : (
              <div>
                <PhotoFrame photos={photos} frameType={selectedFrame} />
                <DownloadButton />
              </div>
            )
          }
        />
        <Route path="/idol-webcam" element={<Idolwebcam />} />
      </Routes>
    </Router>
  );
}

export default App;
