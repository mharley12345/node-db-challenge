const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

module.exports = {
    addResource,
    getResources,
     addProject,
    getProjects,
     addTask,
     getTasks
}
// get 
function getResources(){
    return db('resources')
}

function getProjects(){
    return db('projects')
   
}

function getTasks(){
    return db('tasks')
}

// add

function addResource(resource){
    return db('resources')
    .insert(resource)
    .then(resource =>{
        return resource
    })
}
function addProject(project){
return db('projects')
.insert(project)
.then(project =>{
    return project
})
  
}
function addTask(task){
    return db('tasks')
    .insert(task)
    .then(task =>{
        return task
    })
}
