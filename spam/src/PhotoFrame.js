import React from "react";
import "./PhotoFrame.css";

const PhotoFrame = ({ photos }) => {
  return (
    <div className="photo-frame">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`사진 ${index + 1}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ))}
      {photos.length > 0 && <div className="spam-area">SPAM</div>}
    </div>
  );
};

export default PhotoFrame;
