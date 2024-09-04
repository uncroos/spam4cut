import React from "react";
import "./PhotoFrame.css";

const PhotoFrame = ({ photos }) => {
  return (
    <div className="photo-frame">
      <div className="photo-container">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`사진 ${index + 1}`}
            style={{ width: "100%", height: "auto" }}
          />
        ))}
        <div className="spam-area">SPAM</div>
      </div>
    </div>
  );
};

export default PhotoFrame;
