const { Router } = require("express");
const sendMail = require("../utils/sendMail");

const router = Router();

router.post("/send", async (req, res) => {
  try {
    await sendMail("4a6g0068@stust.edu.tw");

    res.send({ success: true, message: "成功寄出" });
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: error.message });
  }
});

module.exports = router;
