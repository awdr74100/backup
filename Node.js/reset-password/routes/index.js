const { Router } = require('express');
const jwt = require('jsonwebtoken');

const userController = require('../controllers/userController');

const router = Router();

router.post('/user/signup', userController.signUp);
router.post('/user/login', userController.login);
router.post('/user/logout', userController.logout);
router.post('/user/forgot_password', userController.forgot_password);
router.post('/user/reset_password/:token', userController.reset_password);

router.get('/user/forgot_password', (req, res) => {
  res.render('forgot_password');
});

router.get('/user/reset_password/:token', (req, res) => {
  const { token } = req.params;

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    console.log(decoded);

    res.render('reset_password');
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
});

module.exports = router;
