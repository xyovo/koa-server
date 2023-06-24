const User = require('../model/user.model.js');

class UserService {
  async createUser(username, password) {
    const res = await User.create({
      username,
      password,
    });
    return res.dataValues;
  }

  async getUserInfo({ id, username, password, roleId, email }) {
    const whereOpt = {};

    id && Object.assign(whereOpt, { id });
    username && Object.assign(whereOpt, { username });
    password && Object.assign(whereOpt, { password });
    roleId && Object.assign(whereOpt, { roleId });
    email && Object.assign(whereOpt, { email });

    const res = await User.findOne({
      attributes: ['id', 'username', 'password', 'roleId', 'email'],
      where: whereOpt,
    });
    return res ? res.dataValues : null;
  }
}

module.exports = new UserService();
