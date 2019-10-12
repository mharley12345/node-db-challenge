
exports.up = function(knex) {
  return knex.schema
  .createTable('projects',(projects) =>{
      projects.increments('id')
      projects.string('name',).notNullable()
      projects.text('description')
      projects.boolean('completed')
      .notNullable()
     
      .defaultTo(false,JSON.stringify({0:false}))
     
  })
  .createTable('tasks',(tasks)=>{
      tasks.increments('id')
      
      tasks.integer('project_id',6)
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')
      tasks.string('description',255).notNullable()
      tasks.text('notes',500).nullable()
      tasks.boolean('completed')
  
      .defaultTo(false,JSON.stringify({completed:true}))
   
  })
  .createTable('resources',(resources) =>{
    resources.increments()
    resources.string('name',255)
    .notNullable()
    .unique()
    resources.string("description")
    .nullable()
  })
  .createTable('_resources_',(tbl)=>{
    tbl.increments('id')
    tbl.integer('project_id',6)
    .notNullable()
    .unsigned()
    .references('id')
    .inTable('projects')
    .onUpdate('CASCADE')
    .onDelete('RESTRICT')
    tbl.integer('resources_id')
    .notNullable()
    .unsigned()
    .references('id')
    .inTable('resources')
    .onUpdate('CASCADE')
    .onDelete('RESTRICT')

  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('_resources_')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
  
};
