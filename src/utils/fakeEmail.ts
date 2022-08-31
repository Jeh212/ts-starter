/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import nodemailer from 'nodemailer';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const sendEmail = async (data: any) => {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: `smtp.ethereal.email`,
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const info = await transporter.sendMail({
    from: `"Jean 👻" <foo@example.com>`,
    to: `bar@example.com, baz@example.com`,
    subject: `Currency ✔`,
    text: `Currency sent`,
  });

  console.log(`Message sent: %s`, info.messageId);

  console.log(`Preview URL: %s`, nodemailer.getTestMessageUrl(info));
};

export { sendEmail };
