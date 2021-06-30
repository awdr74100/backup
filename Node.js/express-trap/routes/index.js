const { Router } = require("express");

const router = Router();

router.post("/check", (req, res, next) => {
  console.log("Inner Router Middleware Active 1");
  next(new Error("Go"));
});

module.exports = router;
