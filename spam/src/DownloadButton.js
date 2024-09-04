import React from "react";
import html2canvas from "html2canvas";
import "./DownloadButton.css";

const DownloadButton = () => {
  const downloadImage = () => {
    const frame = document.querySelector(".photo-frame");
    if (frame) {
      html2canvas(frame, {
        width: 500, // Set the width of the captured canvas
        height: 800, // Set the height of the captured canvas
      }).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "insaengnecut.png";
        link.click();
      });
    } else {
      alert("사진이 준비되지 않았습니다.");
    }
  };

  const handleQRClick = () => {
    alert("QR 버튼이 클릭되었습니다.");
  };

  return (
    <div className="download-box">
      <button className="download-button" onClick={downloadImage}>
        다운로드
      </button>
      <button className="qr-button" onClick={handleQRClick}>
        QR
      </button>
    </div>
  );
};

export default DownloadButton;
