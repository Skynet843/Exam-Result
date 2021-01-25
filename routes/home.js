const express = require('express');
const router = express.Router();
router.get('/',(req,res, next)=>{
    res.render('home', {pageTitle : "Exam result : Home"});
});
module.exports = router;