const express=require('express');
const router =express.Router();
router.use(express.urlencoded({ extended: true }));
const homeController = require('../controllers/home_controller');
const db = require('../config/mongoose');
const toDo =require('../models/contact');
console.log('router started');
router.get('/',homeController.home);

router.post('/create-todo', function(req, res){
    toDo.create({
        description: req.body.description,
        date: req.body.date
    },function(err,newTodo){
        if(err){
            console.log('error');
            return;
        }
        console.log('******',newTodo);
        return res.redirect('back');
    });
});
router.get('/delete-contact/',function(req,res){
    //get the id from query in the url
    
    let id=req.query.id;
    //find the index of the contact list with the given id 
    toDo.findByIdAndDelete(id,function(err){
        if(err)
        {
            console.log('error in deleting an object from database');
            return;
        }
        return res.redirect('back');
    });
    
    
});

router.use('/users',require('./users'));
//for any further routes,access from here
//router.use('/routerName',require('./routerFile));
router.use('/editor',require('./editor'));
module.exports = router;
