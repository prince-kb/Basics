const mongoose = require('mongoose');
const NotesSchema = new Schema({
    name :{
        type : String,
        required: true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
    },
    description : {
        type:String,
    },
    tag :{
        type : String,
    },
    date : {
        type : Date,
        Default : Date.now
    }
})

module.exports = mongoose.model('notes',NotesSchema);