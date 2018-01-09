import StudentModel from '../models/student'

class Student {
  constructor () {}
  async saveStudent (ctx, next) {
    const opts = ctx.request.body
    const student = new StudentModel(opts)

    try {
      const savedStudent = await student.save()

      if (savedStudent) {
        ctx.body = {
          success: true,
          student: savedStudent
        }
      } else {
        throw new Error('save student failed.')
      }
    } catch (err) {
      ctx.body = {
        success: false, errmsg: err.message
      }
    }
  }

  async fetchStudent (ctx, next) {
    try {
      const students = await StudentModel.find({})

      if (students) {
        ctx.body = { success: true, student: students }
      } else {
        throw new Error('fetch student failed.')
      }
    } catch (err) {
      ctx.body = { success: false, errmsg: err.message }
    }
  }

  async fetchStudentDetail (ctx, next) {
    try {
      const students = await StudentModel.find({}).populate({
        path: 'info',
        select: 'hobby height weight'
      }).exec()

      if (students) {
        ctx.body = { success: true, student: students }
      } else {
        throw new Error('fetch student detail failed.')
      }
    } catch (err) {
      ctx.body = { success: false, errmsg: err.message }
    }
  }
}

export default new Student()
