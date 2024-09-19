import React, { useRef, useState, useEffect, useCallback } from "react";
import Webcam from "react-webcam";
import "./WebcamCapture.css"; // CSS 파일 임포트

const WebcamCapture = ({ addPhoto, photoCount }) => {
  const webcamRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [countdown, setCountdown] = useState(0);

  // MP3 사운드 재생 함수
  const playSound = () => {
    const audio = new Audio("./mp3.mp3"); // MP3 파일 경로
    audio.play();
  };

  const capture = () => {
    if (photoCount >= 4) return; // 4장의 사진이 모두 찍힌 경우
    setCapturing(true);
    setCountdown(0); // 4초 카운트다운 시작
  };

  const handleAddPhoto = useCallback(
    (imageSrc) => {
      addPhoto(imageSrc);
    },
    [addPhoto]
  );

  const cropImage = (imageSrc) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = 235;
        canvas.height = 364;
        const ctx = canvas.getContext("2d");

        // 이미지의 중심을 기준으로 잘라냄
        const startX = (img.width - 235) / 2;
        const startY = (img.height - 364) / 2;

        ctx.drawImage(img, startX, startY, 235, 364, 0, 0, 235, 364);
        const croppedImageSrc = canvas.toDataURL("image/jpeg");
        resolve(croppedImageSrc);
      };
    });
  };

  useEffect(() => {
    let timer;
    if (capturing && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0 && capturing) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        cropImage(imageSrc).then((croppedImage) => {
          handleAddPhoto(croppedImage); // useCallback으로 감싼 함수 호출
          playSound(); // 사진 찍을 때마다 사운드 재생
        });
      }
      setCapturing(false);
    }
    return () => clearTimeout(timer);
  }, [capturing, countdown, handleAddPhoto]);

  return (
    <div className="webcam-container">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="webcam" // CSS 클래스 적용
      />
      <p>사진 찍은 개수: {photoCount} / 4</p> {/* 찍힌 사진 개수 표시 */}
      <div
        className={`camera-icon ${capturing ? "capturing" : ""}`}
        onClick={capture}
        title="사진 찍기"
      >
        <img src="./camera.png" alt="사진 찍기" />
      </div>
      {capturing && countdown > 0 && (
        <div className="countdown-timer">{countdown}초</div>
      )}
    </div>
  );
};

export default WebcamCapture;
