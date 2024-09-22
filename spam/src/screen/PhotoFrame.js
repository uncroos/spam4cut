import React from "react";
import "./PhotoFrame.css";

const frameLayouts = {
  spam_frame: [
    { width: 500, height: 700, top: 125, left: 88 },
    { width: 500, height: 700, top: 125, left: 612 },
    { width: 500, height: 700, top: 849, left: 88 },
    { width: 500, height: 700, top: 849, left: 612 },
  ],
  mabear_frame: [
    { width: 512, height: 612, top: 406, left: 63 },
    { width: 512, height: 612, top: 137, left: 626 },
    { width: 512, height: 612, top: 1050, left: 63 },
    { width: 512, height: 612, top: 781, left: 626 },
  ],
  cheese_frame: [
    { width: 512, height: 612, top: 406, left: 63 },
    { width: 512, height: 612, top: 137, left: 626 },
    { width: 512, height: 612, top: 1050, left: 63 },
    { width: 512, height: 612, top: 781, left: 626 },
  ],
  yohan_frame: [
    { width: 512, height: 612, top: 406, left: 63 },
    { width: 512, height: 612, top: 137, left: 626 },
    { width: 512, height: 612, top: 1050, left: 63 },
    { width: 512, height: 612, top: 781, left: 626 },
  ],
};

const PhotoFrame = ({ photos, frameType }) => {
  const layouts = frameLayouts[frameType] || [];

  return (
    <div
      className="photo-frame"
      style={{ backgroundImage: `url(/${frameType}.png)` }}
    >
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`사진 ${index + 1}`}
          className={`photo${index + 1}`}
          style={{
            width: layouts[index]?.width,
            height: layouts[index]?.height,
            top: layouts[index]?.top,
            left: layouts[index]?.left,
            position: "absolute",
          }}
        />
      ))}
    </div>
  );
};

export default PhotoFrame;
