const express = require ('express');
const app = express()

const T4schema = require ('E:/FAST-NU/6th Semester/Web Engineering/Lab/Assignments/9/task4model.js')

const mongoose = require ('mongoose');
const DBURI = 'mongodb+srv://abdullah1912:abcd1234@webproject.7w438.mongodb.net/WebLab12?retryWrites=true&w=majority'
mongoose.connect(DBURI)
.then (() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.get('/user' ,function (req,res) {
    const T4Data = new T4schema({
        name: 'user 10'
    });
    T4Data.save()
    .then ((result)=>{
        res.send(result);
    })
    .catch((err)=> {
        console.log(err);
    })
})

app.get('/usersData', PaginatedResults(T4schema), (req,res) => {
    
    res.json(res.PaginatedResults)
})

function PaginatedResults(model){
    return async (req,res,next) => {
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)

        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        const results = {}

    if (endIndex < model.length){
        results.next = {
        page: page + 1,
        limit: limit
        }
    }

    if (startIndex > 0) {
        results.previous = {
        page: page - 1,
        limit: limit
        }
    }

    try{
        results.results = await model.find().limit(limit).skip(startIndex).exec()
        res.PaginatedResults = results
        next()
    } catch (e)  {
        res.status(500).json({mesaage: e.mesaage})
    }

    }
}

app.listen(8000);