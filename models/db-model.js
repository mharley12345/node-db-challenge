const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

module.exports = {
    // addResource,
    getResources,
    // addProject,
    // getProjects,
    // addTask,
    // getTasks
}

function getResources(){
    return db('resources')
    
}