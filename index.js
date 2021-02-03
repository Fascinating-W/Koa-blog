const Koa = require('koa')
const app = new Koa()

const conf = require('./config')

app.use(async ctx => {
  ctx.body = 'Hello World22222';
})

app.listen(3000, () => {
  console.log('App listening on port 3000!');
})