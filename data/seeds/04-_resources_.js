
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('_resources_').del()
    .then(function () {
      // Inserts seed entries
      return knex('_resources_').insert([
         {project_id:1,resources_id:1},
     
      ]);
    });
};
