const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    ime: {type: String, required: true },
    prezime: { type:String, required: true },
    email: { type:String, required: true }
});

module.exports = mongoose.model('User', userSchema);