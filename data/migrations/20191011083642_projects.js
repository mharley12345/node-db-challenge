
exports.up = function(knex) {
  return knex.schema
  .createTable('projects',(projects) =>{
      projects.increments('id')
      projects.string('name').notNullable()
      projects.text('description')
      projects.boolean('is_complete').notNullable().defaultTo(false)
      projects.integer('task_id')
      .unsigned()
      .notNullable()
      .references('tasks.id_in_tasks')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')
      projects.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('resources.id_in_resources')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')
  })
  .createTable('resources',(resources)=>{
      resources.increments('id')
      resources.string('name').notNullable().unique()
      resources.text('description')
      resources.integer('project_id')
      .unsigned()
      .notNullable()
      .references('projects.id_in_projects')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')
  })
  .createTable('tasks',(tasks)=>{
      tasks.increments('id')
      tasks.string('description').notNullable()
      tasks.text('notes')
      tasks.boolean('is_complete').notNullable().defaultTo(false)
      tasks.integer('project_id')
      .unsigned()
      .notNullable()
      .references('projects.id_in_projects')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')

};
