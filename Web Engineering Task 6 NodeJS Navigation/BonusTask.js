var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'f190916@nu.edu.pk',
    pass: 'phantom1424'
  }
});

var mailOptions = {
  from: 'f190916@nu.edu.pk',
  to: 'usman.azhar@nu.edu.pk',
  subject: '19F-0916 Bonus Task',
  text: 'Arabic Corpus'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 