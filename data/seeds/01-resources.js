
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
       {name:"Mike"},
       {name:"Laptop"},
       {name:"Zoom"},
       {name:"MIT"}
      ]);
    });
};
