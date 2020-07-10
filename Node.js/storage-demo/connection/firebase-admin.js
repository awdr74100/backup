// const { Storage } = require("@google-cloud/storage");
// const path = require("path");

// const storage = new Storage({
//   projectId: "storage-demo-47cd8",
//   keyFilename: path.resolve(
//     __dirname,
//     "./storage-demo-47cd8-firebase-adminsdk-dkjlc-086634d8cc.json"
//   ),
// });

// const bucket = storage.bucket("storage-demo-47cd8.appspot.com");

// module.exports = {
//   bucket,
// };

const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert({
    // key.json
  }),
  storageBucket: `${BUCKET}.storage-demo-47cd8`,
});

const bucket = admin.storage().bucket();

module.exports = {
  bucket,
};
