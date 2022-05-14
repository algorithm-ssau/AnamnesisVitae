const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    accountType: {type: Boolean, required: true},
    answers: {type: String, required: false },
    answerTime: {type: Date, required: false },
    name: {type: String, required: false }
})

module.exports = model('User', schema)