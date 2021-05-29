const { Router } = require('express');
const sgMail = require('@sendgrid/mail');

const router = Router();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/send', async (req, res) => {
  try {
    const data = await sgMail.send({
      // to: ['4a6g0068@stust.edu.tw', 'a78945612385238@gmail.com'],
      to: '4a6g0068@stust.edu.tw',
      // from: 'a78945612385238@gmail.com',

      from: {
        name: 'Ian Lan',
        email: 'a78945612385238@gmail.com',
      },
      replyTo: {
        name: 'Ian Lan',
        email: 'a78945612385238@gmail.com',
      },
      subject: 'SendGrid 測試',
      text: '測試!!',
      html: "<h1 style='color: red;'>哇哈哈</h1>",
    });

    console.log(data);

    res.send({ success: true, message: '已發送' });
  } catch (error) {
    console.log(error.response.body);

    res.status(500).send({ success: false, message: error.message });
  }
});

module.exports = router;
