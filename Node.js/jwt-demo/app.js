const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const { secretKey } = require("./constant");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5500",
  })
);

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// expressjwt
app.use(
  expressJwt({
    secret: secretKey,
    getToken: function fromHeaderOrQuerystring(req) {
      if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
      ) {
        return req.headers.authorization.split(" ")[1];
      } else if (req.query && req.query.token) {
        return req.query.token;
      } else if (req.cookies.jwtToken) {
        return req.cookies.jwtToken;
      }
      return null;
    },
  }).unless({
    path: ["/login"],
  })
);

// login
app.post("/login", (req, res) => {
  const { userEmail, userPassword } = req.body;
  const tokenObj = {
    userEmail,
    userPassword,
  };
  let token = jwt.sign(tokenObj, secretKey, {
    expiresIn: 10, // 授权时效24小时
  });
  res.cookie("jwtToken", token, {
    maxAge: 10000,
    httpOnly: true,
  });
  res.send({
    success: true,
    message: `Hi`,
    // token,
  });
});

app.post("/check", (req, res) => {
  console.log(12443);
  console.log(req.user);
  console.log();
  //   const content = req.user;
  //   const tokenObj = {
  //     email: req.user.email,
  //     password: req.user.password,
  //   };
  //   let token = jwt.sign(tokenObj, secretKey, {
  //     expiresIn: 10, // 授权时效24小时
  //   });
  //   console.log(content);

  res.send({
    success: true,
    // token,
  });
});

// app.post("/logout", (req, res) => {});

app.use(function (err, req, res, next) {
  console.log(123);
    console.log(err);
  if (err.name === "UnauthorizedError") {
    // res.status(401).send("invalid token");
    res.send({
      msg: "過期了",
    });
  }
});

app.listen(3000);
