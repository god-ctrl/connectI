
const mongoose = require('mongoose');
 


//connect with a database
mongoose.connect('mongodb://localhost/contact_list_db');
//acquire the connection(to check if it is succesful)

var db=mongoose.connection;
//error
db.on('error',console.error.bind(console,'error connecting to db'));
//up and running then print the message
db.once('open',function(){
    console.log("succesfully connected to database");
});