import React, { useState } from "react";
import WebcamCapture from "./WebcamCapture";
import PhotoFrame from "./PhotoFrame";
import QRCodeGenerator from "./QRCodeGenerator";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const addPhoto = (photo) => {
    if (photos.length < 4) {
      setPhotos((prevPhotos) => [...prevPhotos, photo]);
    }
    if (photos.length + 1 === 4) {
      setIsComplete(true);
    }
  };

  return (
    <div className="App">
      <h1>인생네컷</h1>
      {!isComplete ? (
        <div className="webcam-container">
          <WebcamCapture addPhoto={addPhoto} />
          <p>{photos.length} / 4장</p>
        </div>
      ) : (
        <div>
          <PhotoFrame photos={photos} />
          <QRCodeGenerator photos={photos} />
          <button onClick={() => setPhotos([]) & setIsComplete(false)}>
            다시 찍기
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
