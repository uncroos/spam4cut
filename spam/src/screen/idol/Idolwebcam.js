import React, { useRef, useState, useEffect, useCallback } from "react";
import Webcam from "react-webcam";
import "./Idolwebcam.css";

const Idolwebcam = ({ addPhoto, photoCount }) => {
  // 컴포넌트 이름을 'Idolwebcam'으로 수정
  const webcamRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const deviceId =
    "6c81289c60d5073d82a1cf139a39347f215acfc30f3b3f3f36a90a98c92a71f8"; // 웹캠 id

  const playSound = () => {
    const audio = new Audio("./mp3.mp3");
    audio.play();
  };

  const capture = () => {
    if (photoCount >= 4 || capturing) return;
    setCapturing(true);
    setCountdown(5);
    setPhotoIndex(0);
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
        canvas.width = 960;
        canvas.height = 1280;
        const ctx = canvas.getContext("2d");

        const scale = Math.max(
          canvas.width / img.width,
          canvas.height / img.height
        );
        const x = canvas.width / 2 - (img.width / 2) * scale;
        const y = canvas.height / 2 - (img.height / 2) * scale;

        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        const croppedImageSrc = canvas.toDataURL("image/jpeg", 1.0);
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
    } else if (
      countdown === 0 &&
      capturing &&
      photoIndex < 4 &&
      !isProcessing
    ) {
      setIsProcessing(true);
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        cropImage(imageSrc).then((croppedImage) => {
          handleAddPhoto(croppedImage);
          playSound();
          setPhotoIndex(photoIndex + 1);
          setCountdown(5);
          setIsProcessing(false);
        });
      } else {
        setIsProcessing(false);
      }
    }

    if (photoIndex >= 4 || photoCount >= 4) {
      setCapturing(false);
    }

    return () => clearTimeout(timer);
  }, [
    capturing,
    countdown,
    handleAddPhoto,
    photoIndex,
    photoCount,
    isProcessing,
  ]);

  return (
    <div className="webcam-container">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="webcam"
        style={{ transform: "scaleX(-1)" }}
        videoConstraints={{
          width: 960,
          height: 1280,
          deviceId: deviceId,
          facingMode: "user",
        }}
      />
      {capturing && countdown > 0 && (
        <div className="countdown-overlay">{countdown}</div>
      )}
      <div className="controls">
        <p>사진 찍은 개수: {photoCount} / 4</p>
        <div
          className={`camera-icon ${capturing ? "capturing" : ""}`}
          onClick={capture}
          title="사진 찍기"
          style={{
            cursor: capturing ? "not-allowed" : "pointer",
            opacity: capturing ? 0.5 : 1,
          }}
        >
          <img src="/camera.png" alt="사진 찍기" />
        </div>
      </div>
    </div>
  );
};

export default Idolwebcam;
