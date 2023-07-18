const express = require ('express');
const app = express();
const PORT = 8080;


app.use(express.json())

app.get('/home' ,(req,res) => {
res.status(200).send({
    name:'Abdullah',
    roll:'0916'
})
});


app.post('/home/:roll', (req,res) => {
    const roll= req.params.roll;
    
    res.send ({
        name: roll
    })
})


app.listen(
    PORT,
    () => console.log("its Alive")
)