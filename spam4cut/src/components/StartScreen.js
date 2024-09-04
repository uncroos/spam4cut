import React from "react";
import { useNavigate } from "react-router-dom";

const StartScreen = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/capture");
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src="/spam_logo.png" alt="App Logo" style={styles.logo} />
      </div>
      <button style={styles.startButton} onClick={handleStartClick}>
        시작하기
      </button>
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
    backgroundColor: "#3F3F3F", // Updated background color
    fontFamily: "CookieRunBlack", // Apply custom font
  },
  logoContainer: {
    marginBottom: "20px",
  },
  logo: {
    width: "300px",
    height: "300px",
  },
  startButton: {
    padding: "10px 20px",
    fontSize: "20px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontFamily: "CookieRunBlack", // Apply custom font to button text
  },
};

export default StartScreen;
