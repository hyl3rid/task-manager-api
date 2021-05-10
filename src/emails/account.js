const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'cliff.bam92@gmail.com',
    subject: 'Thanks for joining!',
    text: `Welcome to the App, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'cliff.bam92@gmail.com',
    subject: 'Sorry to see you go...',
    text: `Bye from the App, ${name}. Feel free to share any feedback on why you are leaving our App.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
