const express = require("express");
const engine = require("ejs-locals");
const bodyParser = require("body-parser");
const app = express();
const admin = require("firebase-admin");

const serviceAccount = require("./node-demo-33747-firebase-adminsdk-pjtr6-0f0a8b3881.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://node-demo-33747.firebaseio.com"
});

const firebase_database = admin.database();

// 設置 AJAX 解析
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 設定靜態檔案根目錄
app.use(express.static("./public"));

// 設置 ejs
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("ejs", engine);

// router
app.get("/", (req, res) => {
  firebase_database.ref("todos").once("value", snapshot => {
    const data = snapshot.val();
    res.render("index", {
      todos: data
    });
  });
});

// 新增資料 - POST
app.post("/addTodo", (req, res) => {
  const content = req.body.content;
  const contentRef = firebase_database
    .ref("todos")
    .push({ content })
    .then(() => {
      firebase_database.ref("todos").once("value", snapshot => {
        res.send({
          success: true,
          result: snapshot.val(),
          message: "資料讀取成功"
        });
      });
    });
});

// 刪除資料 - POST
app.post("/deleteTodo", (req, res) => {
  const id = req.body.id;
  firebase_database
    .ref("todos")
    .child(id)
    .remove()
    .then(() => {
      firebase_database.ref("todos").once("value", snapshot => {
        res.send({
          success: true,
          result: snapshot.val(),
          message: "資料刪除成功"
        });
      });
    });
});

const port = process.env.PORT || 3000;
app.listen(port);
