const express = require ('express');
const app = express();

users = [
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
    {id: 11, Name: 'User 11'},
    {id: 12, Name: 'User 12'},
    {id: 13, Name: 'User 13'},
    {id: 14, Name: 'User 14'},
    {id: 15, Name: 'User 15'},
    {id: 16, Name: 'User 16'},
    {id: 17, Name: 'User 17'},
    {id: 18, Name: 'User 18'},
    {id: 19, Name: 'User 19'},
    {id: 20, Name: 'User 20'},
    {id: 21, Name: 'User 21'},
    {id: 22, Name: 'User 22'},
    {id: 23, Name: 'User 23'},
    {id: 24, Name: 'User 24'},
    {id: 25, Name: 'User 25'},
    {id: 26, Name: 'User 26'},
    
]

app.get('/Task2', (req,res) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

const startIndex = (page - 1) * limit
const endIndex = page * limit

const results = {}

if (endIndex < users.length){
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

results.results = users.slice(startIndex,endIndex)

    res.json(results)
})

app.listen(8000);