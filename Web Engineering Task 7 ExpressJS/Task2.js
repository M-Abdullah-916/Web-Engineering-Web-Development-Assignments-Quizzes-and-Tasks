const express = require('express');
const app = express();

app.get('/proj.html', function (req, res) {
  res.sendFile('/project.html',{root: __dirname})
});

app.get('/project.html', function (req, res) {
    res.redirect('/proj.html')
  });

app.get('/my-project.html', function (req, res) {
    res.redirect('/proj.html')
  });

app.get('/myproject.html', function (req, res) {
    res.redirect('/proj.html')
  });


app.listen(8080)

app.use(function(req,res){
    res.sendFile('/404.html',{root: __dirname})
});