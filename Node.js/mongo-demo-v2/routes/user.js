const express = require("express");
const router = express.Router();
const User = require("../model/User");

// 新增用戶
router.post("/", async (req, res) => {
  const { userId, userName } = req.body;
  const userData = await User.create({ userId, userName });
  res.send(userData);
});

// 查詢所有用戶
router.get("/", async (req, res) => {
  const usersData = await User.find().sort({userId:1})
  res.send(usersData);
});

// 查詢指定用戶
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const userData = await User.findById(id);
  res.send(userData);
});

// 刪除指定用戶 (不回覆資料)
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const userData = await User.findById(id).deleteOne();
  res.send(userData);
});

// 更新指定用戶資料 (不回覆資料)
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const userData = await User.findById(id).updateOne({
    auth: false,
  });
  res.send(userData);
});

module.exports = router;
