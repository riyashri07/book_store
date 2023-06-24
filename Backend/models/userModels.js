const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: {
        type: String,
        require: true,
        validate: [validator.isEmail],
    },
    password: {
        type: String,
        require: true,
        minLength: [3],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

userSchema.methods.getjwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_SECRET_KEY_EXPIRE,
    });
};

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
