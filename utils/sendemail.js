require("dotenv").config();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const PORT = process.env.PORT;

const sendVerificationToken = async (mail, token) => {

  const msg = {
    to: mail,
    from: "edytaasowa@gmail.com",
    subject: "Email verification",
    text: `Let's verify your email address`,
    html: ` <strong>By clicking on the following button, you are confirming your email address </strong> <br>
    <a align="center" href="${`http://localhost:${PORT}/api/users/verify/${token}`}" style="border:2px solid #183153;border-bottom-width:6pxt;border-radius:8px;color:#3366cc;display:inline-block;font-family:'Cera Round Pro',' Proxima Nova Soft',' Proxima Nova',' Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;font-weight:700;line-height:1.5;padding:16px 40px 16px 40px;text-align:center;text-decoration:none" target="_blank" >
    <span class="il">Confirm</span> Your Email Address
  </a>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports =  {sendVerificationToken};
