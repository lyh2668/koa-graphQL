import Mongoose, { SchemaTypes } from 'mongoose'

const Schema = Mongoose.Schema
const ObjectId = SchemaTypes.ObjectId

const SchemaStudent = new Schema({
  name: String,
  sex: String,
  age: Number,
  info: {
    type: ObjectId,
    ref: 'Info'
  },
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
})

SchemaStudent.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createdAt = this.meta.updatedAt = Date.now()
  } else {
    this.meta.updatedAt = Date.now()
  }

  next()
})

export default Mongoose.model('Student', SchemaStudent)
