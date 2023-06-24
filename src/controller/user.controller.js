const { createUser } = require('../service/user.service.js');

class UserController {
  async register(ctx, next) {
    // 1.获取用户请求传递的参数
    const { username, password } = ctx.request.body;
    // 2.将参数传递给service层
    const result = await createUser(username, password);
    // 3.返回结果
    ctx.body = {
      msg: result,
      data: ctx.request.body,
    };
  }

  async login(ctx, next) {
    ctx.body = '用户登录成功';
  }
}
module.exports = new UserController();
