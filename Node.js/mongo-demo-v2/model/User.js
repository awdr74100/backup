const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    // _id: {
    //   type: String,
    //   required: true,
    // },
    userId: {
      type: String,
      required: true,
      // unique: true,
    },
    userName: {
      type: String,
      required: true,
    },
    auth: {
      type: Boolean,
      required: true,
      default: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now(),
    },
  }
  // { _id: false }
);

module.exports = mongoose.model("User", UserSchema);
