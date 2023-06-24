const { DataTypes } = require('sequelize');

const seq = require('../db/seq.js');

const User = seq.define('user', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '用户名',
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: '密码',
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    comment: '邮箱',
  },
  nickname: {
    type: DataTypes.CHAR(30),
    allowNull: true,
    comment: '昵称',
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    comment: '角色ID',
  },
});

// User.sync({ force: true });
module.exports = User;
