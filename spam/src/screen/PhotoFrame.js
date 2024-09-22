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
          className={`photo${index + 1}`} // photo1, photo2, photo3, photo4 클래스를 적용
        />
      ))}
    </div>
  );
};

export default PhotoFrame;
