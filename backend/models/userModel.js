import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Please enter your Name'],
      minLength: [4, 'Name should have more than 4 characteres'],
      maxLength: [25, 'Name cannot exced 30 characteres']
    },
    email: {
      type: String,
      trim: true,
      required: [true, 'Please enter your Email'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Please enter your Password'],
      minLength: [8, 'Password should have more than 8 characteres'],
      trim: true
    },
    avatar: {
      type: String,
      default:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrpGDGWXE18yDIVfampTKpShNQebC65Lg99Q&usqp=CAU'
    },
    role: {
      type: String,
      default: 'user'
    }
  },
  {
    versionKey: false
  }
)

// Hash password
userSchema.pre('save', async function (next) {
  const user = this

  if (!user.isModified('password')) return next()

  const salt = await bcrypt.genSalt(10)
  user.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.comparePassword = async function (passwordToCompare) {
  return await bcrypt.compare(passwordToCompare, this.password)
}

export default model('User', userSchema)
