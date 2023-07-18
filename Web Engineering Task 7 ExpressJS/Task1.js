const express = require('express');
const app = express();

app.get('/winter.html', function (req, res) {
  res.sendFile('/winter.html',{root: __dirname})
});

app.get('/summer.html', function (req, res) {
    res.sendFile('/summer.html',{root: __dirname})
});

app.get('/spring.html', function (req, res) {
    res.sendFile('/spring.html',{root: __dirname})
});

app.listen(8080)