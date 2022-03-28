const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    accountType: {type: Boolean, required: true},
    answers: [{type: Types.ObjectId, ref: 'Answers'}]
})

module.exports = model('User', schema)