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
    
]

app.get('/Task1', (req,res) => {
    res.json(users)
})

app.listen(8000);