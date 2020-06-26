const express = require("express");
const router = express.Router();
const User = require("../models/user");


router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

router.get("/:id", getUser, (req, res) => {
  res.send(res.user);
});

router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    msg: req.body.msg,
  });
  try {
    const newUser = await user.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

router.patch("/:id", getUser, async (req, res) => {
  if (req.body.name !== null) {
    res.user.name = req.body.name;
  }
  if (req.body.msg !== null) {
    res.user.msg = req.body.msg;
  }
  try {
    const updateUser = await res.user.save();
    res.send(updateUser);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.send({ message: "delete success" });
  } catch (error) {
    res.send({
      msg: error.message,
    });
  }
});

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user === null) {
      return res.status(404).send({ msg: "cannot find subscriber" });
    }
  } catch (error) {
    return res.status(500).send({ msg: error.message });
  }
  res.user = user;
  next();
}

module.exports = router;
