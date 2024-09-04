import React, { useRef, useCallback } from "react";
import Webcam from "react-webcam";

const WebcamCapture = ({ addPhoto }) => {
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    addPhoto(imageSrc);
  }, [webcamRef, addPhoto]);

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={300}
        height={300}
      />
      <button onClick={capture}>사진 찍기</button>
    </div>
  );
};

export default WebcamCapture;
