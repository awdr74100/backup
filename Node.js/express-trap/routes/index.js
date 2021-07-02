const { Router } = require("express");

const router = Router();

router.use((req, res, next) => {
  console.log("Inner Middleware Active 1");
  next();
});

router.post(
  "/check",
  (req, res, next) => {
    console.log("Inner Middleware Active 2");
    next();
  },
  async (req, res, next) => {
    console.log("Inner Router Middleware Active 1");
    next(new Error("Go")); // 不能使用 throw new Error()
    // throw new Error("Go");
  }
);

router.use((err, req, res, next) => {
  console.log("Inner Error Middleware Active 1");
  // next(new Error("Go Go"))
  throw new Error("GO Go"); // 兩種方式都可以
});

module.exports = router;
