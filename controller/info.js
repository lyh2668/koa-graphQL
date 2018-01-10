import InfoModel from '../models/info'

class Info {

  constructor () {}

  async saveInfo (ctx, next) {
    const opts = ctx.request.body

    const info = new InfoModel(opts)

    try {
      const savedInfo = await info.save()
      console.log('saved: ', savedInfo)

      if (saveInfo) {
        ctx.body = { success: true, info: savedInfo }
      } else {
        throw new Error('info save failed.')
      }
    } catch (err) {
      ctx.body = { success: false, errmsg: err.message }
    }
  }

  async fetchInfo (ctx, next) {
    try {
      const infos = await InfoModel.find({})
      
      if (infos) {
        ctx.body = {
          success: true,
          info: infos
        }
      } else {
        throw new Error('info fetch failed.')
      }
    } catch (err) {
      ctx.body = { success: false, errmsg: err.message }
    }
  }
}

export default new Info()
