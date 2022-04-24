const Service = require('egg').Service;

const nodemailer = require('nodemailer');
// const user_email = '493465197@qq.com';
// const auth_code = 'alsehidykeowbjia';
const user_email = 'zraipi@163.com';
const auth_code = 'TTYWHBEVSWWZRTEK';

const transporter = nodemailer.createTransport({
  service: '163',
  secureConnection: true,
  port: 465,
  auth: {
    user: user_email, // 账号
    pass: auth_code, // 授权码

  },
});

class ToolService extends Service {

  async sendMail(email, subject, text, html) {

    const mailOptions = {
      from: user_email, // 发送者,与上面的user一致
      to: email,   // 接收者,可以同时发送多个,以逗号隔开
      subject,   // 标题
      text,   // 文本
      html,
    };

    try {
      await transporter.sendMail(mailOptions);
      return true;
    } catch (err) {
      return false;
    }
  }

}

module.exports = ToolService;
