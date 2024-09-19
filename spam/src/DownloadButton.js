import React from "react";
import html2canvas from "html2canvas";
import "./DownloadButton.css";

const DownloadButton = () => {
  const downloadImage = () => {
    const frame = document.querySelector(".photo-frame");

    if (frame) {
      const elementWidth = frame.offsetWidth;
      const elementHeight = frame.offsetHeight;
      html2canvas(frame, {
        scale: window.devicePixelRatio, // 디바이스 픽셀 밀도에 맞게 스케일 조정
        useCORS: true, // 외부 리소스 CORS 문제 방지
        backgroundColor: null, // 투명 배경 유지
        windowWidth: elementWidth, // 요소의 너비로 캡처 크기 설정
        windowHeight: elementHeight, // 요소의 높이로 캡처 크기 설정
      }).then((canvas) => {
        // const img = new Image();
        // img.src = canvas.toDataURL("image/png");

        // img.onload = () => {
        //   const imgWidth = img.width;
        //   const imgHeight = img.height;

        //   // 원하는 너비와 높이 설정
        //   const desiredWidth = 500;
        //   const desiredHeight = 800;

        //   // 비율을 맞추기 위해 새로운 캔버스 생성
        //   const newCanvas = document.createElement("canvas");
        //   const ctx = newCanvas.getContext("2d");

        //   // 이미지의 비율을 유지하면서 새로운 캔버스 크기 설정
        //   if (imgWidth / imgHeight > desiredWidth / desiredHeight) {
        //     newCanvas.width = desiredWidth;
        //     newCanvas.height = Math.floor(
        //       (desiredWidth / imgWidth) * imgHeight
        //     );
        //   } else {
        //     newCanvas.height = desiredHeight;
        //     newCanvas.width = Math.floor(
        //       (desiredHeight / imgHeight) * imgWidth
        //     );
        //   }

        //   // 이미지 중앙에 배치
        //   ctx.drawImage(img, 0, 0, newCanvas.width, newCanvas.height);

        //   // 다운로드 링크 생성 및 클릭
        //   const link = document.createElement("a");
        //   link.href = newCanvas.toDataURL("image/png");
        //   link.download = "insaengnecut.png";
        //   link.click();

        const link = document.createElement("img");
        link.id = "mainImg";
        link.src = canvas.toDataURL("image/png");
        var imagObject = new Image();
        imagObject = link;
        var originalImage =
          '<img id="imageViewer" src="' +
          imagObject.src +
          '"height="' +
          100 +
          '%" width="' +
          100 +
          '%" />';

        var popup = window.open(
          "",
          "popup",
          "toolbar=no,menubar=no,width=200,height=150"
        );
        popup.document.open();
        popup.document.write("<html><head></head><body onload='print()'>");
        popup.document.write(originalImage);
        popup.document.write("</body></html>");
        popup.document.close();
        // };
      });
    } else {
      alert("사진이 준비되지 않았습니다.");
    }
  };

  const handleQRClick = () => {
    alert("QR 코드 생성 기능을 구현해야 합니다.");
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
