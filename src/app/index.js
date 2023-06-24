const Koa = require('koa');
const { koaBody } = require('koa-body');

const userRouter = require('../router/user.router.js');

const app = new Koa();

// 解析请求体中间件
app.use(koaBody());

app.use(userRouter.routes());

module.exports = app;
