export default {
  // dbPath: 'mongodb://localhost/graphql'
  mongodb: {
    host: 'mongodb://localhost',
    database: '/graphql',
    opt: {
      useMongoClient: true,
      autoReconnect: true // 自动重连
    }
  }
}


