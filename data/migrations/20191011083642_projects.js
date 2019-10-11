
exports.up = function(knex) {
  return knex.schema
  .createTable('projects',(projects) =>{
      projects.increments('id')
      projects.string('name').notNullable()
      projects.text('description')
      projects.binary('is_complete',1).notNullable().defaultTo(0)
     
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
      tasks.binary('is_complete',1).defaultTo(0)
   
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
    tbl.increments()
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
