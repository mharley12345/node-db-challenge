
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id:2,name:"Test",description:"Test project hope it works",is_complete:false,task_id:2,resource_id:2}
      ]);
    });
};
