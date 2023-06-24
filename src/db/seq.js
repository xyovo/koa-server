const { Sequelize } = require('sequelize');
const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = require('../config/config.default.js');

const seq = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
});

module.exports = seq;

// seq
//   .authenticate()
//   .then(() => {
//     console.log('数据库连接成功');
//   })
//   .catch(err => {
//     console.log('数据库连接失败', err);
//   });
