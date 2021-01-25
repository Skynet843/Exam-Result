const express = require('express');
const router = express.Router();
const stData = require('./registration');
router.get('/result',(req,res, next)=>{
    res.render('result', {pageTitle : "Exam Result : Result", datas : stData.database});
})
module.exports = router;