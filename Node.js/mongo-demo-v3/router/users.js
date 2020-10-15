const express = require("express");
const router = express.Router();
const User = require("../model/user");
// const { findByIdAndDelete } = require("../model/user");

// create
router.post("/", async (req, res) => {
  const user = new User({
    _id: req.body.uid,
  });
  try {
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    console.log("err");
    res.send(error);
  }
});

// read
router.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// read one
router.get("/:uid", async (req, res) => {
  const { uid } = req.params;
  const user = await User.findById(uid);
  console.log(user.approvalAt + "\n" + user.createdAt);
  console.log(new Date(user.approvalAt).getTime() === new Date(user.createdAt).getTime());
  console.log(new Date(user.approvalAt).getTime() + '\n' + new Date(user.createdAt).getTime());
  console.log(new Date(user.approvalAt).getFullYear());
  console.log(new Date(user.approvalAt).getMonth() + 1);
  console.log(new Date(user.approvalAt).getDate());
  console.log(new Date(user.approvalAt).getHours());
  console.log(new Date(user.approvalAt).getMinutes());
  console.log(new Date(user.approvalAt).getSeconds());
  res.send(user);
});

// approval one
router.post("/:uid", async (req, res) => {
  const { uid } = req.params;
  const { userName, userNumber } = req.body;
  const user = await User.findByIdAndUpdate(uid, {
    userName,
    userNumber,
    approvalAt: Date.now(),
  });
  res.send(user);
});

// delete one
router.delete("/:uid", async (req, res) => {
  const { uid } = req.params;
  const user = await User.findByIdAndDelete(uid);
  res.send(user);
});

module.exports = router;
