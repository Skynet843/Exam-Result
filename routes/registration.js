const express = require('express');
const router = express.Router();
router.get('/registration',(req,res, next)=>{
    res.render('registration', {pageTitle : "Exam Result : Registration"});
});
router.post('/registration',(req,res, next)=>{
    res.status(302).redirect('/');
});
module.exports = router;