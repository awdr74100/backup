const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.signUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashPassword = await argon2.hash(password, { type: argon2.argon2id });

    const user = new User({
      name,
      email,
      password: hashPassword,
    });

    await user.save();

    res.send({ success: true, message: '註冊成功' });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.send({ success: false, message: '找不到用戶' });
      return;
    }

    const verifyPassword = await argon2.verify(user.password, password);

    if (!verifyPassword) {
      res.send({ success: false, message: '密碼錯誤' });
      return;
    }

    const accessToken = jwt.sign(
      { id: user.id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '20m' },
    );

    res.send({ success: true, message: '登入成功', accessToken });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

exports.logout = (req, res) => {
  res.send({ success: true, message: '已登出' });
};

exports.forgot_password = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.send({ success: false, message: '找不到用戶' });
      return;
    }

    const token = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '15m',
    });

    const link = `http://localhost:3000/api/user/reset_password/${token}`;

    console.log(link);

    res.send({ success: true, message: '已寄出密碼重製信件' });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

exports.reset_password = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const hashPassword = await argon2.hash(password, { type: argon2.argon2id });

    await User.updateOne({ _id: decoded.id }, { password: hashPassword });

    res.send({ success: true, message: '密碼已更新' });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};
