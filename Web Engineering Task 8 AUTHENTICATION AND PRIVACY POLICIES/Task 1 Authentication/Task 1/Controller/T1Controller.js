const express = require('express');
const app = express();

const T1schema = require('E:/FAST-NU/6th Semester/Web Engineering/Lab/Assignments/8/Task 1 Authentication/Task 1/Model/task1data');

// MongoDb Connection
const mongoose = require('mongoose');
const DBURI = 'mongodb+srv://abdullah1912:abcd1234@webproject.7w438.mongodb.net/MyLab?retryWrites=true&w=majority';
mongoose.connect(DBURI)
.then(()=> console.log ('MongoDB Connnected'))
.catch(err=> console.log(err));

app.get('/addIntoSchema', function (req,res){
  const TData = new T1schema({
    name:'Muhammad Abdullah',
    username:'Abdullah1912',
    subject:'Web Engineering Lab',
    password:'Mein Nahi Batoaunga'
  });
  TData.save()
  .then((result)=>{
    res.send(result);
  })
  .catch((err)=>{
    console.log(err);
  })
});

app.get('/retriveFromSchema',function(req,res){
  T1schema.find()
  .then((result)=>{
    res.send(result);
  })
  .catch((err)=>{
    console.log(err);
  })
});

app.get('/retriveFromSchemaByID',function(req,res){
  T1schema.findById(ObjectId("626240a0237919dc81760de4"))
  .then((result)=>{
    res.send(result);
  })
  .catch((err)=>{
    console.log(err);
  })
});
app.listen(8000)