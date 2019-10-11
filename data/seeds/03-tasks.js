
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
         {project_id:1,description:'start test'},
         {project_id:1,description:'submit test'},
         {project_id:2,description:'pass backend'},
         {project_id:2,description:'pass labs'},
         {project_id:3,description:'Get job making a mil a year'}
      ]);
    });
};
