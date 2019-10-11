const express = require('express');
const router = express.Router();
const db = require('../models/db-model')

router.get('/' ,(req,res)=>{
    res.send("<h1>I Work</h1>")
})



module.exports=router