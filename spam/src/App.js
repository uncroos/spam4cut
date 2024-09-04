import React, { useState } from "react";
import WebcamCapture from "./WebcamCapture";
import PhotoFrame from "./PhotoFrame";
import DownloadButton from "./DownloadButton";
import StartScreen from "./StartScreen";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [isCapturing, setIsCapturing] = useState(false);
  const [showStartScreen, setShowStartScreen] = useState(true);

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
    setIsCapturing(true);
  };

  return (
    <div className="App">
      {showStartScreen ? (
        <StartScreen onStart={handleStart} />
      ) : isCapturing ? (
        <WebcamCapture addPhoto={addPhoto} photoCount={photos.length} />
      ) : (
        <div>
          <PhotoFrame photos={photos} />
          <DownloadButton />
        </div>
      )}
    </div>
  );
}

export default App;
