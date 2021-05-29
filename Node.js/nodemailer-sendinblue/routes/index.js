const { Router } = require('express');
const SibApiV3Sdk = require('sib-api-v3-sdk');

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

const router = Router();

router.post('/send', async (req, res) => {
  try {
    sendSmtpEmail.subject = 'Sendinblue 測試';
    sendSmtpEmail.sender = {
      name: '奕濡',
      email: 'a78945612385238@gmail.com',
    };
    sendSmtpEmail.replyTo = {
      name: '奕濡',
      email: 'a78945612385238@gmail.com',
    };
    sendSmtpEmail.to = [
      { email: '4a6g0068@stust.edu.tw' },
      { email: 'a789945612385238@gmail.com' },
    ];
    sendSmtpEmail.htmlContent = '<html><body><h1>訊息測試</h1></body></html>';

    console.log(sendSmtpEmail);

    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);

    console.log(data);

    res.send({ success: true, message: '已發送' });
  } catch (error) {
    console.log(error);
    // console.log(error.response.body);

    res.status(500).send({ success: false, message: error.message });
  }
});

module.exports = router;
