const mongoose = require('mongoose')
const friendSchema = require('./friend')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  token: String
},
{
  friend: [friendSchema]
},
 {
  timestamps: true,
  toObject: {
    // remove `hashedPassword` field when we call `.toObject`
    transform: (_doc, user) => {
      delete user.hashedPassword
      return user
    },
  }
})

module.exports = mongoose.model('User', userSchema)


