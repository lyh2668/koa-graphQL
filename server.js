import Koa from 'koa'
import KoaStatic from 'koa-static'
import Router from 'koa-router'
import BodyParser from 'koa-bodyparser'

import './mongodb'
import Info from './controller/info'
import Student from './controller/student'

const app = new Koa()
const router = new Router()

app.use(BodyParser())
app.use(KoaStatic(__dirname + '/public'))

router.get('/api', (ctx, next) => {
  ctx.body = 'test page'
})

router.post('/info/save', Info.saveInfo)
router.get('/info', Info.fetchInfo)

router.post('/student/save', Student.saveStudent)
router.get('/student', Student.fetchStudent)
router.get('/student/detail', Student.fetchStudentDetail)

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(4000)

console.log('graphQL server listen port: ' + 4000)

