import React, { useState } from "react";
import WebcamCapture from "./WebcamCapture";
import PhotoFrame from "./PhotoFrame";
import DownloadButton from "./DownloadButton";
import StartScreen from "./StartScreen";
import "./App.css"; // CSS 파일 임포트

function App() {
  const [photos, setPhotos] = useState([]);
  const [isCapturing, setIsCapturing] = useState(false); // 사진 촬영 모드 상태
  const [showStartScreen, setShowStartScreen] = useState(true); // 시작 화면 상태

  const addPhoto = (photo) => {
    if (photos.length < 4) {
      setPhotos((prevPhotos) => [...prevPhotos, photo]);
    }
    if (photos.length === 3) {
      setIsCapturing(false); // 네 장의 사진이 찍히면 촬영 모드 종료
    }
  };

  const handleStart = () => {
    setShowStartScreen(false); // 시작 버튼 클릭 시 시작 화면 숨기기
    setIsCapturing(true); // 사진 촬영 모드 시작
  };

  return (
    <div className="App">
      {showStartScreen ? (
        <StartScreen onStart={handleStart} />
      ) : isCapturing ? (
        <WebcamCapture
          addPhoto={addPhoto}
          photoCount={photos.length} // 찍힌 사진 개수 전달
        />
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
