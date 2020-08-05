const express = require("express");
const app = express();
const multer = require("multer");
const bodyParser = require("body-parser");
const cors = require("cors");
const FormData = require("form-data");
const { json } = require("body-parser");
const axios = require("axios").default;
const imgur = require("imgur");
const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      cb(new Error("Please upload an image"));
    }
    cb(null, true);
  },
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

const errorHandler = (err, req, res, next) => {
  res.send(err.message);
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", upload.single("image"), errorHandler, async (req, res) => {
  const url = "https://api.imgur.com/3/image";
  const accessToken = "";
  // const formData = new FormData();

  // const header = {
  //   Authorization: `Bearer ${accessToken}`,
  //   // "content-type": "multipart/form-data",
  // };
  axios
    .post(
      url,
      {
        image: req.file.buffer.toString("base64"),
        album: "2AkrbfT",
        name: req.file.originalname,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((image) => {
      console.log(image.data.data.link);
      res.send(image.data.data.link);
    })
    .catch((err) => {
      console.log(err.response);
    });
  //   axios({
  //     method: "POST",
  //     url: url,
  //     headers: {
  //       // 'content-type': 'multipart/form-data',
  //       authorization: `Bearer ${accessToken}`,
  //     },
  //     data: formData,
  //   })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //     });
  //   res.send("file");
});

app.post("/new", async (req, res) => {
  const url = "https://api.imgur.com/oauth2/token";
  axios({
    method: "POST",
    url: url,
    // headers: {
    //   "Content-Type": "application/x-www-form-urlencoded",
    // },
    data: {
      refresh_token: "",
      client_id: "",
      client_secret: "",
      grant_type: "refresh_token",
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err.message);
      res.send("err");
    });
});
app.listen(4000, () => {
  console.log(`開啟 port 為 300 的 localhost`);
});
