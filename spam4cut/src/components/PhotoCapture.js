import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";

const PhotoCapture = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const capture = () => {
    const capturedImage = webcamRef.current.getScreenshot();
    setImageSrc(capturedImage);
  };

  const handleNext = () => {
    navigate("/review", { state: { imageSrc } });
  };

  return (
    <div style={styles.container}>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        style={styles.webcam}
      />
      <button onClick={capture} style={styles.captureButton}>
        사진 찍기
      </button>
      {imageSrc && (
        <div style={styles.previewContainer}>
          <img src={imageSrc} alt="Captured" style={styles.previewImage} />
          <button onClick={handleNext} style={styles.nextButton}>
            다음
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#fff",
  },
  webcam: {
    width: "100%",
    maxWidth: "600px",
    borderRadius: "10px",
    overflow: "hidden",
  },
  captureButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
  previewContainer: {
    marginTop: "20px",
    textAlign: "center",
  },
  previewImage: {
    width: "100%",
    maxWidth: "300px",
    borderRadius: "10px",
  },
  nextButton: {
    marginTop: "10px",
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#28a745",
    color: "#fff",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
};

export default PhotoCapture;
