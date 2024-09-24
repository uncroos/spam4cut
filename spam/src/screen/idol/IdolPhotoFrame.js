import React from "react";
import "./IdolPhotoFrame.css";

// 사용되지 않는 변수 제거 또는 주석 처리
// import PhotoFrame from './PhotoFrame';

const frameLayouts = {
  park_frame: [
    { width: 527, height: 352, top: 49, left: 47 },
    { width: 527, height: 352, top: 426, left: 47 },
    { width: 527, height: 352, top: 803, left: 47 },
    { width: 527, height: 352, top: 1180, left: 47 },
    { width: 527, height: 352, top: 49, left: 626 },
    { width: 527, height: 352, top: 426, left: 626 },
    { width: 527, height: 352, top: 803, left: 626 },
    { width: 527, height: 352, top: 1180, left: 626 },
  ],
};

const IdolPhotoFrame = ({ photos, frameType }) => {
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

// 컴포넌트가 정의된 후 내보내기 설정
export default IdolPhotoFrame;
