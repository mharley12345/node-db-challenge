
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name:'Take DB Challenge'},
        {name:"Finish Lambda"},
        {name:"Get Rich"}
      ]);
    });
};
