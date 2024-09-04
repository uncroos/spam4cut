import React from "react";

const PhotoFrame = ({ photos }) => {
  return (
    <div
      className="photo-frame"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "10px",
      }}
    >
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`사진 ${index + 1}`}
          style={{ width: "100%", height: "auto" }}
        />
      ))}
    </div>
  );
};

export default PhotoFrame;
