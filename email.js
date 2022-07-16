const nodemailer = require("nodemailer");

const sendEmail = async function (data) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "francisolatinwo@gmail.com",
      pass: "ojkzcmshtnuqfita",
    },
  });

  const mailOptions = {
    from: "Francis Olatinwo hello@gmail.com",
    to: "olafrancis780@gmail.com",
    subject: "Requested Task",
    text: `Task details are as follows :
        ${data}`,
  };

  await transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(`Error: ${err}`);
    } else {
      console.log("Email sent");
    }
  });
};

module.exports = sendEmail;
