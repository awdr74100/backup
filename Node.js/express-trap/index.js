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

const m2 = async (req, res, next) => {
  console.log("App Middleware Active 2");
  //   next();
  // try {
  // throw new Error("Go");
  // } catch (error) {
  //   console.log('EV',error.message);
  // throw new Error("Bang")
  //   // next(new Error("dw"))
  // }
  // next(new Error("Go"))
  // return Promise.resolve(123)
  next();
};

const m3 = (req, res, next) => {
  console.log("App Middleware Active 3");
  next();
};

const e2 = (err, req, res, next) => {
  console.log("App Error Middleware Active 2");
  return next();
};

app.use(m1, m2);

app.use("/api", m1, m2, routes, e2, m3);

app.use((req, res, next) => {
  console.log("App Middleware Active 4");
  res.send({ title: "App Middleware Active 4" });
});

app.use((err, req, res, next) => {
  console.log("App Error Middleware Active 1");
  res.status(500).send({ title: err.message });
});

app.listen(port, () => console.log(""));
