// src/QRCodeGenerator.js
import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const QRCodeGenerator = ({ photos }) => {
  const [qrData, setQrData] = useState("");

  const handleGenerateQRCode = async () => {
    try {
      const formData = new FormData();
      photos.forEach((photo, index) => {
        formData.append(`photo${index}`, photo);
      });

      const response = await fetch("http://localhost:5001/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      // 이미지 URL들을 ','로 연결하여 QR 코드 데이터 생성
      const qrDataUrl = result.url;
      setQrData(qrDataUrl);
    } catch (error) {
      console.error("QR 코드 생성 중 오류 발생:", error);
    }
  };

  return (
    <div>
      <h2>QR 코드 다운로드</h2>
      <button onClick={handleGenerateQRCode}>QR 코드 생성</button>
      {qrData && <QRCodeSVG value={qrData} size={256} />}
      {/* QR 코드 데이터가 있을 때만 다운로드 링크 표시 */}
      {qrData && (
        <a href={qrData} download="photos.zip">
          <button>QR 코드 다운로드</button>
        </a>
      )}
    </div>
  );
};

export default QRCodeGenerator;
