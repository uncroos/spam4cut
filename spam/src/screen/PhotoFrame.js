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
  park_frame: [
    { width: 527, height: 352, top: 49, left: 47 },
    { width: 527, height: 352, top: 426, left: 47 },
    { width: 527, height: 352, top: 803, left: 47 },
    { width: 527, height: 352, top: 1180, left: 47 },
    { width: 527, height: 352, top: 49, left: 626 }, // 오른쪽 상단
    { width: 527, height: 352, top: 426, left: 626 }, // 오른쪽 중간 위
    { width: 527, height: 352, top: 803, left: 626 }, // 오른쪽 중간 아래
    { width: 527, height: 352, top: 1180, left: 626 }, //
  ],
};

const PhotoFrame = ({ photos, frameType }) => {
  const layouts = frameLayouts[frameType] || [];

  // 'park_frame'일 경우에만 사진을 두 번 반복하여 8장으로 배열 생성
  const displayedPhotos =
    frameType === "park_frame" ? [...photos, ...photos] : photos;

  return (
    <div className="photo-frame">
      {displayedPhotos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`사진 ${index + 1}`}
          style={{
            width: `${layouts[index]?.width}px`,
            height: `${layouts[index]?.height}px`,
            top: `${layouts[index]?.top}px`,
            left: `${layouts[index]?.left}px`,
            position: "absolute",
            zIndex: 1,
            objectFit: "cover",
          }}
        />
      ))}
      <div
        className="frame-overlay"
        style={{
          backgroundImage: `url(/${frameType}.png)`,
        }}
      />
    </div>
  );
};

export default PhotoFrame;
