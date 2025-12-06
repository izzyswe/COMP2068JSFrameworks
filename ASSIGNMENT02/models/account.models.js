//IMPORTS
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const AccountSchema = new mongoose.Schema({
  accountEmail: {
    type: String,
    required: true,
    unique: true,
  },
  accountUsername: {
    type: String,
    required: true,
    unique: true,
  },
  accountPassword: {
    type: String,
    required: true,
  },
  accountProfilePicture: {
    type: String, // Store URL or file path
    default: "/images/default_pfp.svg", // Using null instead of 'none' to say there is nothing
  },
});

// Hash password before saving
AccountSchema.pre("save", async function () {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified("accountPassword")) return;

  try {
    const salt = await bcrypt.genSalt(10); // Generate a salt
    this.accountPassword = await bcrypt.hash(this.accountPassword, salt); // Hash the password
  } catch (error) {
    console.error("Error hashing password:", error);
    throw error;
  }
});

AccountSchema.methods.comparePassword = async function (accountPassword) {
  return bcrypt.compare(accountPassword, this.accountPassword);
};

const AccountModel = mongoose.model("Account", AccountSchema);
module.exports = AccountModel;
