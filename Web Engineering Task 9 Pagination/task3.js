const express = require ('express');
const app = express();

const users = [
    {id: 1, Name: 'User 1'},
    {id: 2, Name: 'User 2'},
    {id: 3, Name: 'User 3'},
    {id: 4, Name: 'User 4'},
    {id: 5, Name: 'User 5'},
    {id: 6, Name: 'User 6'},
    {id: 7, Name: 'User 7'},
    {id: 8, Name: 'User 8'},
    {id: 9, Name: 'User 9'},
    {id: 10, Name: 'User 10'},
    
]

const admin = [
    {id: 1, Name: 'admin 1'},
    {id: 2, Name: 'admin 2'},
    {id: 3, Name: 'admin 3'},
    {id: 4, Name: 'admin 4'},
    {id: 5, Name: 'admin 5'},
    {id: 6, Name: 'admin 6'},
    {id: 7, Name: 'admin 7'},
    {id: 8, Name: 'admin 8'},
    {id: 9, Name: 'admin 9'},
    {id: 10, Name: 'admin 10'},
    
]

const customer = [
    {id: 1, Name: 'customer 1'},
    {id: 2, Name: 'customer 2'},
    {id: 3, Name: 'customer 3'},
    {id: 4, Name: 'customer 4'},
    {id: 5, Name: 'customer 5'},
    {id: 6, Name: 'customer 6'},
    {id: 7, Name: 'customer 7'},
    {id: 8, Name: 'customer 8'},
    {id: 9, Name: 'customer 9'},
    {id: 10, Name: 'customer 10'},
    
]

app.get('/users', PaginatedResults(users), (req,res) => {
    
    res.json(res.PaginatedResults)
})

app.get('/admin', PaginatedResults(admin), (req,res) => {
    
    res.json(res.PaginatedResults)
})

app.get('/customer', PaginatedResults(customer), (req,res) => {
    
    res.json(res.PaginatedResults)
})

function PaginatedResults(model){
    return (req,res,next) => {
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

    results.results = model.slice(startIndex,endIndex)

    res.PaginatedResults = results
    next()
    
    }
}

app.listen(8000);