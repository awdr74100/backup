var express = require("express");
const nodemailer = require("nodemailer");
var router = express.Router();
const csrf = require("csurf");
require("dotenv").config();
const csrfProtection = csrf({ cookie: true });

router.get("/", csrfProtection, function(req, res) {
  res.render("contact", {
    csrfToken: req.csrfToken(),
    errors: req.flash("errors")
  });
});
router.get("/review", function(req, res) {
  res.render("contactReview");
});
router.post("/post", csrfProtection, function(req, res) {
  if (req.body.username === "") {
    req.flash("errors", "姓名不可為空");
    res.redirect("/contact");
    return;
  }
  // 發信人
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.gmail_user,
      pass: process.env.gmail_password
    }
  });
  // 相關郵件內容
  let mailOptions = {
    from: '"藍奕濡"<a78945612385238@gmail.com>',
    to: "a78945612385238@gmail.com",
    subject: `${req.body.username} 寄了一封信給你`,
    text: `${req.body.description}`
  };
  // 送出
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    } else {
      res.redirect("review");
    }
  });
});
module.exports = router;
