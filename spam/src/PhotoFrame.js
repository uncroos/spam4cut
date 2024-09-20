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
      {/* a.png 이미지 추가 */}
      {photos.length > 0 && (
        <div className="footer-image">
          <img src="./a.png" alt="footer" />
        </div>
      )}
    </div>
  );
};

export default PhotoFrame;
