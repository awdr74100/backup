const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

app.post('/reset_password', async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true,
      port: 465,
      auth: {
        type: 'OAuth2',
        user: process.env.GCP_GMAIL_API_ACCOUNT,
        clientId: process.env.GCP_OAUTH_CLIENT_ID,
        clientSecret: process.env.GCP_OAUTH_CLIENT_SECRET,
        refreshToken: process.env.GCP_GMAIL_API_REFRESH_TOKEN,
      },
    });
    const info = await transporter.sendMail({
      from: `"Ian Lan" <${process.env.GCP_GMAIL_API_ACCOUNT}>`,
      to: '4a6g0068@gmail.com',
      subject: 'Nodemailer Send Test...',
      text: '哇哈哈',
    });
    console.log(info);
    res.send({ success: true });
  } catch (error) {
    res.send({ success: false });
  }
});

app.listen(port, () => console.log(`start localhost ${port}`));
