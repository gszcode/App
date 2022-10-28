import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      minLength: 4,
      maxLength: 25
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
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
