
const db = require('../config/mongoose');
const contact =require('../models/contact');
module.exports.home = function(req,res){
    contact.find({},function(err,contacts){
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }
        return res.render('home',{
            title: "My contacts List", 
            contact_list: contacts
        });
    });
    
    
}