// server.js (Node.js + Express)
const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors"); // 이전에 설치한 cors 모듈
const app = express();
const PORT = 5001;

// Multer 설정
const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 10 * 1024 * 1024 },
});

// CORS 설정
app.use(cors());

// 파일 업로드 및 URL 반환
app.post("/upload", upload.array("photos"), (req, res) => {
  const fileUrls = req.files.map(
    (file) => `http://localhost:${PORT}/uploads/${file.filename}`
  );
  res.json({ url: fileUrls.join(",") });
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// 루트 경로 ('/') 에 대한 GET 요청 처리 추가
app.get("/", (req, res) => {
  res.send("서버가 정상적으로 작동 중입니다!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
