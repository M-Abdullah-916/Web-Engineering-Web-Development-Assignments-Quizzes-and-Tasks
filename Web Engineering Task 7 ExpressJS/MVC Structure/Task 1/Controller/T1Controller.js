const express = require('express');
const app = express();

app.get('/winter.html', function (req, res) {
  res.sendFile('E:/FAST-NU/6th Semester/Web Engineering/Lab/Assignments/7/MVC Structure/Task 1/View/winter.html')
});

app.get('/summer.html', function (req, res) {
    res.sendFile('E:/FAST-NU/6th Semester/Web Engineering/Lab/Assignments/7/MVC Structure/Task 1/View/summer.html')
});

app.get('/spring.html', function (req, res) {
    res.sendFile('E:/FAST-NU/6th Semester/Web Engineering/Lab/Assignments/7/MVC Structure/Task 1/View/spring.html')
});

app.listen(8080)