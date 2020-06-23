const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.post("/test", (req, res) => {
  res.send({
    name: "roya",
    age: 18,
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`開啟 port 為 ${port} 的 localhsot`);
});
