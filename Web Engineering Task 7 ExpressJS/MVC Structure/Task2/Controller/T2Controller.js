const express = require('express');
const app = express();

app.get('/proj.html', function (req, res) {
  res.sendFile('E:/FAST-NU/6th Semester/Web Engineering/Lab/Assignments/7/MVC Structure/Task2/View/project.html')
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
    res.sendFile('E:/FAST-NU/6th Semester/Web Engineering/Lab/Assignments/7/MVC Structure/Task2/View/404.html')
});