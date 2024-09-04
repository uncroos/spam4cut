import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
// Import QRCodeCanvas from qrcode.react
import { QRCodeCanvas } from "qrcode.react";

const ReviewPhotos = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageSrc } = location.state || {};

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = "photo.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleRetake = () => {
    navigate("/capture");
  };

  // QR 코드로 너무 긴 데이터를 전달하지 않기 위해 샘플 데이터 사용
  const shortenedUrl = imageSrc ? imageSrc.slice(0, 50) : "";

  return (
    <div style={styles.container}>
      {imageSrc ? (
        <>
          <div style={styles.photosContainer}>
            <img src={imageSrc} alt="Captured" style={styles.photo} />
            {shortenedUrl && (
              <QRCodeCanvas value={shortenedUrl} style={styles.qrCode} />
            )}
          </div>
          <div style={styles.buttonsContainer}>
            <button onClick={handleDownload} style={styles.downloadButton}>
              사진 다운로드
            </button>
            <button onClick={handleRetake} style={styles.retakeButton}>
              다시 찍기
            </button>
          </div>
        </>
      ) : (
        <div style={styles.error}>No photo captured. Please take a photo.</div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#fff",
  },
  photosContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  photo: {
    width: "100%",
    maxWidth: "300px",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  qrCode: {
    marginBottom: "20px",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  downloadButton: {
    marginBottom: "10px",
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
  retakeButton: {
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#dc3545",
    color: "#fff",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
  error: {
    color: "#dc3545",
    fontSize: "18px",
    fontWeight: "bold",
  },
};

export default ReviewPhotos;
