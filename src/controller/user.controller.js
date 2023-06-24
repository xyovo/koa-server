const { createUser, getUserInfo } = require('../service/user.service.js');

class UserController {
  async register(ctx, next) {
    const { username, password } = ctx.request.body;
    // 参数校验
    if (!username || !password) {
      console.error('用户名或密码为空', ctx.request.body);
      ctx.status = 400;
      ctx.body = {
        msg: `用户名或密码不能为空~~`,
      };
      return;
    }
    // 判断用户名是否已经注册过
    if (getUserInfo({ username })) {
      console.error('用户名已经注册过', ctx.request.body);
      ctx.status = 409;
      ctx.body = {
        msg: `该用户名已被注册~~`,
        data: {},
      };
      return;
    }

    // 参数传递给service层
    const res = await createUser(username, password);

    ctx.status = 201;
    ctx.body = {
      msg: '注册成功~~',
      data: {
        id: res.id,
        username: res.username,
      },
    };
  }

  async login(ctx, next) {
    ctx.body = '用户登录成功';
  }
}
module.exports = new UserController();
