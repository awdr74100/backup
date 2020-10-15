const express = require("express");
const router = express.Router();
const Admin = require("../model/admin");

// register
router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.create({
      email,
      password,
    });
    console.log(admin);
    res.send(admin);
  } catch (error) {
    res.send(error);
  }
});

router.post("/login", async (req, res) => {
  const admin = await Admin.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  console.log(admin);
  res.send(admin);
});

router.get("/", async (req, res) => {
  const admin = await Admin.find({});
  res.send(admin);
});

module.exports = router;
