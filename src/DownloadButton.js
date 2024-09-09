import React from "react";
import html2canvas from "html2canvas";
import "./DownloadButton.css";

const DownloadButton = () => {
  const downloadImage = () => {
    const frame = document.querySelector(".photo-frame");
    if (frame) {
      html2canvas(frame, {
        width: frame.offsetWidth, // Actual width of the element
        height: frame.offsetHeight, // Actual height of the element
        scale: 3, // Increase scale for better quality
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
    console.log("QR 버튼이 클릭되었습니다.");
    alert("QR 코드 생성 기능을 구현해야 합니다.");
    // QR 코드 생성을 위한 추가 기능을 여기에서 구현할 수 있습니다.
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
