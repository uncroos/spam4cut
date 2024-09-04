import React from "react";
import html2canvas from "html2canvas";

const DownloadButton = () => {
  const downloadImage = () => {
    const frame = document.querySelector(".photo-frame");
    if (frame) {
      html2canvas(frame).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "insaengnecut.png";
        link.click();
      });
    } else {
      alert("사진이 준비되지 않았습니다.");
    }
  };

  return (
    <button onClick={downloadImage} style={{ marginTop: "20px" }}>
      다운로드
    </button>
  );
};

export default DownloadButton;
