const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    default: "unknown",
  },
  userNumber: {
    type: String,
    default: "unknown",
  },
  auth: {
    type: Boolean,
    default: true,
  },
  approvalAt: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
