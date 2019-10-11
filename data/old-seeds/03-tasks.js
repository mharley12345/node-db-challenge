
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
       {id:2,description:"Seed test data",notes:"Hurry Times almost up",is_complete:false,project_id:2}
      ]);
    });
};
