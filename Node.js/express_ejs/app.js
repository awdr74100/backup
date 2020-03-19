const express = require("express");
const engine = require("ejs-locals");
const bosyParser = require("body-parser");
const user = require("./routes/user");

const app = express();

// 配置靜態檔案根目錄
app.use(express.static("./public"));

// 配置 body.parser
app.use(bosyParser.json());
app.use(
  bosyParser.urlencoded({
    extended: false
  })
);

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

app.get("/search", (req, res) => {
  res.render("search");
});

app.post("/searchList", (req, res) => {
  console.log(req.body);
  console.log(req.body.title);
  console.log(req.body.content);
  res.redirect("search");
});

app.post("/searchAjax", (req, res) => {
  console.log(req.body.content);
  console.log(req.body.list[0]);
  console.log("有人造訪囉");
  let a = req.body.content;
  res.send({
    res: req.body.list[0]
  });
});

app.use("/user",user);

// 設置 port
const port = process.env.PORT || 3000;
app.listen(port);
