var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log(req.session);
  
  res.cookie("name", "mary", {
    maxAge: 10000,
    httpOnly: true
  });
  res.render("index", {
    userName: req.session.username,
    email: req.session.email
  });
});

router.post("/", (req, res) => {
  req.session.username = req.body.username;
  req.session.email = req.body.email;
  res.redirect("/");
});

module.exports = router;
