const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const m1 = (req, res, next) => {
  console.log("App Middleware Active 1");
  next();
};

const m2 = (req, res, next) => {
  console.log("App Middleware Active 2");
  //   next();
  throw new Error("Go");
};

const m3 = (req, res, next) => {
  console.log("App Middleware Active 3");
  next();
};

const e2 = (err, req, res, next) => {
  console.log("App Error Middleware Active 2");
  return next(err);
};

app.use(m1, m2);

app.use("/api", m1, m2, routes, m3, e2);

app.use((req, res, next) => {
  console.log("App Middleware Active 4");
  res.send({ title: "App Middleware Active 4" });
});

app.use((err, req, res, next) => {
  console.log("App Error Middleware Active 1");
  res.status(500).send({ title: err.message });
});

app.listen(port, () => console.log(""));
