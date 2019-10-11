
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 2, name: 'test',description:'test description hope it works',project_id:2},
     
      ]);
    });
};
