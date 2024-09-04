import React from "react";
import html2canvas from "html2canvas";

const DownloadButton = () => {
  const downloadImage = () => {
    const frame = document.querySelector(".photo-frame");
    html2canvas(frame).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "insaengnecut.png";
      link.click();
    });
  };

  return <button onClick={downloadImage}>다운로드</button>;
};

export default DownloadButton;
