const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const t1Schema = new Schema ({
    name:{
        type:String,
        require:true,
    },
    username:{
        type:String,
        require:true,
    },
    subject:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }
})

const t1data = mongoose.model('WebLab',t1Schema);
module.exports = t1data;