const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  console.log(req.body);
  res.send({
    msg: "成功註冊"
  });
});

router.get("/login", (req, res) => {
  console.log(req.body);
  res.send({
    msg: "成功登入"
  });
});

module.exports = router