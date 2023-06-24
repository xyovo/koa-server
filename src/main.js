const Koa = require('koa');

const { APP_PORT } = require('../config/config.default.js');

const app = new Koa();

app.use((ctx, next) => {
  ctx.body = 'Hello Koa';
});

console.log('APP_PORT', APP_PORT);

app.listen(APP_PORT, () => {
  console.log(`server is running at http://localhost:${APP_PORT}`);
});
