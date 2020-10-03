const mongoose=require('mongoose');
const contactSchema =new mongoose.Schema({
    description:{
        type:String,
        required: true
    },
    date: {
        type:Date,
        required:true
    }
});

const Contact= mongoose.model('Contact',contactSchema);
module.exports = Contact;
