const express = require("express");
const engine = require("ejs-locals");

const app = express();

app.use(express.static("./public"));

// 註冊 ejs
app.set("view engine", "ejs");
app.set("views", "./views");

// 更改 ejs 引擎
app.engine("ejs", engine);

app.get("/", (req, res) => {
  res.render("index", {
    title: "賣場首頁",
    msg: "<span>歡迎到賣場首頁</span>",
    products: ["機關槍", "手槍", "手榴彈"],
    vip: true
  });
});

app.get("/login", (req, res) => {
  res.render("login", {
    title: "登入頁面",
    msg: "<span>歡迎到登入首頁</span>",
    users: ["Roya", "Eric", "Owen"],
    vip: false
  });
});

app.get("/signin", (req, res) => {
  res.send("你是誰！");
  console.log("有人造訪囉");
});

// 設置 port
const port = process.env.PORT || 3000;
app.listen(port);
