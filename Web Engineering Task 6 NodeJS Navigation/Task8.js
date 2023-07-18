var http = require('http');
var formidable = require('formidable');
var nodemailer = require('nodemailer');

http.createServer(function (req, res) {
  if (req.url == '/sendEmail') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var transporter = nodemailer.createTransport({

            service: 'gmail',
            auth: {
            user: fields.semail,
           pass: fields.spass
         }
       });
       
           var mailOptions = {
           from: fields.semail,
            to: fields.remail,
           subject: fields.subject,
           text: fields.content
       };

       
       
           transporter.sendMail(mailOptions, function(error, info){
           if (error) {
                console.log(error);
           } else {
               console.log('Email sent: ' + info.response);
           }
           if (err) throw err;
        res.write('Email Send !');
        res.end();
       });
    });
     
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="sendEmail" method="post" enctype="multipart/form-data">');
    res.write('<label for="semail">Enter Sender Email:</label>')
    res.write('<input type="text" name="Semail" id="semail"><br><br>')
    res.write('<label for="spass">Enter Sender Password:</label>')
    res.write('<input type="password" name="Spass" id="spass"><br><br>')
    res.write('<label for="remail">Enter Receiver Email:</label>')
    res.write('<input type="text" name="Remail" id="remail"><br><br>')
    res.write('<label for="subject">Enter Subject:</label>')
    res.write('<input type="text" name="Subject" id="subject"><br><br>')
    res.write('<label for="content">Enter Content:</label>')
    res.write('<input type="text" name="Content" id="content"><br><br>')
   
    res.write('<input type="submit" name="Send Details" id="details">');
    res.write('</form>');
    
    return res.end();
  }
}).listen(8080); 