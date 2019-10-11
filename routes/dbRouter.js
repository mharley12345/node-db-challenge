const express = require('express');
const router = express.Router();
const db = require('../models/db-model')

router.get('/' ,(req,res)=>{
    res.send("<h1>I Work</h1>")
})

router.get('/resources',(req,res)=>{
    db.getResources()
    .then(resources =>{
        if (resources){
            res.json(resources)
        }else{
            res.status(404).json({message:"Sorry No Resources Found"})
        }
})
       .catch(err => {
           res.status(500).json({message:`Sorry we are incompetent and our server is broke. ${err}`})
       })
})


module.exports=router