const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    token: {type:String, required:true}
});

const User = mongoose.model('User', userSchema);

module.exports = User;