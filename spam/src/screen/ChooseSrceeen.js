import React, { useState } from "react";
import "./ChooseSrceeen.css";

const ChooseScreen = ({ selectFrame }) => {
  const [selectedFrame, setSelectedFrame] = useState("final_frame"); // 초기 선택된 프레임 설정

  const handleFrameSelect = (frame) => {
    setSelectedFrame(frame);
  };

  const handleNext = () => {
    if (selectedFrame) {
      selectFrame(selectedFrame); // 선택된 프레임을 부모 컴포넌트에 전달
    } else {
      alert("프 레임을 선택해주세요.");
    }
  };

  return (
    <div className="choose-screen">
      <h1>사진을 찍을 프레임을 선택하세요</h1>
      <div className="frame-container">
        <div
          className={`frame-option ${
            selectedFrame === "final_frame" ? "selected" : ""
          }`}
          onClick={() => handleFrameSelect("final_frame")}
        >
          <div className="frame-image final-frame"></div>
        </div>
        <div
          className={`frame-option ${
            selectedFrame === "mabear_frame" ? "selected" : ""
          }`}
          onClick={() => handleFrameSelect("mabear_frame")}
        >
          <div className="frame-image mabear-frame"></div>
        </div>
        <div
          className={`frame-option ${
            selectedFrame === "cheese_frame" ? "selected" : ""
          }`}
          onClick={() => handleFrameSelect("cheese_frame")}
        >
          <div className="frame-image cheese-frame"></div>
        </div>{" "}
        <div
          className={`frame-option ${
            selectedFrame === "yaohan_frame" ? "selected" : ""
          }`}
          onClick={() => handleFrameSelect("yaohan_frame")} // yaohan_frame 오타 수정
        >
          <div className="frame-image yaohan-frame"></div>{" "}
          {/* CSS 클래스 이름 일치 확인 */}
        </div>
      </div>
      <button className="next-button" onClick={handleNext}>
        다음 단계
      </button>
    </div>
  );
};

export default ChooseScreen;
