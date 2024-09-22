import React, { useState } from "react";
import StartScreen from "./screen/StartScreen";
import ChooseScreen from "./screen/ChooseSrceeen"; // 프레임 선택 화면 추가
import WebcamCapture from "./screen/WebcamCapture"; // 예시 프레임 카메라 컴포넌트
import PhotoFrame from "./screen/PhotoFrame";
import DownloadButton from "./screen/DownloadButton";

import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [isCapturing, setIsCapturing] = useState(false);
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [selectedFrame, setSelectedFrame] = useState(null); // 선택된 프레임 상태 추가

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
    setSelectedFrame(frame); // 선택한 프레임 설정
    setIsCapturing(true); // 사진 촬영 시작
  };

  return (
    <div className="App">
      {showStartScreen ? (
        <StartScreen onStart={handleStart} />
      ) : !selectedFrame ? ( // 프레임 선택 전 화면 표시
        <ChooseScreen selectFrame={handleFrameSelect} />
      ) : isCapturing ? (
        <WebcamCapture addPhoto={addPhoto} photoCount={photos.length} />
      ) : (
        <div>
          <PhotoFrame photos={photos} frameType={selectedFrame} />{" "}
          {/* 선택된 프레임에 따라 PhotoFrame 렌더링 */}
          <DownloadButton />
        </div>
      )}
    </div>
  );
}

export default App;
