const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    name: String,
    content: String
});

module.exports = mongoose.model('Post', Post);