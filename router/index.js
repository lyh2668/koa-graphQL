import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa'
import Info from '../controller/info'
import Student from '../controller/student'

import GraphqlSchema from '../graphql'
// import router from 'koa-router'
const router = require('koa-router')()

router.post('/info/save', Info.saveInfo)
      .get('/info', Info.fetchInfo)
      .post('/student/save', Student.saveStudent)
      .get('/student', Student.fetchStudent)
      .get('/student/detail', Student.fetchStudentDetail)

router.post('/graphql', async (ctx, next) => {
        await graphqlKoa({schema: GraphqlSchema})(ctx, next)
      })
      .get('/graphql', async (ctx, next) => {
        await graphqlKoa({schema: GraphqlSchema})(ctx, next)
      })
      .get('/graphiql', async (ctx, next) => {
        await graphiqlKoa({ endpointURL: '/graphql' })(ctx, next)
      })

export default router
