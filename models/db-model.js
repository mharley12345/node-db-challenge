const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

module.exports = {
    addResource,
    getResources,
     addProject,
    getProjects,
     addTask,
     getTasks,
    remove,
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
function addTask(task,id){
    return db('tasks')
    .where('project_id',id)
    .insert(task)
  
    .then(task =>{
        return task
    })
}

// Delete projects

function remove(id){
    return db('projects')
    .where('id',id)
    .del();
}
 
// Delete resources

function remove(id){
    return db('resources')
    .where('id',id)
    .del()

}

// Delete tasks

function remove(id){
    return db('tasks')
    .where('id',id)
    .del()
}