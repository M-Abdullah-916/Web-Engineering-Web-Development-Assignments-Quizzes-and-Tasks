const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const task4Schema = new Schema ({
    name: {
        type: String,
        required: true
    }
})

const task4data = mongoose.model('Task4',task4Schema)
module.exports = task4data;
