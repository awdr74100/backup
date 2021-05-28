const nodemailer = require("nodemailer");

module.exports = async (email) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    /**
     * 3LO
     */
    auth: {
      type: "OAuth2",
      user: process.env.GOOGLE_EMAIL,
      clientId: process.env.GCP_OAUTH_CLIENT_ID,
      clientSecret: process.env.GCP_OAUTH_CLIENT_SECRET,
      refreshToken: process.env.GCP_GMAIL_API_REFRESH_TOKEN,
      // accessToken: "", // 如果 accessToken 無效 (過期、未定義、輸入為空)，將使用 refreshToken 自動換取 accessToken
    },
    /**
     * 2LO (Need Google Workspace)
     */
    // auth: {
    //   type: "OAuth2",
    //   user: process.env.GOOGLE_EMAIL,
    //   serviceClient: process.env.GCP_SERVICE_ACCOUNT_CLIENT_ID,
    //   privateKey: process.env.GCP_SERVICE_ACCOUNT_PRIVATE_KEY.replace(
    //     /\\n/g,
    //     "\n"
    //   ),
    // },
  });

  transporter.on("token", (token) => {
    console.log("A new access token was generated");
    console.log("User: %s", token.user);
    console.log("Access Token: %s", token.accessToken);
    console.log("Expires: %s", new Date(token.expires).toLocaleString());
  });

  try {
    const info = await transporter.sendMail({
      from: `"Ian Lan" <${process.env.GOOGLE_EMAIL}>`,
      to: email,
      subject: "Nodemailer Send Test...",
      text: "此為測試信件！",
    });

    console.log(info);
  } catch (error) {
    throw error;
  }
};
