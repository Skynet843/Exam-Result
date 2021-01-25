const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const database = [];
router.get('/registration',(req,res, next)=>{
    res.render('registration', {pageTitle : "Exam Result : Registration"});
});
router.post('/registration',(req,res, next)=>{
    database.push({email : req.body.email, marks : req.body.marks});
    res.status(302).redirect('/');
});
exports.router = router;
exports.database = database;