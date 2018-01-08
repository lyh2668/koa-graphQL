import Mongoose from 'mongoose'
import config from '../config'

export const databse = () => {
  mongoose.set('debug', true)

  mongoose.connect(config.dbPath)

  mongoose.connection.on('disconnected', () => {
    mongoose.connect(config.dbPath)
  })
  mongoose.connection.on('error', err => {
    console.error(err)
  })

  mongoose.connection.on('open', async () => {
    cosole.log('Connected to MongoDB', config.dbPath)
  })
}
