const express = require("express");
const app = express();
// 增加靜態檔案路徑
app.use(express.static("./public"));

const login = (req, res, next) => {
  console.log("登入成功");
  if (req.url == "/") {
    console.log("嘿嘿");
  }
  next();
};

app.get("/", login, (req, res) => {
  // res.send("<h1>首頁</h1>");
  res.send("<img src='/img/test.jpg'>");
});

app.use((req, res, next) => {
  res.status(404).send("抱歉你的頁面找不到");
});

app.use((a, b, c, d) => {
  c.status(500).send("程式有些問題");
});

const port = process.env.PORT || 3000;
app.listen(port);
