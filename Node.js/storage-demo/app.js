const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { bucket } = require("./connection/firebase-admin");
const multer = require("multer");
const { uuid } = require("uuidv4");

const uploader = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // keep images size < 5 MB
  },
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", uploader.single("image"), async (req, res) => {
  const token = uuid();
  const filename = `images/${req.file.originalname}`;
  const options = {
    gzip: true,
    metadata: {
      metadata: {
        firebaseStorageDownloadTokens: token,
      },
      contentType: req.file.mimetype,
      // cacheControl: "public, max-age=60",
    },
  };
  try {
    await bucket.file(filename).save(req.file.buffer, options);
    const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
      bucket.name
    }/o/${encodeURIComponent(filename)}?alt=media&token=${token}`;
    res.send({
      success: true,
      url: publicUrl,
    });
  } catch (error) {
    console.log(error);
  }
});

// app.post("/", uploader.single("image"), (req, res) => {
//   console.log(req.file);
//   const blob = bucket.file(`images/${req.file.originalname}`);
//   const blobStream = blob.createWriteStream({
//     metadata: {
//       contentType: req.file.mimetype,
//       metadata: {
//         firebaseStorageDownloadTokens: uuid(),
//       },
//     },
//   });
//   //   console.log(
//   //     "https://firebasestorage.googleapis.com/v0/b/storage-demo-47cd8.appspot.com/o/images%2Flogo.png?alt=media"
//   //   );

//   blobStream.on("error", (error) => console.log(error));
//   blobStream.on("finish", () => {
//     // const publicUrl = `https://storage.cloud.google.com/${bucket.name}/${encodeURIComponent(blob.name)}?hl=zh-tw`;
//     const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
//       bucket.name
//     }/o/${encodeURIComponent(blob.name)}?alt=media`;
//     // const publicUrl = format(
//     //   `https://storage.googleapis.com/${bucket.name}/${blob.name}`
//     // );
//     console.log(publicUrl);

//     res.send("Hello World");
//   });
//   blobStream.end(req.file.buffer);
// });

app.listen(3000, () => {
  console.log(`開啟 port 為 3000 的 localhost`);
});
