const { APP_PORT } = require('./config/config.default.js');
const app = require('./app');

app.listen(APP_PORT, () => {
  console.log(`server is running at http://localhost:${APP_PORT}`);
});
