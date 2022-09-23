const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: String,
    grade: Number
})

module.exports = mongoose.model('Data', dataSchema)