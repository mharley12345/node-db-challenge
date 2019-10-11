const express = require('express');
const router = express.Router();
const db = require('../models/db-model')


// get routes
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

router.get('/projects',(req,res)=>{
    db.getProjects()
    .then(projects =>{
        if (projects){
            res.json(projects)
        }else{
            res.status(404).json({message:"Sorry No Projects Found"})
        }
})
       .catch(err => {
           res.status(500).json({message:`Sorry we are incompetent and our server is broke. ${err}`})
       })
})

router.get('/tasks/:id',(req,res)=>{
    db.getTasks(req.param.id)
    .then(tasks =>{
        if (tasks){
            res.json(tasks)
        }else{
            res.status(404).json({message:"Sorry No Tasks Found"})
        }
})
       .catch(err => {
           res.status(500).json({message:`Sorry we are incompetent and our server is broke. ${err}`})
       })
})

// ADD

router.post('/addresource',(req,res)=>{
    db.addResource(req.body)
    .then(resource =>{
        res.status(201).json({newResource : resource})
    })
    .catch(err =>{
        res.status(500).json({message:`Sorry we are incompetent and our server is broke. ${err}`})
    })
})

    router.post('/addproject',(req,res)=>{
        db.addProject(req.body)
        .then(project =>{
            res.status(201).json({newProject : project})
        })
        .catch(err =>{
            res.status(500).json({message:`Sorry we are incompetent and our server is broke. ${err}`})
        })
    })

    router.post('/addtask',(req,res)=>{
        db.addTask(req.body)
        .then(task =>{
            res.status(201).json({newTask : task})
        })
        .catch(err =>{
            res.status(500).json({message:`Sorry we are incompetent and our server is broke. ${err}`})
        })
    })


//Delete tasks
 router.delete('/tasks/:id', (req, res) => {
    db.remove(req.params.id)
    .then(() => {
        res.status(200).json({ message: 'task deleted'})
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "An error occured while trying to delete the task." })
    })
});
//Delete resources
router.delete('/resources/:id', (req, res) => {
    db.remove(req.params.id)
    .then(() => {
        res.status(200).json({ message: 'resource deleted'})
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "An error occured while trying to delete the resource." })
    })
});

//Delete projects

router.delete('/projects/:id', (req, res) => {
    db.remove(req.params.id)
    .then(() => {
        res.status(200).json({ message: 'project deleted'})
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "An error occured while trying to delete the project." })
    })
});
 

module.exports=router