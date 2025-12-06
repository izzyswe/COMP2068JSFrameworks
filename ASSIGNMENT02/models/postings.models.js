const mongoose = require("mongoose");
const AccountModel = require("./account.models");

const newPostingSchema = new mongoose.Schema(
  {
    // Reference to the account who created the tweet
    account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account", // This matches AccountModel name
      required: true,
    },
    tweetPostImg: {
      type: String, // Store image URL/path as String
    },
    tweetMessage: {
      type: String,
      required: true,
    },
    tweetLikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
      },
    ],
    tweetReplies: [
      {
        account: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Account", // References to Account model
          required: true,
        },
        replyMessage: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Virtual for reply count
newPostingSchema.virtual("replyCount").get(function () {
  return this.tweetReplies.length;
});

newPostingSchema.set("toJSON", { virtuals: true });
newPostingSchema.set("toObject", { virtuals: true });

const newPostingModel = mongoose.model("Posting", newPostingSchema);
module.exports = newPostingModel;
